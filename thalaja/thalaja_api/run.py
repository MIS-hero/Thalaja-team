"""Application entrypoint for the Thalaja API.

Run with:  python run.py
or:        flask --app run run --debug

Loads .env BEFORE creating the app so config picks up the secrets.
Note: interpolate=False keeps literal '$' characters in values intact
(the Authentica API key is a bcrypt-style string containing '$').
"""
from dotenv import load_dotenv

# Do not interpolate: preserves '$' in keys like the Authentica API key.
load_dotenv(interpolate=False)

from app import create_app  # noqa: E402  (import after env is loaded)

app = create_app()

if __name__ == "__main__":
    # host=0.0.0.0 so an emulator / physical phone on the LAN can reach it.
    app.run(host="0.0.0.0", port=5000, debug=True)
