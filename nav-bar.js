document.addEventListener('DOMContentLoaded', function() {
    // console.log('nav-bar.js loaded1')

    const overlay = document.getElementById('overlay');
    const navMobileMenu = document.getElementById('nav-menu-mobile');
    const hamburgerIcon = document.querySelector('#hamburger-icon');
    overlay.style.display = 'none';
    let menuState = 'closed'

    function toggleNavMenu() {

        if (menuState === 'closed') {
            // console.log('menu clicked - opening')
            overlay.style.display = 'block';
            navMobileMenu.classList.remove('hidden');
            const webflowNavOverlay = document.querySelector('.w-nav-overlay');
            webflowNavOverlay.style.width = '0px'
            hamburgerIcon.classList.add('open');
            menuState = 'open'
            
            setTimeout(() => {
                overlay.classList.remove('hidden');
            }, 50);

        } else if (menuState === 'open') {
            // console.log('menu clicked - closing')
            navMobileMenu.classList.add('hidden');
            overlay.classList.add('hidden');
            menuState = 'closed'
            hamburgerIcon.classList.remove('open');
            // overlay.style.display = 'none';
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 250);
        }
    }

    hamburgerIcon.addEventListener('click', () => toggleNavMenu())
})

