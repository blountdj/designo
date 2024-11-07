console.log('barbaInit.js loaded')

import { CONFIG } from "./config.js";
import { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } from "./homeAnimations.js";
import { aboutIntroInit, aboutIntroAnimation } from "./aboutAnimations.js";
import { locationsIntroInit, locationsIntroAnimation } from "./locationsAnimations.js";
import { contactIntroInit, contactIntroAnimation } from "./contactAnimations.js";
import { graphicDesignIntroInit, graphicDesignIntroAnimation } from "./graphicDesignAnimations.js";
import { webDesignIntroInit, webDesignIntroAnimation } from "./webDesignAnimations.js";
import { appDesignIntroInit, appDesignIntroAnimation } from "./appDesignAnimations.js";
import { 
    // textSplit,
    removeScriptsFromBody,
    addScriptsToBody,
    addFilesCssToBody,
    removeCssFilesFromBody
} from "./utilities.js";


import { 
    introOverlayFadeIn, 
    animationColumnsEnter,
    transitionAnimationReset
 } from "./commonAnimations.js";

// const pageIdentifierTextEnter = async (data) => {
//     // console.log('\n\n### pageIdentifierTextEnter')

//     let pageIdentifierTextElem = data.next.container.querySelector('.page-identifer-text')
//     // console.log('pageIdentifierTextElem - barba.hooks.enter:', pageIdentifierTextElem)

//     textSplit(pageIdentifierTextElem)

//     return new Promise((resolve) => {
//         gsap.set('.page-identifer-text', {opacity: 1})
//         gsap.set('.char', {opacity: 0})
//         gsap.to('.char', {
//             opacity: 1,
//             duration: 1.575,
//             stagger: {
//                 from: "random",
//                 each: 0.075,
//             },
//             ease: "power2.out",
//             onComplete: () => {
//                 resolve()
//             }
//         })
//     })
// }

// const pageIdentifierTextLeave = (data) => {
//     // console.log('pageIdentifierTextLeave')
//     // console.log('data.next.namespace:', data.next.namespace)
//     let pageIdentifierTextElem = document.querySelector('.page-identifer-text')
//     // console.log('pageIdentifierTextElem0:', pageIdentifierTextElem)

//     return new Promise((resolve) => {
//         // gsap.set(pageIdentifierTextSplit.chars, { opacity: 0 });
//         gsap.to('.char', {
//             opacity: 0,
//             duration: 1.575,
//             stagger: {
//                 from: "random",
//                 each: 0.075,
//             },
//             ease: "power2.out",
//             onComplete: () => {
//                 resolve()
//                 pageIdentifierTextElem.textContent = data.next.namespace;
//             }
//         })
//     })
// }

const animationFadeInEnter = ((data) => {
    console.log('------animationFadeInEnter')
    // gsap.from(container, {
    gsap.set('.app', {
        autoAlpha: 0,
    })
    gsap.to('.app', {
        duration: 2.5,
        autoAlpha: 1,
        // scale: 0.5,
        ease: 'power4.out',
        // clearProps: true
        // onStart: async () => {
        //     if (data) {
        //         await pageIdentifierTextEnter(data)
        //     }
        // }
    })
})

// export const animationFadeOutLeave = (container) => {
const animationFadeOutLeave = (data) => {
    console.log('------animationFadeOutLeave');
    return new Promise((resolve) => {
        // gsap.set('.char', { opacity: 0 });
        // gsap.to(container, {
        gsap.to('.app', {
            duration: 1.5,
            // duration: 3,
            autoAlpha: 0,
            // scale: 0.5,
            ease: 'power4.out',
            // clearProps: true,
            // onStart: async () => {
            //     await pageIdentifierTextLeave(data)
            // },
            onComplete: resolve, // Resolve the promise when the animation completes
        });
    });
};

// barba.hooks.afterLeave(() => {
//     console.log('afterLeave')
//     window.scrollTo(0, 0);
// })


barba.hooks.beforeEnter(async (data) => {
    console.log('beforeEnter')
    // window.scrollTo(0, 0); // Scroll to the top of the page
    console.log('data.next.namespace:', data.next.namespace)
    if (data.next.namespace === 'home') {
        homeIntroInit(data.next.container)
    } else if (data.next.namespace === 'about') {
        aboutIntroInit(data.next.container)
    } else if (data.next.namespace === 'locations') {
        locationsIntroInit(data.next.container)
    } else if (data.next.namespace === 'contact') {
        contactIntroInit(data.next.container)
    } else if (data.next.namespace === 'graphic-design') {
        await graphicDesignIntroInit(data.next.container)
    } else if (data.next.namespace === 'web-design') {
        await webDesignIntroInit(data.next.container)
    } else if (data.next.namespace === 'app-design') {
        await appDesignIntroInit(data.next.container)
    }
});

