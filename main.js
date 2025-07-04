/**
 * Главный файл скрипта для Dragon Biztrip
 * Импортирует и инициализирует все модули
 */

// Импорт модулей
import { initLanguageSwitcher } from './assets/js/buttonLanguage.js';
import { initMobileMenu, initContactFormToWhatsApp } from './assets/js/buttonMenu.js';
import { initDeveloperInfo } from './assets/js/developerInfo.js';

// Запуск инициализации после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
}

// Экспорт для использования в других модулях
export { initApp }; 