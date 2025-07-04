# 🐉 Dragon Biztrip

> **Профессиональное оформление виз и организация деловых поездок**

[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://dragonbiztrip.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Languages](https://img.shields.io/badge/Languages-RU%20%7C%20EN%20%7C%20中文-orange.svg)](assets/locales/)

**🌍 Доступно на других языках:** [English](README_EN.md) | [中文](README_ZH.md)

Современный веб-сайт для компании Dragon Biztrip, специализирующейся на оформлении виз и организации деловых поездок в Россию, Индию, Вьетнам, Румынию и Китай.

## ✨ Особенности

- 🌍 **Многоязычность** - поддержка русского, английского и китайского языков
- 📱 **Адаптивный дизайн** - отлично выглядит на всех устройствах
- 🚀 **Современная архитектура** - модульная структура JavaScript
- ⚡ **Быстрая загрузка** - оптимизированный код и ресурсы
- 🎨 **Красивый интерфейс** - современный и профессиональный дизайн

## 🗂️ Структура проекта

```
ChinaVisa/
├── 📁 assets/                 # Статические ресурсы
│   ├── 📁 css/               # Стили
│   │   └── 📄 styles.css     # Основные стили
│   ├── 📁 js/                # JavaScript модули
│   │   ├── 📄 buttonLanguage.js    # Переключение языков
│   │   ├── 📄 buttonMenu.js        # Мобильное меню
│   │   └── 📄 developerInfo.js     # Блок разработчика
│   ├── 📁 images/            # Изображения
│   │   ├── 📄 main-banner.jpg
│   │   ├── 📄 side-image.jpg
│   │   ├── 📄 china.jpg
│   │   ├── 📄 india.jpg
│   │   ├── 📄 vietnam.jpg
│   │   └── 📄 romania.jpg
│   └── 📁 locales/           # Файлы локализации
│       ├── 📄 ru.json        # Русский
│       ├── 📄 en.json        # Английский
│       └── 📄 zh.json        # Китайский
├── 📁 docs/                  # Документация
│   ├── 📄 SCRIPTS_README.md  # Документация по скриптам (RU)
│   ├── 📄 SCRIPTS_README_EN.md # Документация по скриптам (EN)
│   └── 📄 SCRIPTS_README_ZH.md # Документация по скриптам (ZH)
├── 📁 pages/                 # HTML страницы
│   ├── 📄 about.html         # О компании
│   ├── 📄 business-tours.html # Деловые туры
│   ├── 📄 contacts.html      # Контакты
│   ├── 📄 links.html         # Полезные ссылки
│   ├── 📄 partners.html      # Партнеры
│   ├── 📄 services.html      # Услуги
│   └── 📄 visas.html         # Визы
├── 📄 index.html             # Главная страница
├── 📄 main.js                # Главный JavaScript файл
├── 📄 README.md              # Документация (Русский)
├── 📄 README_EN.md           # Документация (English)
├── 📄 README_ZH.md           # Документация (中文)
├── 📄 LICENSE                # Лицензия MIT
└── 📄 .gitignore             # Исключения Git
```

## 🚀 Быстрый старт

### Требования
- Современный веб-браузер с поддержкой ES6 модулей
- Локальный веб-сервер (для корректной работы модулей)

## 📱 Страницы сайта

| Страница | Описание | Путь |
|----------|----------|------|
| 🏠 **Главная** | Информация о компании и услугах | `/index.html` |
| 🛂 **Визы** | Услуги по оформлению виз | `/pages/visas.html` |
| 🏢 **Деловые туры** | Организация бизнес-поездок | `/pages/business-tours.html` |
| 🛠️ **Услуги** | Полный список услуг | `/pages/services.html` |
| ℹ️ **О компании** | Информация о Dragon Biztrip | `/pages/about.html` |
| 📞 **Контакты** | Способы связи | `/pages/contacts.html` |
| 🔗 **Полезные ссылки** | Дополнительные ресурсы | `/pages/links.html` |
| 🤝 **Партнеры** | Наши партнеры и разработчик | `/pages/partners.html` |

## 🛠️ Технологии

### Frontend
- **HTML5** - семантическая разметка
- **CSS3** - современные стили и анимации
- **JavaScript ES6+** - модульная архитектура
- **Font Awesome** - иконки

### Архитектура
- **Модульная структура** - разделение функционала на компоненты
- **ES6 модули** - современный подход к организации кода
- **Адаптивный дизайн** - поддержка всех устройств
- **Многоязычность** - система локализации

## 🌍 Поддерживаемые языки

- 🇷🇺 **Русский** (RU) - основной язык
- 🇺🇸 **Английский** (EN) - международный
- 🇨🇳 **Китайский** (中文) - для китайских клиентов

## 🎨 Дизайн

### Цветовая схема
- **Основной цвет**: #2c3e50 (темно-синий)
- **Акцентный цвет**: #e74c3c (красный)
- **Фон**: #ecf0f1 (светло-серый)
- **Текст**: #2c3e50 (темно-синий)

### Типографика
- **Заголовки**: Montserrat, sans-serif
- **Основной текст**: Open Sans, sans-serif
- **Код**: 'Courier New', monospace

## 📦 Модули JavaScript

### Основные модули
- **`main.js`** - главный файл инициализации
- **`assets/js/buttonLanguage.js`** - переключение языков
- **`assets/js/buttonMenu.js`** - мобильное меню
- **`assets/js/developerInfo.js`** - блок разработчика

### Архитектура модулей
```javascript
// Импорт модулей
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
import { initMobileMenu } from './assets/js/buttonMenu.js';
import { initDeveloperInfo } from './assets/js/developerInfo.js';

// Инициализация
function initApp() {
    initLanguageSwitcher();
    initMobileMenu();
    initDeveloperInfo();
}
```

## 🔧 Разработка

### Добавление нового модуля

1. Создайте файл в папке `assets/js/`
2. Экспортируйте функцию инициализации:
   ```javascript
   export function initNewModule() {
       // Ваш код
   }
   ```
3. Импортируйте в `main.js`
4. Добавьте инициализацию в `initApp()`

### Добавление нового языка

1. Создайте файл локализации в `assets/locales/`
2. Добавьте кнопку языка в HTML
3. Обновите логику переключения в `buttonLanguage.js`

### Документация  

Подробная документация по модульной архитектуре находится в:
- [docs/SCRIPTS_README.md](docs/SCRIPTS_README.md) (Русский)
- [docs/SCRIPTS_README_EN.md](docs/SCRIPTS_README_EN.md) (English)
- [docs/SCRIPTS_README_ZH.md](docs/SCRIPTS_README_ZH.md) (中文)

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл [LICENSE](LICENSE) для получения дополнительной информации.

## 👨‍💻 Разработчик

**Британов Константин** - Full-Stack Developer

- 🌐 [GitHub](https://github.com/Apalon13)
- 💬 [Telegram](https://t.me/Me4chiKun)
- 📧 [Email](mailto:britanov.2005@mail.ru)

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Пожалуйста:

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Создайте Pull Request

## 📞 Контакты

**Dragon Biztrip**
- 📞 Телефон: +7 (912) 217-50-50
- 📧 Email: N8293372@gmail.com
- 📍 Адрес: Jinan City, Yaojia Street, Business District Management Committee, No. 5050
- 🕒 Режим работы: Пн-Пт 9:00 - 18:00

---

<div align="center">
  <p>Сделано с ❤️ для Dragon Biztrip</p>
  <p><small>© 2024 Dragon Biztrip. Все права защищены.</small></p>
</div> 