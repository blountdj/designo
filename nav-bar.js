document.addEventListener('DOMContentLoaded', function() {
    // console.log('nav-bar.js loaded1')

    const overlay = document.getElementById('overlay');
    const navMobileMenu = document.getElementById('nav-menu-mobile');
    const hamburgerIcon = document.querySelector('#hamburger-icon');

    let menuState = 'closed'

    function toggleNavMenu() {

        if (menuState === 'closed') {
            // console.log('menu clicked - opening')
            navMobileMenu.classList.remove('hidden');
            overlay.classList.remove('hidden');
            menuState = 'open'
            const webflowNavOverlay = document.querySelector('.w-nav-overlay');
            webflowNavOverlay.style.width = '0px'
            hamburgerIcon.classList.add('open');
        } else if (menuState === 'open') {
            // console.log('menu clicked - closing')
            navMobileMenu.classList.add('hidden');
            overlay.classList.add('hidden');
            menuState = 'closed'
            hamburgerIcon.classList.remove('open');
        }
    }

    hamburgerIcon.addEventListener('click', () => toggleNavMenu())
})

