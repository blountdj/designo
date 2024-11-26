// console.log('contactAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v10/config.js";

function importModule(modulePath) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = modulePath;
        script.onload = () => {
            // Assuming the module exports are globally available
            resolve(window);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    scaleTo1,
    xPercentOpacityReturnStaggered,
    yPercentOpacityReturnStaggered,
    transitionAnimationReset,
} = await importModule(`${CONFIG.path}commonAnimations.js`)

// const {
//     navBarLinksFadeIn,
//     xPercentOpacityReturn,
//     yPercentOpacityReturn,
//     scaleTo1,
//     xPercentOpacityReturnStaggered,
//     yPercentOpacityReturnStaggered,
//     transitionAnimationReset,
// } = await import(`${CONFIG.path}commonAnimations.js`)


export const contactIntroInit = () => {
    // console.log('contactIntroInit')

    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = document.querySelector('.contact_section_hero')
    const heroH1 = document.querySelector('.contact-h1')
    const heroParagraph = document.querySelector('.contact-text')
    const heroBgCircle = document.querySelector('.contact-hero-circle')
    const heroFormInputs = document.querySelectorAll('#contact-form > .input-wrapper')
    const heroFormBtn = document.querySelector('#contact-form > .btn-wrapper')

    /* Locations */
    const designElems = document.querySelectorAll('.about-attributes-card')

    gsap.set([heroSection], { scale: 3.5 })

    gsap.set([heroH1, heroParagraph, heroBgCircle, navBarLinks, navBarLogo,
        heroFormInputs, heroFormBtn, designElems
    ], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([heroBgCircle], {
        xPercent: 150,
    })

    gsap.set([heroH1], {
        yPercent: 100,
        xPercent: -45
    })

    gsap.set([heroParagraph], {
        yPercent: 100,
        xPercent: -15
    })

    gsap.set([heroFormInputs, heroFormBtn], {
        yPercent: 100,
        xPercent: 15
    })

    gsap.set([designElems], {
        yPercent: 75,
    })
}

export const contactIntroAnimation = () => {
    // console.log('contactIntroAnimation')
    gsap.timeline()

        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.contact_section_hero'), 0)
        .add(() => navBarLinksFadeIn(), 0.6)

        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.1)
        .add(() => yPercentOpacityReturn('.contact-h1'), 1.1)
        .add(() => xPercentOpacityReturn('.contact-h1'), 1.1)

        .add(() => yPercentOpacityReturn('.contact-text'), 1.3)
        .add(() => xPercentOpacityReturn('.contact-text'), 1.3)

        .add(() => xPercentOpacityReturn('.contact-hero-circle'), 2)

        .add(() => yPercentOpacityReturnStaggered(['#contact-form > .input-wrapper', '#contact-form > .btn-wrapper']), 1.5)
        .add(() => xPercentOpacityReturnStaggered(['#contact-form > .input-wrapper', '#contact-form > .btn-wrapper']), 1.5)

        .add(() => yPercentOpacityReturnStaggered('.about-attributes-card'), 2.2)
}
