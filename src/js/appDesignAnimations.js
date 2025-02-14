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


export const appDesignIntroInit = (container) => {
    // console.log('appDesignIntroInit')

    return new Promise((resolve) => {
        /* Nav Bar */
        const navBarLinks = document.querySelectorAll('.nav-menu__link')
        const navBarLogo = document.querySelector('.navbar__link-block > img')
        const navBar = document.querySelector('div.navbar.w-nav')

        /* Hero Section */
        const heroSection = container.querySelector('.appdesign-header')
        // const heroBgCircle = container.querySelector('.appdesign-hero-bg')
        const heroBgCircle = container.querySelector('.bg-wrapper')
        const heroH1 = container.querySelector('.home-talk-h2')
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

export const appDesignIntroAnimation = () => {
    // console.log('appDesignIntroAnimation')
    gsap.timeline()

        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.appdesign-header'), 0)
        .add(() => navBarLinksFadeIn(), 0.5)

        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.0)
        .add(() => yPercentOpacityReturn('.home-talk-h2'), 1.0)
        .add(() => xPercentOpacityReturn('.home-talk-h2'), 1.0)

        .add(() => yPercentOpacityReturn('.home-talk-text'), 1.2)
        .add(() => xPercentOpacityReturn('.home-talk-text'), 1.2)

        // .add(() => scaleTo1('.appdesign-hero-bg', false), 1.5)
        .add(() => scaleTo1('.bg-wrapper', false), 1.5)

        .add(() => yPercentOpacityReturnStaggered('.webdesign_main_card'), 1.4)
        .add(() => scaleTo1('img.image-6', true), 1.65)
}
