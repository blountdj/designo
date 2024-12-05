// console.log('homeAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v29/dist/js/config.min.js";

const {
    introLogoFadeIn,
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    animationColumnsEnter,
    scaleTo1,
    transitionAnimationReset
} = await import(`${CONFIG.path}${CONFIG.jsFolder}commonAnimations${CONFIG.jsPostFix}.js`)


export const homeIntroInit = (container) => {
    // console.log('homeIntroInit')

    /* Intro Logo */
    const introLogo = document.querySelector('.intro-logo')

    /* Navbar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = container.querySelector('.home_section_hero')
    const heroImageWrapper = container.querySelector('.hero-image-wrapper')
    const homeH1 = container.querySelector('.home-h1')
    const homeHeroParagraph = container.querySelector('.home-hero-paragraph')
    const homeHeroBtn = container.querySelector('.btn-wrapper')
    const homeHeroBgCircle = container.querySelector('.home-hero-bg-circle')

    /* Design Grid */
    // const designGrid = container.querySelector('div.home_section_grid')
    const designGridCardLarge = container.querySelector('div.home-grid-card-large')
    const designGridCardSmall = container.querySelectorAll('div.home-grid-card-small')


    gsap.set([introLogo, heroImageWrapper, homeH1, homeHeroParagraph, homeHeroBtn,
        navBarLinks, navBarLogo, homeHeroBgCircle, designGridCardLarge, designGridCardSmall], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([homeHeroBgCircle], {
        xPercent: -150,
    })

    gsap.set([designGridCardLarge], {
        xPercent: -100,
    })

    gsap.set([designGridCardSmall], {
        xPercent: 100,
    })

    gsap.set([heroImageWrapper], {
        yPercent: 75,
    })

    gsap.set([homeH1, homeHeroParagraph, homeHeroBtn], {
        xPercent: -100,
    })

    gsap.set([heroSection], {
        scale: 3.5,
    })

}

export const homeIntroAnimation = () => {
    // console.log('homeIntroAnimation')

    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: resolve
        })
            .add(() => introLogoFadeIn())
            .add(() => animationColumnsEnter(), 1.0)
    })
}


export const homeTransitionAnimation = (type) => {
    // console.log('homeTransitionAnimation')

    const delay = type === 'once' ? 0 : 2.25

    // console.log('delay:', delay)
    gsap.timeline()
        .add(() => transitionAnimationReset(), 2.25 - delay) // 2.25
        .add(() => scaleTo1('.home_section_hero'), 2.5 - delay) // 2.5
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 2.5 - delay) // 2.95
        .add(() => navBarLinksFadeIn(), 3.0 - delay) // 3.0
        .add(() => xPercentOpacityReturn('.home-hero-bg-circle'), 3.5 - delay) // 3.5
        .add(() => yPercentOpacityReturn('.hero-image-wrapper'), 3.75 - delay) // 3.75
        .add(() => xPercentOpacityReturn('.home-h1'), 4 - delay) // 4
        .add(() => xPercentOpacityReturn('.home-hero-paragraph'), 4.25 - delay)
        .add(() => xPercentOpacityReturn('.btn-wrapper'), 4.5 - delay)

        .add(() => xPercentOpacityReturn('div.home-grid-card-large'), 4.7 - delay)
        .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-appdesign'), 5 - delay)
        .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-graphicdesign'), 4.85 - delay)
}

