// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLang = document.querySelector('.language-btn span');
    
    // Загружаем переводы
    let translations = {};
    
    async function loadTranslations(lang) {
        try {
            // Определяем правильный путь к файлам локализации
            const path = window.location.pathname.includes('/pages/') ? '../locales/' : 'locales/';
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
    
    // Загружаем все переводы при старте
    ['ru', 'en', 'zh'].forEach(lang => loadTranslations(lang));
    
    // Функция для перевода текста
    function translateText(element, key) {
        if (!key) return element.textContent;
        
        const keys = key.split('.');
        let value = translations[currentLang.textContent.toLowerCase()];
        
        if (!value) {
            console.warn(`No translations found for ${currentLang.textContent.toLowerCase()}`);
            return element.textContent;
        }
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return element.textContent;
            }
        }
        
        return value;
    }
    
    // Обновляем все переводимые элементы
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translatedText = translateText(element, key);
            if (translatedText) {
                element.textContent = translatedText;
            }
        });
    }
    
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
            if (currentLang) {
                currentLang.textContent = lang.toUpperCase();
            }
            if (languageDropdown) {
                languageDropdown.classList.remove('show');
            }
            
            // Убедимся, что переводы загружены перед обновлением контента
            if (!translations[lang]) {
                loadTranslations(lang).then(() => {
                    updateContent();
                });
            } else {
                updateContent();
            }
            
            // Сохраняем выбранный язык
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
    
    // Восстанавливаем сохраненный язык
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && currentLang) {
        currentLang.textContent = savedLang.toUpperCase();
        // Убедимся, что переводы загружены перед обновлением контента
        if (!translations[savedLang]) {
            loadTranslations(savedLang).then(() => {
                updateContent();
            });
        } else {
            updateContent();
        }
    }
});