/**
 * Главный файл скрипта для Dragon Biztrip
 * Импортирует и инициализирует все модули
 */

// Импорт модулей
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
import { initMobileMenu, initContactFormToWhatsApp } from './assets/js/buttonMenu.js';
import { initDeveloperInfo } from './assets/js/developerInfo.js';

function initApp() {
    console.log('🚀 Инициализация Dragon Biztrip...');
    
    // Инициализация переключателя языков
    try {
        initLanguageSwitcher();
    } catch (error) {
        console.error('❌ Ошибка инициализации переключателя языков:', error);
    }
    
    // Инициализация мобильного меню
    try {
        initMobileMenu();
    } catch (error) {
        console.error('❌ Ошибка инициализации мобильного меню:', error);
    }
    
    // Инициализация блока разработчика
    try {
        initDeveloperInfo();
    } catch (error) {
        console.error('❌ Ошибка инициализации блока разработчика:', error);
    }
}

// Запуск инициализации после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Экспорт для использования в других модулях
export { initApp }; 