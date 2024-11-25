// console.log('barbaInit.js loaded')

// import { CONFIG } from "./config.js";
import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v7/config.js";

const { contactFormInit } = await import(`${CONFIG.path}contact-form.js`)
const { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } = await import(`${CONFIG.path}homeAnimations.js`)
const { aboutIntroInit, aboutIntroAnimation } = await import(`${CONFIG.path}aboutAnimations.js`);
const { locationsIntroInit, locationsIntroAnimation } = await import(`${CONFIG.path}locationsAnimations.js`);
const { contactIntroInit, contactIntroAnimation } = await import(`${CONFIG.path}contactAnimations.js`);
const { graphicDesignIntroInit, graphicDesignIntroAnimation } = await import(`${CONFIG.path}graphicDesignAnimations.js`);
const { webDesignIntroInit, webDesignIntroAnimation } = await import(`${CONFIG.path}webDesignAnimations.js`);
const { appDesignIntroInit, appDesignIntroAnimation } = await import(`${CONFIG.path}appDesignAnimations.js`);
const { locationBtnsInit } = await import(`${CONFIG.path}location-btns.js`);

const {
    // textSplit,
    removeScriptsFromBody,
    addScriptsToBody,
    addFilesCssToBody,
    removeCssFilesFromBody
} = await import(`${CONFIG.path}utilities.js`);


const {
    introOverlayFadeIn,
    animationColumnsEnter,
    // transitionAnimationReset
} = await import(`${CONFIG.path}commonAnimations.js`);


const homeJsFileUrl = `${CONFIG.path}homeAnimations.js`
const aboutJsFileUrl = `${CONFIG.path}aboutAnimations.js`
const locationsJsFileUrl = `${CONFIG.path}locationsAnimations.js`
const contactJsFileUrl = `${CONFIG.path}contactAnimations.js`
const locationBtnsJsFileUrl = `${CONFIG.path}location-btns.js`
const designJsFileUrl = `${CONFIG.path}designAnimations.js`
const designCssFileUrl = `${CONFIG.path}design.css`
const locationsCssFileUrl = `${CONFIG.path}locations.css`


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

    if (data.next.namespace !== 'locations') {
        locationBtnsInit(data.next.container)
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
            once() { },
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
