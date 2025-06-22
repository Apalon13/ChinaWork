# 🐉 Dragon Biztrip

> **Professional visa processing and business travel organization**

[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://dragonbiztrip.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/Languages-RU%20%7C%20EN%20%7C%20中文-orange.svg)](assets/locales/)

**🌍 Available in other languages:** [Русский](README.md) | [中文](README_ZH.md)

Modern website for Dragon Biztrip company, specializing in visa processing and business travel organization to Russia, India, Vietnam, Romania, and China.

## ✨ Features

- 🌍 **Multilingual** - support for Russian, English, and Chinese languages
- 📱 **Responsive Design** - looks great on all devices
- 🚀 **Modern Architecture** - modular JavaScript structure
- ⚡ **Fast Loading** - optimized code and resources
- 🎨 **Beautiful Interface** - modern and professional design

## 🗂️ Project Structure

```
ChinaVisa/
├── 📁 assets/                 # Static resources
│   ├── 📁 css/               # Styles
│   │   └── 📄 styles.css     # Main styles
│   ├── 📁 js/                # JavaScript modules
│   │   ├── 📄 buttonLanguage.js    # Language switcher
│   │   ├── 📄 buttonMenu.js        # Mobile menu
│   │   └── 📄 developerInfo.js     # Developer block
│   ├── 📁 images/            # Images
│   │   ├── 📄 main-banner.jpg
│   │   ├── 📄 side-image.jpg
│   │   ├── 📄 china.jpg
│   │   ├── 📄 india.jpg
│   │   ├── 📄 vietnam.jpg
│   │   └── 📄 romania.jpg
│   └── 📁 locales/           # Localization files
│       ├── 📄 ru.json        # Russian
│       ├── 📄 en.json        # English
│       └── 📄 zh.json        # Chinese
├── 📁 docs/                  # Documentation
│   ├── 📄 SCRIPTS_README.md  # Scripts documentation (RU)
│   ├── 📄 SCRIPTS_README_EN.md # Scripts documentation (EN)
│   └── 📄 SCRIPTS_README_ZH.md # Scripts documentation (ZH)
├── 📁 pages/                 # HTML pages
│   ├── 📄 about.html         # About company
│   ├── 📄 business-tours.html # Business tours
│   ├── 📄 contacts.html      # Contacts
│   ├── 📄 links.html         # Useful links
│   ├── 📄 partners.html      # Partners
│   ├── 📄 services.html      # Services
│   └── 📄 visas.html         # Visas
├── 📄 index.html             # Main page
├── 📄 main.js                # Main JavaScript file
├── 📄 README.md              # Documentation (Russian)
├── 📄 README_EN.md           # Documentation (English)
├── 📄 README_ZH.md           # Documentation (Chinese)
├── 📄 LICENSE                # MIT License
└── 📄 .gitignore             # Git exclusions
```

## 🚀 Quick Start

### Requirements
- Modern web browser with ES6 modules support
- Local web server (for proper module operation)

## 📱 Website Pages

| Page | Description | Path |
|------|-------------|------|
| 🏠 **Home** | Company information and services | `/index.html` |
| 🛂 **Visas** | Visa processing services | `/pages/visas.html` |
| 🏢 **Business Tours** | Business trip organization | `/pages/business-tours.html` |
| 🛠️ **Services** | Complete list of services | `/pages/services.html` |
| ℹ️ **About** | Information about Dragon Biztrip | `/pages/about.html` |
| 📞 **Contacts** | Contact methods | `/pages/contacts.html` |
| 🔗 **Useful Links** | Additional resources | `/pages/links.html` |
| 🤝 **Partners** | Our partners and developer | `/pages/partners.html` |

## 🛠️ Technologies

### Frontend
- **HTML5** - semantic markup
- **CSS3** - modern styles and animations
- **JavaScript ES6+** - modular architecture
- **Font Awesome** - icons

### Architecture
- **Modular Structure** - separation of functionality into components
- **ES6 Modules** - modern approach to code organization
- **Responsive Design** - support for all devices
- **Multilingual** - localization system

## 🌍 Supported Languages

- 🇷🇺 **Russian** (RU) - primary language
- 🇺🇸 **English** (EN) - international
- 🇨🇳 **Chinese** (中文) - for Chinese clients

## 🎨 Design

### Color Scheme
- **Primary Color**: #2c3e50 (dark blue)
- **Accent Color**: #e74c3c (red)
- **Background**: #ecf0f1 (light gray)
- **Text**: #2c3e50 (dark blue)

### Typography
- **Headings**: Montserrat, sans-serif
- **Body Text**: Open Sans, sans-serif
- **Code**: 'Courier New', monospace

## 📦 JavaScript Modules

### Main Modules
- **`main.js`** - main initialization file
- **`assets/js/buttonLanguage.js`** - language switcher
- **`assets/js/buttonMenu.js`** - mobile menu
- **`assets/js/developerInfo.js`** - developer block

### Module Architecture
```javascript
// Import modules
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
import { initMobileMenu } from './assets/js/buttonMenu.js';
import { initDeveloperInfo } from './assets/js/developerInfo.js';

// Initialization
function initApp() {
    initLanguageSwitcher();
    initMobileMenu();
    initDeveloperInfo();
}
```

## 🔧 Development

### Adding a New Module

1. Create a file in the `assets/js/` folder
2. Export an initialization function:
   ```javascript
   export function initNewModule() {
       // Your code
   }
   ```
3. Import in `main.js`
4. Add initialization to `initApp()`

### Adding a New Language

1. Create a localization file in `assets/locales/`
2. Add a language button to HTML
3. Update switching logic in `buttonLanguage.js`

### Documentation

Detailed documentation on modular architecture is available in:
- [docs/SCRIPTS_README.md](docs/SCRIPTS_README.md) (Russian)
- [docs/SCRIPTS_README_EN.md](docs/SCRIPTS_README_EN.md) (English)
- [docs/SCRIPTS_README_ZH.md](docs/SCRIPTS_README_ZH.md) (Chinese)

## 📄 License

This project is distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## 👨‍💻 Developer

**Britanov Konstantin** - Full-Stack Developer

- 🌐 [GitHub](https://github.com/Apalon13)
- 💬 [Telegram](https://t.me/Me4chiKun)
- 📧 [Email](mailto:britanov.2005@mail.ru)

## 🤝 Contributing

We welcome contributions to the project! Please:

1. Fork the repository
2. Create a branch for a new feature
3. Make changes
4. Create a Pull Request

## 📞 Contacts

**Dragon Biztrip**
- 📞 Phone: +7 (912) 217-50-50
- 📧 Email: N8293372@gmail.com
- 📍 Address: Jinan City, Yaojia Street, Business District Management Committee, No. 5050
- 🕒 Working Hours: Mon-Fri 9:00 - 18:00

---

<div align="center">
  <p>Made with ❤️ for Dragon Biztrip</p>
  <p><small>© 2024 Dragon Biztrip. All rights reserved.</small></p>
</div> 