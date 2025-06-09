document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', function() {
        languageDropdown.style.display = 'none';
    });

    burgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});