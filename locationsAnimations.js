console.log('locationsAnimations.js')

import { 
    // introLogoFadeIn, 
    navBarLinksFadeIn, 
    xPercentOpacityReturn, 
    yPercentOpacityReturn, 
    animationColumnsLeave 
} from './commonAnimations.js'

export const locationsIntroInit = (container) => {
    console.log('locationsIntroInit')
    // const introLogo = document.querySelector('.intro-logo')
    
    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')
    
    /* Main Section */
    const canadaMain = container.querySelector('.location_text_wrapper.is-canada')
    const australiaMain = container.querySelector('.location_text_wrapper.is-austalia')
    const ukMain = container.querySelector('.location_text_wrapper.is-uk')

    const canadaMap = container.querySelector('.location-img-wrapper.is-canada')
    const australiaMap = container.querySelector('.location-img-wrapper.is-australia')
    const ukMap = container.querySelector('.location-img-wrapper.is-uk')

    const canadaCircles = container.querySelector('.location_text_wrapper.is-canada > .locations_circles_wrapper')
    const australiaCircles = container.querySelector('.location_text_wrapper.is-austalia > .locations_circles_wrapper')
    const ukCircles = container.querySelector('.location_text_wrapper.is-uk > .locations_circles_wrapper')
 
    const canadaH2 = container.querySelector('.location_text_wrapper.is-canada > .locations_h2')
    const australiaH2 = container.querySelector('.location_text_wrapper.is-austalia > .locations_h2')
    const ukH2 = container.querySelector('.location_text_wrapper.is-uk > .locations_h2')

    const canadaAddresses = container.querySelector('.location_text_wrapper.is-canada > .locations_addresses_wrapper')
    const australiaAddresses = container.querySelector('.location_text_wrapper.is-austalia > .locations_addresses_wrapper')
    const ukAddresses = container.querySelector('.location_text_wrapper.is-uk > .locations_addresses_wrapper')

    gsap.set([navBarLinks, navBarLogo,
              canadaMain, australiaMain, ukMain,
              canadaMap, australiaMap, ukMap,
              canadaCircles, australiaCircles, ukCircles,
              canadaH2, australiaH2, ukH2,
              canadaAddresses, australiaAddresses, ukAddresses
    ], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([canadaMain, australiaMap, ukMain], {
        xPercent: -150,
    })

    gsap.set([canadaMap, australiaMain, ukMap], {
        xPercent: 100,
    })

    gsap.set([canadaCircles, australiaCircles, ukCircles], {
        xPercent: 150
    })

    gsap.set([canadaH2, australiaH2, ukH2, canadaAddresses, australiaAddresses, ukAddresses], {
        yPercent: 100,
        xPercent: -45
    })

    gsap.set([canadaAddresses, australiaAddresses, ukAddresses], {
        yPercent: 100,
        xPercent: -15
    })

}


export const locationsIntroAnimation = () => {
    console.log('locationsIntroAnimation')
    gsap.timeline()
    .add(gsap.set('.intro-overlay', {autoAlpha: 0}), 0)
    .add(() => animationColumnsLeave(), 0)
    .add(gsap.set('.transition', {autoAlpha: 0}), 1.25)

    .add(() => navBarLinksFadeIn(), 0)
    .add(gsap.set('div.navbar.w-nav', {opacity: 1, zIndex: 1000}), 1.75)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-canada'), 1.75)
    .add(() => xPercentOpacityReturn('.location-img-wrapper.is-canada'), 1.75)
    .add(() => xPercentOpacityReturn('.location-img-wrapper.is-australia'), 1.75)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-austalia'), 1.75)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-uk'), 1.75)
    .add(() => xPercentOpacityReturn('.location-img-wrapper.is-uk'), 1.75)

    /* Canada */
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-canada > .locations_circles_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-canada > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-canada > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-canada > .locations_addresses_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-canada > .locations_addresses_wrapper'), 2.5)

    /* Australia */
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-austalia > .locations_circles_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-austalia > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-austalia > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-austalia > .locations_addresses_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-austalia > .locations_addresses_wrapper'), 2.5)

    /* UK */
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-uk > .locations_circles_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-uk > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-uk > .locations_h2'), 2.2)
    .add(() => xPercentOpacityReturn('.location_text_wrapper.is-uk > .locations_addresses_wrapper'), 2.5)
    .add(() => yPercentOpacityReturn('.location_text_wrapper.is-uk > .locations_addresses_wrapper'), 2.5) 
}
