// console.log('contactAnimations.js')
import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v23/src/js/config.js";


const {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    scaleTo1,
    yPercentOpacityReturnStaggered,
    transitionAnimationReset
} = await import(`${CONFIG.path}${CONFIG.pathJs}commonAnimations.js`)


export const graphicDesignIntroInit = (container) => {
    // console.log('graphicDesignIntroInit')

    return new Promise((resolve) => {
        /* Nav Bar */
        const navBarLinks = document.querySelectorAll('.nav-link')
        const navBarLogo = document.querySelector('.link-block > img')
        const navBar = document.querySelector('div.navbar.w-nav')

        /* Hero Section */
        const heroSection = container.querySelector('.graphicdesign-header')
        // const heroBgCircle = document.querySelector('.graphic-header-bg')
        const heroBgCircle = container.querySelector('.bg-wrapper')
        const heroH1 = container.querySelector('.home-talk-h2')
        const heroParagraph = container.querySelector('.home-talk-text')

        /* Cards */
        const designElems = container.querySelectorAll('.webdesign_main_card')
        const designElemImgs = container.querySelectorAll('img.image-6')

        gsap.set([heroSection, designElemImgs], { scale: 3.5 })

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

export const graphicDesignIntroAnimation = () => {
    // console.log('graphicDesignIntroAnimation')
    gsap.timeline()

        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.graphicdesign-header'), 0)
        .add(() => navBarLinksFadeIn(), 0.6)

        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.1)
        .add(() => yPercentOpacityReturn('.home-talk-h2'), 1.1)
        .add(() => xPercentOpacityReturn('.home-talk-h2'), 1.1)

        .add(() => yPercentOpacityReturn('.home-talk-text'), 1.3)
        .add(() => xPercentOpacityReturn('.home-talk-text'), 1.3)

        // .add(() => scaleTo1('.graphic-header-bg'), 1.6)
        .add(() => scaleTo1('.bg-wrapper'), 1.6)

        .add(() => yPercentOpacityReturnStaggered('.webdesign_main_card'), 1.5)
        .add(() => scaleTo1('img.image-6', true), 1.75)
}
