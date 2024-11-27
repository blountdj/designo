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
            gsap.to(navMobileMenu, {
                opacity: 1,
                yPercent: 0,
                duration: 0.25,
                ease: 'power2.inOut'
            })
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
            gsap.to(navMobileMenu, {
                opacity: 0,
                yPercent: -105,
                duration: 0.25,
                ease: 'power2.inOut'
            })
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

