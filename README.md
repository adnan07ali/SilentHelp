# 🗣️ SpeakForMe (formerly MuteSpeak)

**SpeakForMe** is an accessibility-focused **Progressive Web App (PWA)** designed to help people with speech difficulties communicate clearly and confidently in everyday situations.

The app combines **tap-to-speak messages**, **clear visual feedback**, and **offline support** to ensure communication is effective even in stressful or low-connectivity environments like hospitals, public transport, or emergencies.

---

## 📌 Live Demo

🔗 **Live App:** https://YOUR-NETLIFY-LINK.netlify.app  
📱 **Installable as a mobile app (PWA)**

---

## 🧠 Problem Statement

People with speech impairments often face challenges such as:
- Difficulty being understood in public places
- Dependence on others to explain their needs
- Lack of offline tools during emergencies
- Apps that are overly complex or visually overwhelming

Most existing solutions focus only on audio output and ignore **visual clarity**, which is crucial for listeners.

---

## 💡 Solution

**SpeakForMe** provides:
- Clear, categorized messages for daily situations
- Large visual confirmation of the selected message
- Calm, non-flashy animations
- Offline-first design
- Simple, distraction-free UI

The goal is **clarity, dignity, and ease of use**.

---

## ✨ Features

### 🗂️ Predefined Communication Modes
Messages are organized into real-world categories:
- 💬 General
- 🏥 Hospital
- 🛒 Shop
- 🚌 Travel
- 🏠 Home
- 👮 Authority
- 🚨 Emergency

Each mode has a **visible active state** so users always know where they are.

---

### 🔊 Tap-to-Speak
- Tap any message to hear it spoken aloud
- Uses the **Web Speech API**
- Clear pronunciation for listeners

---

### 👁️ Visual Message Focus (Accessibility)
When a message is selected:
- It pops up clearly in the center of the screen
- Shows the exact message chosen
- Automatically fades out smoothly

This ensures **other people can immediately see what was communicated**, not just hear it.

---

### ✍️ Custom Messages
Users can:
- Add their own messages
- Edit existing custom messages
- Delete messages they no longer need

Custom messages are:
- Stored locally using `localStorage`
- Available offline
- Ideal for personal or medical phrases

---

### 🌐 Language Support
- English 🇬🇧
- Hindi 🇮🇳
- Clear visual indicator for selected language
- Designed to be easily extendable to more languages

---

### 🎨 UI & UX Design Principles
- Smooth, calm animations (no flashing or aggressive motion)
- Active state indicators for modes and language
- Glassmorphism and soft background gradients
- Designed with **assistive technology best practices**

---

### 📱 Progressive Web App (PWA)
- Installable on Android & iOS
- Works offline
- Fast loading via service worker caching
- Full-screen app experience
- No Play Store required

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
  - Animations
  - Glassmorphism
  - Gradients
- **Vanilla JavaScript**
- **Web Speech API**
- **Service Workers**
- **Web App Manifest**

> No frameworks, no backend — fully client-side.

---

## 📁 Project Structure

```
SpeakForMe/
├── index.html          # Main application layout
├── style.css           # Styling, animations, and UI design
├── app.js              # Application logic and interactions
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline support and caching
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
└── README.md           # Project documentation
```


## 🚀 Deployment

The app is deployed using **Netlify** and served over HTTPS.

### To deploy:
1. Upload the project folder to Netlify
2. Netlify automatically enables HTTPS
3. PWA install prompt becomes available on mobile

---

## 📴 Offline Usage

Once installed:
- App works without internet
- Messages and custom data remain accessible
- Ideal for hospitals and emergency scenarios

---

## 🧪 Key Technical & UX Challenges Solved

- Prevented animation state conflicts caused by inline styles
- Ensured hover and interaction animations remain responsive
- Balanced animation smoothness with accessibility
- Provided clear visual confirmation for every user action
- Designed a real-world assistive experience, not just a demo

---

## 🔮 Future Improvements (Optional)

- Additional language support
- Caregiver-specific presets
- Export / import custom messages
- Improved screen-reader compatibility

---

## 🙌 Author

**Adnan Ali**

This project demonstrates:
- Accessibility-first thinking
- Strong UI/UX problem-solving
- Clean frontend architecture
- Real-world product mindset

---

## 📜 License

This project is open for educational and demonstration purposes.

---

### ⭐ If you find this project meaningful, consider starring the repo
