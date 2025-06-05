let currentLanguage = 'ru';

document.addEventListener('DOMContentLoaded', function() {
    loadLanguage(currentLanguage);
    
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', function() {
        languageDropdown.style.display = 'none';
    });
    
    document.querySelectorAll('.language-dropdown a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            loadLanguage(lang);
            updateLanguageButton(this.textContent);
        });
    });
    
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
        loadLanguage(savedLang);
    }
});

function updateLanguageButton(langText) {
    document.querySelector('.language-btn').innerHTML = 
        `<i class="fas fa-globe"></i> ${langText} <i class="fas fa-caret-down"></i>`;
}

async function loadLanguage(lang) {
    try {
        document.documentElement.classList.add('changing-language');
        
        const response = await fetch(`locales/${lang}.json`);
        const translations = await response.json();
        
        await applyTranslations(translations);
        updateLanguageButton(getLanguageName(lang));
        
        setTimeout(() => {
            document.documentElement.classList.remove('changing-language');
        }, 300);
        
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

function applyTranslations(translations) {
    print
    document.title = `${translations.companyName} - ${translations.pageTitle}`;
    
    document.querySelector('.logo').textContent = translations.companyName;
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks[0].textContent = translations.nav.home;
    navLinks[1].textContent = translations.nav.visaTypes;
    navLinks[2].textContent = translations.nav.countries;
    navLinks[3].textContent = translations.nav.services;
    navLinks[4].textContent = translations.nav.about;
    navLinks[5].textContent = translations.nav.contacts;
    
    const services = document.querySelectorAll('.service-card h3');
    const servicesDesc = document.querySelectorAll('.service-card p');
    services[0].textContent = translations.services.tourism;
    services[1].textContent = translations.services.business;
    services[2].textContent = translations.services.work;
    servicesDesc[0].textContent = translations.services.tourismDesc;
    servicesDesc[1].textContent = translations.services.businessDesc;
    servicesDesc[2].textContent = translations.services.workDesc;
    
    const footerTitles = document.querySelectorAll('.footer-info h4');
    footerTitles[0].textContent = translations.footer.contacts;
    footerTitles[1].textContent = translations.footer.legal;
    footerTitles[2].textContent = translations.footer.address;
    footerTitles[3].textContent = translations.footer.hours;
    
    document.querySelector('.copyright').innerHTML = 
        `&copy; ${new Date().getFullYear()} ${translations.companyName}. ${translations.footer.copyright}`;
}

function getLanguageName(lang) {
    const names = {
        'en': 'English',
        'zh': '中文 (Chinese)',
        'ru': 'Русский'
    };
    return names[lang] || 'English';
}