barba.hooks.once(async (data) => {
    console.log('barba.hooks.once')

    if (data.next.namespace === 'home') {
        await homeIntroAnimation()
        homeTransitionAnimation('once')
    } else if (data.next.namespace === 'about') {
        aboutIntroAnimation()
    } else if (data.next.namespace === 'locations') {
        locationsIntroAnimation()
    } else if (data.next.namespace === 'contact') {
        contactIntroAnimation()
    } else if (data.next.namespace === 'graphic-design') {
        graphicDesignIntroAnimation()
    } else if (data.next.namespace === 'web-design') {
        webDesignIntroAnimation()
    } else if (data.next.namespace === 'app-design') {
        appDesignIntroAnimation()
    }
});


const homeJsFileUrl = `http://127.0.0.1:5500/homeAnimations.js`
const aboutJsFileUrl = `http://127.0.0.1:5500/aboutAnimations.js`
const locationsJsFileUrl = `http://127.0.0.1:5500/locationsAnimations.js`
const contactJsFileUrl = `http://127.0.0.1:5500/contactAnimations.js`
const contactFormJsFileUrl = `http://127.0.0.1:5500/contact-form.js`
const locationBtnsJsFileUrl = `http://127.0.0.1:5500/location-btns.js`
const designJsFileUrl = `http://127.0.0.1:5500/designAnimations.js`

const designCssFileUrl = `http://127.0.0.1:5500/design.css`

// const pageSpecificScriptUrl = `https://cdn.jsdelivr.net/gh/blountdj/arch-studio@v1/home.js`


barba.hooks.afterEnter((data) => {
    // console.log('barba.hooks.afterEnter')
    const currentPageId = data.current.namespace;
    const nextPageId = data.next.namespace; // Assuming your container has an ID that matches the page
    // console.log('currentPageId:', currentPageId)
        
    nextPageId === 'home' ? addScriptsToBody([homeJsFileUrl]) : removeScriptsFromBody([homeJsFileUrl])
    nextPageId === 'locations' ? addScriptsToBody([locationsJsFileUrl]) : removeScriptsFromBody([locationsJsFileUrl])
    nextPageId === 'about' ? addScriptsToBody([aboutJsFileUrl]) : removeScriptsFromBody([aboutJsFileUrl])
    nextPageId === 'contact' ? addScriptsToBody([contactFormJsFileUrl, locationBtnsJsFileUrl, contactJsFileUrl]) : removeScriptsFromBody([contactFormJsFileUrl, locationBtnsJsFileUrl, contactJsFileUrl])
    nextPageId.includes('design') && !currentPageId.includes('design') ? addScriptsToBody([designJsFileUrl]) : removeScriptsFromBody([designJsFileUrl])
    nextPageId.includes('design') && !currentPageId.includes('design') ? addFilesCssToBody([designCssFileUrl]) : removeCssFilesFromBody([designCssFileUrl])
});


barba.init({
    debug: CONFIG.barbaDebug,
    sync: false,
    views: [],
    transitions: [
        {
            name: 'page-fade-transition',
            // to: { namespace: ['todo'] },
            once() {},
            async leave(data) {
                console.log('\n\nLEAVE')
                // await animationFadeOutLeave(data);
                await introOverlayFadeIn()
                await animationColumnsEnter();
                window.scrollTo(0, 0);

            },
            async enter(data) {
                console.log('\n\nENTER')
                // await animationFadeInEnter(data);
                if (data.next.namespace === 'home') {
                    homeTransitionAnimation('enter')
                } else if (data.next.namespace === 'about') {
                    aboutIntroAnimation()
                } else if (data.next.namespace === 'locations') {
                    locationsIntroAnimation()
                } else if (data.next.namespace === 'contact') {
                    contactIntroAnimation()
                } else if (data.next.namespace === 'web-design') {
                    // setTimeout(() => {
                        webDesignIntroAnimation()
                    // }, 100)
                } else if (data.next.namespace === 'app-design') {
                    // setTimeout(() => {
                        appDesignIntroAnimation()
                    // }, 100)
                } else if (data.next.namespace === 'graphic-design') {  
                    // setTimeout(() => {
                        graphicDesignIntroAnimation()
                    // }, 100)
                }
            },
        },
    ]
});
