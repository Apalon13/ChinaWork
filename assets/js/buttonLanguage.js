/**
 * Модуль переключения языков
 */

// Загружаем переводы
let translations = {};

async function loadTranslations(lang) {
    try {
        // Определяем правильный путь к файлам локализации
        const path = window.location.pathname.includes('/pages/') ? '../assets/locales/' : 'assets/locales/';
        const response = await fetch(`${path}${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load ${lang} translations`);
        }
        translations[lang] = await response.json();
        console.log(`Loaded ${lang} translations:`, translations[lang]);
    } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
    }
}

// Функция для перевода текста
function translateText(element, key, lang) {
    if (!key) return element.textContent;
    const keys = key.split('.');
    let value = translations[lang];
    if (!value) return element.textContent;
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return element.textContent;
        }
    }
    return value;
}

// Обновляем все переводимые элементы
function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        let translatedText = translateText(element, key, lang);
        // Для language-btn span всегда используем ключ common.lang_{lang}
        if (element.closest('.language-btn')) {
            translatedText = translations[lang]?.common?.[`lang_${lang}`] || lang.toUpperCase();
        }
        if (element.classList.contains('lang-option')) {
            if (translatedText) element.textContent = translatedText;
        } else if (element.tagName === 'SPAN' || element.tagName === 'LABEL' || element.tagName === 'STRONG' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4' || element.tagName === 'H5' || element.tagName === 'P' || element.tagName === 'A' || element.tagName === 'LI' || element.tagName === 'BUTTON') {
            if (translatedText) element.textContent = translatedText;
        }
        if (element.hasAttribute('data-i18n-alt')) {
            const altKey = element.getAttribute('data-i18n-alt');
            const altText = translateText(element, altKey, lang);
            if (altText) element.setAttribute('alt', altText);
        }
    });
}

// Основная функция инициализации переключателя языков
export function initLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLangSpan = document.querySelector('.language-btn span');

    // Загружаем все переводы при старте
    Promise.all([
        loadTranslations('ru'),
        loadTranslations('en'),
        loadTranslations('zh')
    ]).then(() => {
        // Восстанавливаем сохранённый язык или по умолчанию ru
        let lang = localStorage.getItem('selectedLanguage') || 'ru';
        languageBtn.setAttribute('data-lang', lang);
        currentLangSpan.setAttribute('data-lang', lang);
        currentLangSpan.textContent = translations[lang]?.common?.[`lang_${lang}`] || lang.toUpperCase();
        updateContent(lang);
    });

    // Обработчик клика по кнопке языка
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (languageDropdown) {
                languageDropdown.classList.toggle('show');
            }
        });
    }

    // Обработчик выбора языка
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', async () => {
            const lang = option.getAttribute('data-lang');
            languageBtn.setAttribute('data-lang', lang);
            currentLangSpan.setAttribute('data-lang', lang);
            currentLangSpan.textContent = translations[lang]?.common?.[`lang_${lang}`] || lang.toUpperCase();
            if (languageDropdown) {
                languageDropdown.classList.remove('show');
            }
            if (!translations[lang]) {
                await loadTranslations(lang);
            }
            updateContent(lang);
            localStorage.setItem('selectedLanguage', lang);
        });
    });

    // Закрываем дропдаун при клике вне его
    document.addEventListener('click', (e) => {
        if (languageBtn && languageDropdown && 
            !languageBtn.contains(e.target) && 
            !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
}

// Делаем функцию обновления доступной глобально для ручного вызова
window.updateI18nContent = updateContent;