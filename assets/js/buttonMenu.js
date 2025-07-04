/**
 * Модуль мобильного меню
 */

// Основная функция инициализации мобильного меню
export function initMobileMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!burgerMenu || !mobileMenu) {
        console.warn('Мобильное меню не найдено на странице');
        return;
    }
    
    // Обработчик клика по бургер-меню
    burgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на ссылки
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Функция для инициализации отправки формы в WhatsApp
export function initContactFormToWhatsApp() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        let text = `Здравствуйте!%0AМеня зовут: ${name}%0AEmail: ${email}%0AТелефон: ${phone}%0AСообщение: ${message}`;
        // WhatsApp номер из контактов
        const waNumber = '916238458249';
        const waUrl = `https://wa.me/${waNumber}?text=${text}`;
        window.open(waUrl, '_blank');
    });
}