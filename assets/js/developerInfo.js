/**
 * Функционал для блока информации о разработчике
 */

export function toggleDeveloperInfo() {
    const developerInfo = document.getElementById('developerInfo');
    const developerArrow = document.getElementById('developerArrow');
    
    if (developerInfo.style.display === 'block') {
        developerInfo.style.display = 'none';
        developerArrow.style.transform = 'rotate(0deg)';
    } else {
        developerInfo.style.display = 'block';
        developerArrow.style.transform = 'rotate(180deg)';
        // Применяем переводы к новым элементам (если вдруг что-то появилось динамически)
        if (window.updateI18nContent) {
            // Определяем текущий язык
            const lang = localStorage.getItem('selectedLanguage') || 'ru';
            window.updateI18nContent(lang);
        }
    }
}

// Инициализация функционала разработчика
export function initDeveloperInfo() {
    const developerBtn = document.querySelector('[data-action="toggle-developer"]');
    if (developerBtn) {
        developerBtn.addEventListener('click', toggleDeveloperInfo);
    }
} 