// console.log('barbaInit.js loaded')

// import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v13/config.js";
import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v13/config.js";

function importModule(modulePath) {
    // Global object to store modules
    window.__importedModules = window.__importedModules || {};
  
    // If module is already loaded, return it immediately
    if (window.__importedModules[modulePath]) {
      return Promise.resolve(window.__importedModules[modulePath]);
    }
  
    // Create a promise to load the module
    return new Promise((resolve, reject) => {
      try {
        // Try native import first
        import(modulePath)
          .then(module => {
            window.__importedModules[modulePath] = module;
            resolve(module);
          })
          .catch(() => {
            // Fallback to script loading
            const script = document.createElement('script');
            script.src = modulePath;
            
            script.onload = () => {
              // Assumes the module exports are now available globally
              const moduleName = modulePath.split('/').pop().replace('.js', '');
              const module = window[moduleName] || {};
              window.__importedModules[modulePath] = module;
              resolve(module);
            };
            
            script.onerror = () => {
              reject(new Error(`Failed to load module: ${modulePath}`));
            };
            
            document.head.appendChild(script);
          });
      } catch {
        // Fallback for environments without import
        const script = document.createElement('script');
        script.src = modulePath;
        
        script.onload = () => {
          const moduleName = modulePath.split('/').pop().replace('.js', '');
          const module = window[moduleName] || {};
          window.__importedModules[modulePath] = module;
          resolve(module);
        };
        
        script.onerror = () => {
          reject(new Error(`Failed to load module: ${modulePath}`));
        };
        
        document.head.appendChild(script);
      }
    });
}
  
// Global object to store module promises
window.__modulePromises = {};

// Function to safely import and cache module promises
function safeImportModule(modulePath) {
if (!window.__modulePromises[modulePath]) {
    window.__modulePromises[modulePath] = importModule(modulePath);
}
return window.__modulePromises[modulePath];
}

let contactForm, homeAnimations, aboutAnimations, contactAnimations, graphicDesignAnimations, webDesignAnimations, appDesignAnimations, locationsAnimations, locationBtns, utilities, commonAnimations;

// Preload modules
Promise.all([
  safeImportModule(`${CONFIG.path}contact-form.js`),
  safeImportModule(`${CONFIG.path}homeAnimations.js`),
  safeImportModule(`${CONFIG.path}aboutAnimations.js`),
  safeImportModule(`${CONFIG.path}contactAnimations.js`),
  safeImportModule(`${CONFIG.path}graphicDesignAnimations.js`),
  safeImportModule(`${CONFIG.path}webDesignAnimations.js`),
  safeImportModule(`${CONFIG.path}appDesignAnimations.js`),
  safeImportModule(`${CONFIG.path}locationsAnimations.js`),
  safeImportModule(`${CONFIG.path}location-btns.js`),
  safeImportModule(`${CONFIG.path}utilities.js`),
  safeImportModule(`${CONFIG.path}commonAnimations.js`)
]).then(([contactFormModule, homeAnimationsModule, aboutAnimationsModule, contactAnimationsModule, graphicDesignAnimationsModule, webDesignAnimationsModule, appDesignAnimationsModule, locationsAnimationsModule, locationBtnsModule, utilitiesModule, commonAnimationsModule]) => {
  // Store modules globally
  contactForm = contactFormModule;
  homeAnimations = homeAnimationsModule;
  aboutAnimations = aboutAnimationsModule;
  contactAnimations = contactAnimationsModule;
  graphicDesignAnimations = graphicDesignAnimationsModule;
  webDesignAnimations = webDesignAnimationsModule;
  appDesignAnimations = appDesignAnimationsModule;
  locationsAnimations = locationsAnimationsModule;
  locationBtns = locationBtnsModule;
  utilities = utilitiesModule;
  commonAnimations = commonAnimationsModule;
  // Continue with rest of your script
  // Now you can use functions like:
//   contactForm.contactFormInit();
//   homeAnimations.homeIntroInit();
}).catch(error => {
  console.error('Module loading failed:', error);
});



