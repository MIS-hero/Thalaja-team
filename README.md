<div align="center">
  <img src="Documentation/assets/banner.svg" alt="Thalaja" width="100%"/>
  <br/><br/>

  ![Platform](https://img.shields.io/badge/iOS_%26_Android-Flutter-FF4924?style=flat-square&logo=flutter&logoColor=white&labelColor=0D0050)
  ![Sprint](https://img.shields.io/badge/Sprint_4-Active-FF4924?style=flat-square&labelColor=0D0050)
  ![MVP](https://img.shields.io/badge/MVP-Jul_25_2026-FF4924?style=flat-square&labelColor=0D0050)
  ![License](https://img.shields.io/badge/License-MIT-FF4924?style=flat-square&labelColor=0D0050)
</div>

---

In most Saudi households, one person shops for the entire family — often monthly. But there's no shared space for everyone to say what they need before the buyer leaves. Thalaja fixes that: every member adds their requests to one shared list, and the buyer walks into the store with everything accounted for.

---

## Features

- 🛒 &nbsp;Shared group lists with item-level detail — brand, quantity, unit, notes, and image
- ⚡ &nbsp;Real-time sync — every addition or edit appears instantly for all members currently viewing the list
- 🔔 &nbsp;Buyer alert — one tap notifies the whole household you're heading to the store
- 🛍️ &nbsp;Buying view — checklist locked from edits, items organized by grocery aisle
- 📋 &nbsp;Full history — action log of every change and a record of past completed trips
- 🍳 &nbsp;Group recipes — save recipes and add all ingredients to the active list in one tap

---

## Built With

**Mobile**

![Flutter](https://img.shields.io/badge/Flutter-BLoC_%2B_Clean_Arch-FF4924?style=for-the-badge&logo=flutter&logoColor=white&labelColor=0D0050)
![Dart](https://img.shields.io/badge/Dart-3.x-FF4924?style=for-the-badge&logo=dart&logoColor=white&labelColor=0D0050)

**Backend**

![Python](https://img.shields.io/badge/Python-Flask_REST-FF4924?style=for-the-badge&logo=python&logoColor=white&labelColor=0D0050)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-FF4924?style=for-the-badge&logo=postgresql&logoColor=white&labelColor=0D0050)
![SocketIO](https://img.shields.io/badge/Socket.IO-Realtime_Sync-FF4924?style=for-the-badge&logo=socketdotio&logoColor=white&labelColor=0D0050)
![Firebase](https://img.shields.io/badge/Firebase-Push_Notifications-FF4924?style=for-the-badge&logo=firebase&logoColor=white&labelColor=0D0050)

**Design & Tooling**

![Figma](https://img.shields.io/badge/Figma-UI_Design-FF4924?style=for-the-badge&logo=figma&logoColor=white&labelColor=0D0050)
![GitHub](https://img.shields.io/badge/GitHub-Version_Control-FF4924?style=for-the-badge&logo=github&logoColor=white&labelColor=0D0050)
![Jira](https://img.shields.io/badge/Jira-Sprint_Management-FF4924?style=for-the-badge&logo=jira&logoColor=white&labelColor=0D0050)

---

## Getting Started

<details>
<summary><b>Prerequisites</b></summary>
<br/>

- Flutter SDK 3.x
- Dart 3.x
- Python 3.11+
- PostgreSQL (via Supabase project)
- Firebase project with FCM enabled

</details>

<details>
<summary><b>Installation</b></summary>
<br/>

**1. Clone the repository**
```bash
git clone https://github.com/your-org/thalaja.git
cd thalaja
```

**2. Backend setup**
```bash
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in DATABASE_URL, JWT_SECRET, FCM credentials
flask db upgrade
flask run
```

**3. Mobile setup**
```bash
cd mobile
flutter pub get
cp lib/core/config.example.dart lib/core/config.dart   # fill in API base URL
flutter run
```

</details>

---

## Team

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MIS-hero">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" width="72px" alt="Aljawharah"/>
        <br/><sub><b>Aljawharah Alammar</b></sub>
      </a>
      <br/><sub>Project Manager</sub>
    </td>
    <td align="center">
      <a href="https://github.com/reemmalyamani">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" width="72px" alt="Reem"/>
        <br/><sub><b>Reem Alyamani</b></sub>
      </a>
      <br/><sub>Product Manager</sub>
    </td>
    <td align="center">
      <a href="https://github.com/0-Mousa-0">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" width="72px" alt="Mousa"/>
        <br/><sub><b>Mousa Alrizqi</b></sub>
      </a>
      <br/><sub>Backend Lead</sub>
    </td>
    <td align="center">
      <a href="https://github.com/ahotb">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" width="72px" alt="Abdullah"/>
        <br/><sub><b>Abdullah Almouraibd</b></sub>
      </a>
      <br/><sub>Backend Developer</sub>
    </td>
    <td align="center">
      <a href="https://github.com/Randa-hb10">
        <img src="https://avatars.githubusercontent.com/u/0?v=4" width="72px" alt="Randa"/>
        <br/><sub><b>Randa Baeshen</b></sub>
      </a>
      <br/><sub>Frontend Developer</sub>
    </td>
  </tr>
</table>

---

<div align="center">
  <sub>Built at Holberton / Tuwaiq Academy · Saudi Arabia · 2026</sub>
</div>
