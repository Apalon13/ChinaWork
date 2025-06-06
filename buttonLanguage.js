document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageLinks = document.querySelectorAll('.language-dropdown a');
    const languageText = document.querySelector('.language-text');

    // Текущий язык (по умолчанию русский)
    let currentLanguage = localStorage.getItem('preferredLanguage') || 'ru';

    // Инициализация языка
    updateLanguage(currentLanguage);

    // Обработчик клика по кнопке
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('show');
    });

    // Обработчики выбора языка
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            if (currentLanguage !== selectedLang) {
                currentLanguage = selectedLang;
                localStorage.setItem('preferredLanguage', selectedLang);
                updateLanguage(selectedLang);
            }
            languageDropdown.classList.remove('show');
        });
    });

    // Функция обновления языка
    function updateLanguage(lang) {
        // Обновляем текст кнопки
        const languageNames = {
            'en': 'English',
            'zh': '中文',
            'ru': 'Русский'
        };
        languageText.textContent = languageNames[lang] || 'English';

        // Загружаем переводы
        loadTranslations(lang);
    }

    // Загрузка переводов
    async function loadTranslations(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) throw new Error('Language file not found');
            
            const translations = await response.json();
            applyTranslations(translations);
        } catch (error) {
            console.error('Error loading language:', error);
            if (lang !== 'ru') {
                currentLanguage = 'ru';
                localStorage.setItem('preferredLanguage', 'ru');
                updateLanguage('ru');
            }
        }
    }

    // Применение переводов
    function applyTranslations(translations) {
        // Title и логотип
        document.title = `${translations.companyName} - ${translations.pageTitle}`;
        document.querySelector('.logo').textContent = translations.companyName;
        
        // Навигация
        const navLinks = document.querySelectorAll('nav a');
        navLinks[0].textContent = translations.nav.home;
        navLinks[1].textContent = translations.nav.visas;
        navLinks[2].textContent = translations.nav.services;
        navLinks[3].textContent = translations.nav.about;
        navLinks[4].textContent = translations.nav.contacts;
        navLinks[5].textContent = translations.nav.links;
        navLinks[6].textContent = translations.nav.partners;
        
        // Основной контент
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles[0].textContent = translations.content.welcomeTitle;
        sectionTitles[1].textContent = translations.content.whyChooseUs;
        sectionTitles[2].textContent = translations.content.ourServices;
        
        // Текст приветствия
        document.querySelector('.content-row:first-child .service-card p').textContent = translations.content.welcomeText;
        
        // Преимущества
        const benefitsItems = document.querySelectorAll('.benefits-list li');
        translations.content.benefits.forEach((item, index) => {
            if (benefitsItems[index]) benefitsItems[index].innerHTML = item;
        });
        
        // Услуги
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[1].querySelector('h3').textContent = translations.content.visaProcessing.title;
        serviceCards[1].querySelector('p').textContent = translations.content.visaProcessing.description;
        serviceCards[2].querySelector('h3').textContent = translations.content.businessTrips.title;
        serviceCards[2].querySelector('p').textContent = translations.content.businessTrips.description;
        serviceCards[3].querySelector('h3').textContent = translations.content.businessConsultations.title;
        serviceCards[3].querySelector('p').textContent = translations.content.businessConsultations.description;
        
        // Призыв к действию
        const highlightText = document.querySelector('.highlight-text');
        highlightText.querySelector('h3').textContent = translations.content.cta.title;
        highlightText.querySelector('p').textContent = translations.content.cta.text;
        
        // Футер
        const footerTitles = document.querySelectorAll('.footer-info h4');
        footerTitles[0].textContent = translations.footer.contactInfo;
        footerTitles[1].textContent = translations.footer.legalDetails;
        footerTitles[2].textContent = translations.footer.address;
        footerTitles[3].textContent = translations.footer.workingHours;
        
        const footerTexts = document.querySelectorAll('.footer-info p');
        footerTexts[3].textContent = translations.footer.weekdays;
        footerTexts[4].textContent = translations.footer.weekend;
        
        document.querySelector('.copyright').innerHTML = 
            `&copy; ${new Date().getFullYear()} ${translations.companyName}. ${translations.footer.copyright}`;
    }
});