// const { contactFormInit } = await importModule(`${CONFIG.path}contact-form.js`)
// const { contactIntroInit, contactIntroAnimation } = await importModule(`${CONFIG.path}contactAnimations.js`);

// const { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } = await importModule(`${CONFIG.path}homeAnimations.js`)
// const { aboutIntroInit, aboutIntroAnimation } = await importModule(`${CONFIG.path}aboutAnimations.js`);


// const { graphicDesignIntroInit, graphicDesignIntroAnimation } = await importModule(`${CONFIG.path}graphicDesignAnimations.js`);
// const { webDesignIntroInit, webDesignIntroAnimation } = await importModule(`${CONFIG.path}webDesignAnimations.js`);
// const { appDesignIntroInit, appDesignIntroAnimation } = await importModule(`${CONFIG.path}appDesignAnimations.js`);

// const { locationsIntroInit, locationsIntroAnimation } = await importModule(`${CONFIG.path}locationsAnimations.js`);
// const { locationBtnsInit } = await importModule(`${CONFIG.path}location-btns.js`);

// const {
//     // textSplit,
//     removeScriptsFromBody,
//     addScriptsToBody,
//     addFilesCssToBody,
//     removeCssFilesFromBody
// } = await importModule(`${CONFIG.path}utilities.js`);


// const {
//     introOverlayFadeIn,
//     animationColumnsEnter,
//     // transitionAnimationReset
// } = await importModule(`${CONFIG.path}commonAnimations.js`);

// const { contactFormInit } = await import(`${CONFIG.path}contact-form.js`)
// const { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } = await import(`${CONFIG.path}homeAnimations.js`)
// const { aboutIntroInit, aboutIntroAnimation } = await import(`${CONFIG.path}aboutAnimations.js`);
// const { locationsIntroInit, locationsIntroAnimation } = await import(`${CONFIG.path}locationsAnimations.js`);
// const { contactIntroInit, contactIntroAnimation } = await import(`${CONFIG.path}contactAnimations.js`);
// const { graphicDesignIntroInit, graphicDesignIntroAnimation } = await import(`${CONFIG.path}graphicDesignAnimations.js`);
// const { webDesignIntroInit, webDesignIntroAnimation } = await import(`${CONFIG.path}webDesignAnimations.js`);
// const { appDesignIntroInit, appDesignIntroAnimation } = await import(`${CONFIG.path}appDesignAnimations.js`);
// const { locationBtnsInit } = await import(`${CONFIG.path}location-btns.js`);

// const {
//     // textSplit,
//     removeScriptsFromBody,
//     addScriptsToBody,
//     addFilesCssToBody,
//     removeCssFilesFromBody
// } = await import(`${CONFIG.path}utilities.js`);


// const {
//     introOverlayFadeIn,
//     animationColumnsEnter,
//     // transitionAnimationReset
// } = await import(`${CONFIG.path}commonAnimations.js`);


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
        homeAnimations.homeIntroInit(data.next.container)
    } else if (data.next.namespace === 'about') {
        aboutAnimations.aboutIntroInit(data.next.container)
    } else if (data.next.namespace === 'locations') {
        locationsAnimations.locationsIntroInit(data.next.container)
    } else if (data.next.namespace === 'contact') {
        contactAnimations.contactIntroInit(data.next.container)
    } else if (data.next.namespace === 'graphic-design') {
        await graphicDesignAnimations.graphicDesignIntroInit(data.next.container)
    } else if (data.next.namespace === 'web-design') {
        await webDesignAnimations.webDesignIntroInit(data.next.container)
    } else if (data.next.namespace === 'app-design') {
        await appDesignAnimations.appDesignIntroInit(data.next.container)
    }

    if (data.next.namespace !== 'locations') {
        locationsAnimations.locationBtnsInit(data.next.container)
    }

});

