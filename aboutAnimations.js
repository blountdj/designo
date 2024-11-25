// console.log('aboutAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v5/config.js";

import {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    unMaskToLeft,
    unMaskToRight,
    scaleTo1,
    transitionAnimationReset,
    fadeIn
// } from './commonAnimations.js'
} from CONFIG.path + 'commonAnimations.js'


export const aboutIntroInit = (container) => {
    // console.log('aboutIntroInit')

    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = container.querySelector('.about_section_hero')
    // const heroSectionMask = container.querySelector('.about-hero-mask1')
    const heroH1 = container.querySelector('.about-h1')
    const heroParagraph = container.querySelector('.about-hero-text')
    const heroBgCircle = container.querySelector('.about-hero-bg-circle')

    /* World Class Section */
    const wcSectionWrapper = container.querySelector('.about-worldclass_section_hero')
    const wcH2 = container.querySelector('.about_worldclass_h2')
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
        .add(() => scaleTo1('.about_section_hero'), 0)

        .add(() => navBarLinksFadeIn(), 0 + delay)
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 0 + delay)
        .add(() => xPercentOpacityReturn('.about-hero-bg-circle'), 0.75 + delay)

        .add(() => xPercentOpacityReturn('.about-h1'), 1.1 + delay)
        .add(() => xPercentOpacityReturn('.about-hero-text'), 1.25 + delay)

        .add(() => unMaskToLeft('.about-hero-mask1'), 1.75 + delay)

        .add(() => fadeIn('.about-worldclass_section_hero'), 1.9 + delay)

        .add(() => yPercentOpacityReturn('.about_worldclass_bg_wrapper'), 2.1 + delay)
        .add(() => xPercentOpacityReturn('.about_worldclass_h2'), 2.3 + delay)
        .add(() => xPercentOpacityReturn('.about-worldclass-text'), 2.5 + delay)

        .add(() => unMaskToRight('.about-worldclass-mask'), 2.85 + delay)
}
