// console.log('barbaInit.js loaded')

import { CONFIG } from "./config.js";
import { contactFormInit } from "./contact-form.js";
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
    // transitionAnimationReset
 } from "./commonAnimations.js";



barba.hooks.beforeEnter(async (data) => {
    // console.log('beforeEnter')
    // window.scrollTo(0, 0); // Scroll to the top of the page
    // console.log('data.next.namespace:', data.next.namespace)
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
    // console.log('barba.hooks.once')

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
const locationBtnsJsFileUrl = `http://127.0.0.1:5500/location-btns.js`
const designJsFileUrl = `http://127.0.0.1:5500/designAnimations.js`
const designCssFileUrl = `http://127.0.0.1:5500/design.css`
const locationsCssFileUrl = `http://127.0.0.1:5500/locations.css`
// const pageSpecificScriptUrl = `https://cdn.jsdelivr.net/gh/blountdj/arch-studio@v1/home.js`


barba.hooks.afterEnter((data) => {
    // console.log('barba.hooks.afterEnter')
    const currentPageId = data.current.namespace;
    const nextPageId = data.next.namespace; // Assuming your container has an ID that matches the page

    // console.log(nextPageId.includes('design') && !currentPageId.includes('design'))
        
    nextPageId === 'home' ? addScriptsToBody([homeJsFileUrl]) : removeScriptsFromBody([homeJsFileUrl])
    nextPageId === 'locations' ? addScriptsToBody([locationsJsFileUrl]) : removeScriptsFromBody([locationsJsFileUrl])
    nextPageId === 'locations' ? addFilesCssToBody([locationsCssFileUrl]) : removeCssFilesFromBody([locationsCssFileUrl])
    nextPageId === 'about' ? addScriptsToBody([aboutJsFileUrl]) : removeScriptsFromBody([aboutJsFileUrl])
    nextPageId === 'contact' ? addScriptsToBody([locationBtnsJsFileUrl, contactJsFileUrl]) : removeScriptsFromBody([locationBtnsJsFileUrl, contactJsFileUrl])
    
    if (nextPageId.includes('design') && !currentPageId.includes('design')) {
        addScriptsToBody([designJsFileUrl]);
        addFilesCssToBody([designCssFileUrl]);
    } else if (currentPageId.includes('design') && !nextPageId.includes('design')) {
        removeScriptsFromBody([designJsFileUrl]);
        removeCssFilesFromBody([designCssFileUrl]);
    } else if (nextPageId === 'contact') {
        contactFormInit(data.next.container)
    }
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
                // console.log('\n\nLEAVE')
                await introOverlayFadeIn()
                await animationColumnsEnter();
                window.scrollTo(0, 0);

            },
            async enter(data) {
                // console.log('\n\nENTER')

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