barba.hooks.once(async (data) => {
    // console.log('barba.hooks.once')

    if (data.next.namespace === 'home') {
        await homeAnimations.homeIntroAnimation()
        homeAnimations.homeTransitionAnimation('once')
    } else if (data.next.namespace === 'about') {
        aboutAnimations.aboutIntroAnimation()
    } else if (data.next.namespace === 'locations') {
        locationsAnimations.locationsIntroAnimation()
    } else if (data.next.namespace === 'contact') {
        contactAnimations.contactIntroAnimation()
    } else if (data.next.namespace === 'graphic-design') {
        graphicDesignAnimations.graphicDesignIntroAnimation()
    } else if (data.next.namespace === 'web-design') {
        webDesignAnimations.webDesignIntroAnimation()
    } else if (data.next.namespace === 'app-design') {
        appDesignAnimations.appDesignIntroAnimation()
    }
});


barba.hooks.afterEnter((data) => {
    // console.log('barba.hooks.afterEnter')
    const currentPageId = data.current.namespace;
    const nextPageId = data.next.namespace; // Assuming your container has an ID that matches the page

    // console.log(nextPageId.includes('design') && !currentPageId.includes('design'))

    nextPageId === 'home' ? utilities.addScriptsToBody([homeJsFileUrl]) : utilities.removeScriptsFromBody([homeJsFileUrl])
    nextPageId === 'locations' ? utilities.addScriptsToBody([locationsJsFileUrl]) : utilities.removeScriptsFromBody([locationsJsFileUrl])
    nextPageId === 'locations' ? utilities.addFilesCssToBody([locationsCssFileUrl]) : utilities.removeCssFilesFromBody([locationsCssFileUrl])
    nextPageId === 'about' ? utilities.addScriptsToBody([aboutJsFileUrl]) : utilities.removeScriptsFromBody([aboutJsFileUrl])
    nextPageId === 'contact' ? utilities.addScriptsToBody([locationBtnsJsFileUrl, contactJsFileUrl]) : utilities.removeScriptsFromBody([locationBtnsJsFileUrl, contactJsFileUrl])

    if (nextPageId.includes('design') && !currentPageId.includes('design')) {
        utilities.addScriptsToBody([designJsFileUrl]);
        utilities.addFilesCssToBody([designCssFileUrl]);
    } else if (currentPageId.includes('design') && !nextPageId.includes('design')) {
        utilities.removeScriptsFromBody([designJsFileUrl]);
        utilities.removeCssFilesFromBody([designCssFileUrl]);
    } else if (nextPageId === 'contact') {
        contactForm.contactFormInit(data.next.container)
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
                await commonAnimations.introOverlayFadeIn()
                await commonAnimations.animationColumnsEnter();
                window.scrollTo(0, 0);

            },
            async enter(data) {
                // console.log('\n\nENTER')

                if (data.next.namespace === 'home') {
                    homeAnimations.homeTransitionAnimation('enter')
                } else if (data.next.namespace === 'about') {
                    aboutAnimations.aboutIntroAnimation()
                } else if (data.next.namespace === 'locations') {
                    locationsAnimations.locationsIntroAnimation()
                } else if (data.next.namespace === 'contact') {
                    contactAnimations.contactIntroAnimation()
                } else if (data.next.namespace === 'web-design') {
                    // setTimeout(() => {
                    webDesignAnimations.webDesignIntroAnimation()
                    // }, 100)
                } else if (data.next.namespace === 'app-design') {
                    // setTimeout(() => {
                    appDesignAnimations.appDesignIntroAnimation()
                    // }, 100)
                } else if (data.next.namespace === 'graphic-design') {
                    // setTimeout(() => {
                    graphicDesignAnimations.graphicDesignIntroAnimation()
                    // }, 100)
                }
            },
        },
    ]
});
