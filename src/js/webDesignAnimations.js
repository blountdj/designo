// console.log('contactAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v36/dist/js/config.min.js";

const {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    scaleTo1,
    yPercentOpacityReturnStaggered,
    transitionAnimationReset
} = await import(`${CONFIG.path}${CONFIG.jsFolder}commonAnimations${CONFIG.jsPostFix}.js`)


export const webDesignIntroInit = (container) => {
    // console.log('webDesignIntroInit')
    // const introLogo = document.querySelector('.intro-logo')

    return new Promise((resolve) => {
        /* Nav Bar */
        const navBarLinks = document.querySelectorAll('.nav-menu__link')
        const navBarLogo = document.querySelector('.navbar__link-block > img')
        const navBar = document.querySelector('div.navbar.w-nav')

        /* Hero Section */
        const heroSection = container.querySelector('.webdesign-header')
        // const heroBgCircle = container.querySelector('.appdesign-hero-bg')
        const heroBgCircle = container.querySelector('.bg-wrapper')
        const heroH1 = container.querySelector('.webdesign-hero-h2')
        const heroParagraph = container.querySelector('.home-talk-text')

        /* Cards */
        const designElems = container.querySelectorAll('.webdesign_main_card')
        const designElemImgs = container.querySelectorAll('img.image-6')


        gsap.set([heroSection, designElemImgs, heroBgCircle], { scale: 3.5 })

        gsap.set([heroH1, heroParagraph, navBarLinks, navBarLogo,
            designElems, heroBgCircle, designElemImgs
        ], {
            opacity: 0,
        })
        gsap.set([navBar], {
            zIndex: 0,
        })

        gsap.set([heroBgCircle], {
            scale: 3.5,
        })

        gsap.set([heroH1], {
            yPercent: 100,
            xPercent: -45
        })

        gsap.set([heroParagraph], {
            yPercent: 100,
            xPercent: -15
        })

        gsap.set([designElems], {
            yPercent: 75,
        })

        resolve()
    })
}


export const webDesignIntroAnimation = () => {
    // console.log('webDesignIntroAnimation')
    gsap.timeline()

        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.webdesign-header'), 0)
        .add(() => navBarLinksFadeIn(), 0.6)

        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.1)
        .add(() => yPercentOpacityReturn('.webdesign-hero-h2'), 1.1)
        .add(() => xPercentOpacityReturn('.webdesign-hero-h2'), 1.1)

        .add(() => yPercentOpacityReturn('.home-talk-text'), 1.3)
        .add(() => xPercentOpacityReturn('.home-talk-text'), 1.3)

        // .add(() => scaleTo1('.appdesign-hero-bg', false), 1.6)
        .add(() => scaleTo1('.bg-wrapper', false), 1.6)

        .add(() => yPercentOpacityReturnStaggered('.webdesign_main_card'), 1.5)
        .add(() => scaleTo1('img.image-6', true), 1.75)
}
