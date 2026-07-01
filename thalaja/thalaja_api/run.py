#!/usr/bin/env python3
"""Application entrypoint for the Thalaja API.

Run with:  python run.py
or:        flask --app run run --debug

.env is loaded by app.config on import, so no explicit load here.
"""
from app import create_app

app = create_app()

if __name__ == "__main__":
    # host=0.0.0.0 so an emulator / physical phone on the LAN can reach it.
    app.run(host="0.0.0.0", port=5000, debug=app.config.get("DEBUG", False))
