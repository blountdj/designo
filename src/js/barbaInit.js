// console.log('barbaInit.js loaded')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v18/src/js/config.js";

const { contactFormInit } = await import(`${CONFIG.path}${CONFIG.pathJs}contact-form.js`)
const { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}homeAnimations.js`)
const { aboutIntroInit, aboutIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}aboutAnimations.js`);
const { locationsIntroInit, locationsIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}locationsAnimations.js`);
const { contactIntroInit, contactIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}contactAnimations.js`);
const { graphicDesignIntroInit, graphicDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}graphicDesignAnimations.js`);
const { webDesignIntroInit, webDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}webDesignAnimations.js`);
const { appDesignIntroInit, appDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.pathJs}appDesignAnimations.js`);
const { locationBtnsInit } = await import(`${CONFIG.path}${CONFIG.pathJs}location-btns.js`);

const {
    // textSplit,
    removeScriptsFromBody,
    addScriptsToBody,
    addFilesCssToBody,
    removeCssFilesFromBody
} = await import(`${CONFIG.path}${CONFIG.pathJs}utilities.js`);


const {
    introOverlayFadeIn,
    animationColumnsEnter,
    // transitionAnimationReset
} = await import(`${CONFIG.path}${CONFIG.pathJs}commonAnimations.js`);


const homeJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}homeAnimations.js`
const aboutJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}aboutAnimations.js`
const locationsJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}locationsAnimations.js`
const contactJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}contactAnimations.js`
const locationBtnsJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}location-btns.js`
const designJsFileUrl = `${CONFIG.path}${CONFIG.pathJs}designAnimations.js`

const designCssFileUrl = `${CONFIG.path}${CONFIG.pathCss}design${CONFIG.cssPostFix}.css`
const locationsCssFileUrl = `${CONFIG.path}${CONFIG.pathCss}locations${CONFIG.cssPostFix}.css`


barba.hooks.beforeEnter(async function (data) {
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

barba.hooks.once(async function (data) {
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


barba.hooks.afterEnter(function (data) {
    // console.log('barba.hooks.afterEnter')
    const currentPageId = data.current.namespace;
    const nextPageId = data.next.namespace; // Assuming your container has an ID that matches the page

    // console.log(nextPageId.includes('design') && !currentPageId.includes('design'))

    if (nextPageId === 'home') {
        addScriptsToBody([homeJsFileUrl]);
    } else {
        removeScriptsFromBody([homeJsFileUrl]);
    }
    if (nextPageId === 'locations') {
        addScriptsToBody([locationsJsFileUrl]);
        addFilesCssToBody([locationsCssFileUrl]);
    } else {
        removeScriptsFromBody([locationsJsFileUrl]);
        removeCssFilesFromBody([locationsCssFileUrl]);
    }
    if (nextPageId === 'about') {
        addScriptsToBody([aboutJsFileUrl]);
    } else {
        removeScriptsFromBody([aboutJsFileUrl]);
    }
    if (nextPageId === 'contact') {
        addScriptsToBody([locationBtnsJsFileUrl, contactJsFileUrl]);
        contactFormInit(data.next.container)
    } else {
        removeScriptsFromBody([locationBtnsJsFileUrl, contactJsFileUrl]);
    }

    if (nextPageId.includes('design') && !currentPageId.includes('design')) {
        addScriptsToBody([designJsFileUrl]);
        addFilesCssToBody([designCssFileUrl]);
    } else if (currentPageId.includes('design') && !nextPageId.includes('design')) {
        removeScriptsFromBody([designJsFileUrl]);
        removeCssFilesFromBody([designCssFileUrl]);
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
