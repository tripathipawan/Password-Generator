# 🔐 Password Generator

A browser-based random password generator that lets users create strong, secure passwords with full control over length and character types — built with vanilla HTML, CSS, and JavaScript.

---

## 📌 Overview

This web application generates random passwords instantly based on user-defined settings. Users can set the desired password length using a range slider and choose which character types to include — uppercase letters, lowercase letters, numbers, and symbols — using checkboxes. The generated password appears in a read-only display field with a one-click copy button. The entire app runs in the browser with no backend or dependencies.

---

## ✨ Features

- **Adjustable Password Length** — A range slider (`min: 4`, `max: 18`) lets users select their desired password length. The currently selected length value is displayed live next to the slider as it moves.
- **Include Uppercase Letters (A–Z)** — A checkbox to toggle uppercase letters into the character pool. Checked by default.
- **Include Lowercase Letters (a–z)** — A checkbox to toggle lowercase letters into the character pool. Checked by default.
- **Include Numbers (0–9)** — A checkbox to toggle numeric digits into the character pool. Checked by default.
- **Include Symbols (@!*^)** — A checkbox to toggle special symbols into the character pool. Checked by default.
- **Generate Password Button** — Clicking the ⚡ **GENERATE PASSWORD** button triggers the JavaScript logic to randomly pick characters from the selected pools and build a password of the chosen length.
- **Read-Only Password Display** — The generated password appears in a `readonly` text input field (`#Passwordbox`), preventing accidental edits while keeping it selectable.
- **Copy to Clipboard** — A Font Awesome copy icon (`fa-solid fa-copy`) sits next to the password field. Clicking it copies the generated password to the clipboard instantly.
- **Font Awesome Icons (v6.6.0)** — Used for the copy icon and the lightning bolt icon on the generate button, loaded via CDN.
- **Responsive Design** — CSS media queries ensure the layout adapts correctly across desktop, tablet, and mobile screen sizes.
- **No Dependencies** — Pure HTML, CSS, and JavaScript. Open `Index.html` in any browser and it works immediately.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | App structure — password display, range slider, 4 checkboxes, generate button |
| CSS3 | Styling — layout, input field, slider, button, responsive breakpoints |
| JavaScript (ES6+) | Random character generation, checkbox logic, length control, clipboard copy |
| Font Awesome v6.6.0 | Copy icon and bolt icon on generate button (loaded via CDN) |

---

## 📁 Project Structure

```
Password-Generator/
├── Index.html    # Main HTML — password field, copy icon, length slider, checkboxes, generate button
├── Style.css     # All styling — layout, controls, responsive media queries
├── Script.js     # Core logic — random generation, character pool building, clipboard copy
└── README.md     # Project documentation
```

---

## 🚀 Getting Started

No setup needed. Just 3 steps:

**1. Clone the repository**
```bash
git clone https://github.com/tripathipawan/Password-Generator.git
```

**2. Navigate into the project folder**
```bash
cd Password-Generator
```

**3. Open in browser**
```
Open Index.html directly in any modern browser
— or use VS Code Live Server for a better dev experience
```

---

## 🧭 How to Use

1. Open the app in your browser.
2. Drag the **length slider** to set how many characters the password should have (4 to 18).
3. Check or uncheck the **character type checkboxes** to control what goes into the password.
4. Click the **⚡ GENERATE PASSWORD** button.
5. The generated password appears in the display field.
6. Click the **copy icon** to copy it to your clipboard.

---

## 🧠 Generation Logic

| Step | What Happens |
|---|---|
| 1 | On button click, JavaScript reads the current slider value for length |
| 2 | It checks which of the 4 checkboxes are ticked |
| 3 | Character pools (uppercase / lowercase / numbers / symbols) are combined based on checked options |
| 4 | A loop runs for the selected length, picking a random character from the combined pool on each iteration |
| 5 | The final string is injected into `#Passwordbox` |
| 6 | On copy icon click, the value of `#Passwordbox` is written to the clipboard |

---

## 🌱 What I Learned

- Building a dynamic character pool by conditionally merging string sets based on checkbox states
- Using a range input to control and display a real-time numeric value in the UI
- Setting an input field as `readonly` to display generated output without allowing manual edits
- Implementing clipboard copy functionality using the JavaScript Clipboard API
- Integrating Font Awesome icons via CDN for a polished UI without any build step

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Pawan Tripathi**
- GitHub: [@tripathipawan](https://github.com/tripathipawan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
