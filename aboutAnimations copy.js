console.log('aboutAnimations.js')

import { 
    // introLogoFadeIn, 
    navBarLinksFadeIn, 
    xPercentOpacityReturn, 
    yPercentOpacityReturn, 
    animationColumnsEnter,
    unMaskToLeft,
    unMaskToRight,
} from './commonAnimations.js'

export const aboutIntroInit = () => {
    console.log('aboutIntroInit')
    // const introLogo = document.querySelector('.intro-logo')
    
    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')
    
    /* Hero Section */
    const heroSection = document.querySelector('.about_section_hero')
    const heroSectionMask = document.querySelector('.about-hero-mask1')
    const heroH1 = document.querySelector('.about-h1')
    const heroParagraph = document.querySelector('.about-hero-text')
    const heroBgCircle = document.querySelector('.about-hero-bg-circle')

    /* World Class Section */
    const wcH2 = document.querySelector('.about_worldclass_h2')
    const wcText = document.querySelector('.about-worldclass-text')
    const wcBgWrapper = document.querySelector('.about_worldclass_bg_wrapper')   

    gsap.set([heroH1, heroParagraph, heroBgCircle,  navBarLinks, navBarLogo,
              wcH2, wcText, wcBgWrapper
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
    console.log('aboutIntroAnimation')
    gsap.timeline()
    // .add(() => introLogoFadeIn())
    // .add(() => animationColumnsEnter(), 1.0)

    // .add(gsap.set('.intro-overlay', {autoAlpha: 0}), 2.25)
    // .add(gsap.set('.home_section_hero', {scale: 3.5}), 2.25)
    // .add(gsap.set('.transition', {autoAlpha: 0}), 2.25)
    // .add(gsap.set('.transition_column', {scaleX: 0}), 2.25)
    
    // .add(() => heroSectionScaleDown(), 2.5)
    // .add(gsap.set('div.navbar.w-nav', {opacity: 1, zIndex: 1000}), 2.95)

    .add(() => navBarLinksFadeIn(), 0)
    .add(() => xPercentOpacityReturn('.about-hero-bg-circle'), 0.75)
    // .add(() => yPercentOpacityReturn('.hero-image-wrapper'), 3.75)
    .add(() => xPercentOpacityReturn('.about-h1'), 1.1)
    .add(() => xPercentOpacityReturn('.about-hero-text'), 1.25)

    .add(() => unMaskToLeft('.about-hero-mask1'), 1.75)

    .add(() => yPercentOpacityReturn('.about_worldclass_bg_wrapper'), 2.1)
    .add(() => xPercentOpacityReturn('.about_worldclass_h2'), 2.3)
    .add(() => xPercentOpacityReturn('.about-worldclass-text'), 2.5)

    .add(() => unMaskToRight('.about-worldclass-mask'), 2.85)
    // .add(() => xPercentOpacityReturn('.btn-wrapper'), 4.5)

    // .add(() => xPercentOpacityReturn('div.home-grid-card-large'), 4.7)
    // .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-appdesign'), 5)
    // .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-graphicdesign'), 4.85)
    
}