// console.log('aboutAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v35/dist/js/config.min.js";

const {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    unMaskToLeft,
    unMaskToRight,
    scaleTo1,
    transitionAnimationReset,
    fadeIn
} = await import(`${CONFIG.path}${CONFIG.jsFolder}commonAnimations${CONFIG.jsPostFix}.js`)


export const aboutIntroInit = (container) => {
    // console.log('aboutIntroInit')

    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-menu__link')
    const navBarLogo = document.querySelector('.navbar__link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = container.querySelector('.about__section_hero')
    // const heroSectionMask = container.querySelector('.about-hero-mask1')
    const heroH1 = container.querySelector('.about__heading')
    const heroParagraph = container.querySelector('.about__hero-text')
    const heroBgCircle = container.querySelector('.about__hero-bg-circle')

    /* World Class Section */
    const wcSectionWrapper = container.querySelector('.about-worldclass_section_hero')
    const wcH2 = container.querySelector('.about-worldclass__heading')
    const wcText = container.querySelector('.about-worldclass-text')
    const wcBgWrapper = container.querySelector('.about_worldclass_bg_wrapper')

    gsap.set(heroSection, { scale: 3.5 })

    gsap.set([heroH1, heroParagraph, heroBgCircle, navBarLinks, navBarLogo,
        wcH2, wcText, wcBgWrapper, wcSectionWrapper
    ], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([heroBgCircle], {
        xPercent: 150,
    })

    gsap.set([heroH1, heroParagraph], {
        xPercent: -100,
    })

    gsap.set([wcBgWrapper], {
        yPercent: -150,
    })

    gsap.set([wcH2, wcText], {
        xPercent: 100,
    })
}

export const aboutIntroAnimation = () => {
    // console.log('aboutIntroAnimation')

    const delay = 0.6

    gsap.timeline()
        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.about__section_hero'), 0)

        .add(() => navBarLinksFadeIn(), 0 + delay)
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 0 + delay)
        .add(() => xPercentOpacityReturn('.about__hero-bg-circle'), 0.75 + delay)

        .add(() => xPercentOpacityReturn('.about__heading'), 1.1 + delay)
        .add(() => xPercentOpacityReturn('.about__hero-text'), 1.25 + delay)

        .add(() => unMaskToLeft('.about-hero-mask1'), 1.75 + delay)

        .add(() => fadeIn('.about-worldclass_section_hero'), 1.9 + delay)

        .add(() => yPercentOpacityReturn('.about_worldclass_bg_wrapper'), 2.1 + delay)
        .add(() => xPercentOpacityReturn('.about-worldclass__heading'), 2.3 + delay)
        .add(() => xPercentOpacityReturn('.about-worldclass-text'), 2.5 + delay)

        .add(() => unMaskToRight('.about-worldclass__mask'), 2.85 + delay)
}
