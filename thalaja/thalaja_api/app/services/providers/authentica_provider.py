"""Authentica OTP provider (US-36).

OTP is owned by Authentica (https://authentica.sa), NOT Supabase. This
provider sends and verifies one-time passwords via Authentica's v2 REST API.

Confirmed contract (Authentica GitHub docs + Apiary):
  Base URL : https://api.authentica.sa
  Auth     : header  X-Authorization: <API_KEY>
  Headers  : Accept: application/json, Content-Type: application/json

  POST /api/v2/send-otp
    body (this project): {
      "method": "whatsapp",              # primary channel
      "phone": "+9665XXXXXXXX",          # E.164
      "template_id": 11,                 # approved WhatsApp template
      "fallback_email": "team@x.com"     # Authentica falls back to email itself
    }
    -> 200 { "success": true, ... }

  POST /api/v2/verify-otp
    body: { "phone": "+9665XXXXXXXX", "otp": "123456" }   (or "email")
    -> 200 { "verified": true }

Note: because Authentica handles the WhatsApp->email fallback internally
via `fallback_email`, the backend does NOT loop over channels itself.
"""
import logging

import requests
from flask import current_app

logger = logging.getLogger("thalaja.authentica")


class AuthenticaError(Exception):
    def __init__(self, message, status=400):
        super().__init__(message)
        self.message = message
        self.status = status


class AuthenticaProvider:
    def __init__(self):
        cfg = current_app.config
        self.base_url = cfg["AUTHENTICA_BASE_URL"].rstrip("/")
        self.api_key = cfg["AUTHENTICA_API_KEY"]
        self.method = cfg["AUTHENTICA_OTP_METHOD"]          # "whatsapp"
        self.template_id = cfg["AUTHENTICA_TEMPLATE_ID"]    # 11
        self.fallback_email = cfg["AUTHENTICA_FALLBACK_EMAIL"]

    def _headers(self):
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Authorization": self.api_key,
        }

    def _post(self, path, payload):
        url = f"{self.base_url}{path}"
        # Loud logging so requests are visible in the terminal (project goal).
        safe = {k: v for k, v in payload.items() if k != "otp"}
        logger.info("→ Authentica POST %s  %s", path, safe)
        resp = requests.post(url, json=payload, headers=self._headers(), timeout=20)
        data = resp.json() if resp.content else {}
        logger.info("← Authentica %s  status=%s  body=%s", path, resp.status_code, data)
        if not resp.ok:
            msg = data.get("message") or data.get("error") or "Authentica request failed"
            raise AuthenticaError(msg, status=resp.status_code)
        return data

    # ── US-36 : send OTP (WhatsApp + email fallback via Authentica) ──
    def send_otp(self, *, phone):
        body = {
            "method": self.method,
            "phone": phone,
            "template_id": self.template_id,
            "fallback_email": self.fallback_email,
        }
        data = self._post("/api/v2/send-otp", body)
        # channel actually used is decided by Authentica; we report the primary.
        return {"success": bool(data.get("success", True)), "method": self.method, "raw": data}

    # ── US-36 : verify OTP ───────────────────────────────────
    def verify_otp(self, *, otp, phone=None, email=None):
        body = {"otp": otp}
        if email:
            body["email"] = email
        else:
            body["phone"] = phone
        data = self._post("/api/v2/verify-otp", body)
        return bool(data.get("verified", data.get("success", False)))

    # ── optional: account balance (handy for terminal testing) ──
    def balance(self):
        url = f"{self.base_url}/api/v2/balance"
        resp = requests.get(url, headers={"Accept": "application/json", "X-Authorization": self.api_key}, timeout=15)
        data = resp.json() if resp.content else {}
        if not resp.ok:
            raise AuthenticaError(data.get("message", "balance failed"), status=resp.status_code)
        return data
