// console.log('barbaInit.js loaded')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v33/dist/js/config.min.js";

// const { contactFormInit } = await import(`${CONFIG.path}${CONFIG.jsFolder}contact-form.js`)

const contactFormInit = (container) => {
    // console.log('contactFormInit');

    // Create a promise that resolves when Webflow is available
    const webflowReady = new Promise((resolve) => {
        const checkWebflow = () => {
            if (window.Webflow) {
                resolve(window.Webflow);
            } else {
                setTimeout(checkWebflow, 100);
            }
        };
        checkWebflow();
    });

    // Use the promise
    webflowReady.then((Webflow) => {
        if (Webflow.destroy) {
            Webflow.destroy();
        }

        Webflow.push(function () {
            // console.log('webflow push worked2');
            // Your form initialization code here
            const nameInputWrapper = document.getElementById('contact-name');
            const emailInputWrapper = document.getElementById('contact-email');
            const phoneInputWrapper = document.getElementById('contact-phone');
            const messageInputWrapper = document.getElementById('contact-message');

            const nameInput = nameInputWrapper.querySelector('input');
            const nameErrorMsgWrapper = nameInputWrapper.querySelector('.input-error-wrapper');
            const nameErrorMsgText = nameErrorMsgWrapper.querySelector('.error-message-text');

            const emailInput = emailInputWrapper.querySelector('input');
            const emailErrorMsgWrapper = emailInputWrapper.querySelector('.input-error-wrapper');
            const emailErrorMsgText = emailErrorMsgWrapper.querySelector('.error-message-text');

            const phoneInput = phoneInputWrapper.querySelector('input');
            const phoneErrorMsgWrapper = phoneInputWrapper.querySelector('.input-error-wrapper');
            const phoneErrorMsgText = phoneErrorMsgWrapper.querySelector('.error-message-text');

            const messageInput = messageInputWrapper.querySelector('textarea');
            const messageErrorMsgWrapper = messageInputWrapper.querySelector('.input-error-wrapper');
            const messageErrorMsgText = messageErrorMsgWrapper.querySelector('.error-message-text');

            /* 
            Need to add this custom element wr-type="submit" to the submit button. 
            It can't also be the default submit button. You need to remove this and create
            your own using a text block.
            */
            $('[wr-type="submit"]').click(function () {
                let isOk = runFormSubmitChecks(); // Use this to define whether isOk is true or false

                if (isOk) {
                    // console.log('submitting')
                    const successNameTextElem = document.getElementById('success-name-text');
                    successNameTextElem.innerHTML = nameInput.value;
                    $(this).parents('form').submit()
                    // $(document).on("submit");
                    // form.submit();
                }
                // else {
                //     console.log('not submitting')
                // }
            }); // end submit


            function runFormSubmitChecks() {
                // console.log('runFormSubmitChecks')

                let errors = [];

                errors.push(checkNameInput(nameInput, nameErrorMsgWrapper, nameErrorMsgText));
                errors.push(checkEmailInput(emailInput, emailErrorMsgWrapper, emailErrorMsgText));
                errors.push(checkPhoneInput(phoneInput, phoneErrorMsgWrapper, phoneErrorMsgText));
                errors.push(checkMessageInput(messageInput, messageErrorMsgWrapper, messageErrorMsgText));
                // console.log('submit error: ', errors)
                if (errors.includes(true)) {
                    alert('Please check contact form errors')
                    return false;
                } else {
                    // console.log('No Errors - continue')
                    return true;
                }
            }
        });

        if (Webflow.ready) {
            Webflow.ready();
        }
    });
}

function addErrorMessage(wrapper, textElem, errorMessage) {
    // console.log('addErrorMessage:', errorMessage)
    wrapper.classList.add('is-error');
    textElem.textContent = errorMessage;
}

function removeErrorMessage(wrapper) {
    wrapper.classList.remove('is-error');
}

function checkInputLength(input, wrapper, textElem, minLength, errorMessage) {
    // console.log('input.value.length:', input.value.length, 'minLength:', minLength)
    if (input.value.length < minLength) {
        addErrorMessage(wrapper, textElem, errorMessage)
        return true;
    } else {
        removeErrorMessage(wrapper)
        return false;
    }
}

function checkEmptyInput(input, wrapper, textElem, errorMessage) {
    // console.log('checkEmptyInput')
    if (!input.value) {
        addErrorMessage(wrapper, textElem, errorMessage)
        // console.log('checkEmptyInput - ERROR')
        return true;
    } else {
        removeErrorMessage(wrapper)
        return false;
    }
}

function checkNameInput(input, wrapper, textElem) {
    const checks = [
        () => checkEmptyInput(input, wrapper, textElem, 'Please enter your name'),
        () => checkInputLength(input, wrapper, textElem, 2, 'Minimum 2 characters'),
    ];

    // console.log('Checks array:', checks);

    const hasError = checks.some((check, index) => {
        const error = check(); // Call the function
        // console.log(`Iteration ${index}, error:`, error);
        return error; // Return the error directly since it's already a boolean
    });

    if (hasError) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(input, wrapper, textElem, errorMessage) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // return emailRegex.test(email);

    if (!emailRegex.test(input.value)) {
        addErrorMessage(wrapper, textElem, errorMessage)
        // console.log('checkEmptyInput - ERROR')
        return true;
    } else {
        removeErrorMessage(wrapper)
        return false;
    }
}

function isNumericAndLength(input, wrapper, textElem, minLength, errorMessage) {
    // Regular expression to check if the value contains only digits
    const onlyNumbers = /^[0-9]+$/;

    // Check if the value matches the regular expression and has the specified length
    if (!onlyNumbers.test(input.value) || input.value.length < minLength) {
        addErrorMessage(wrapper, textElem, errorMessage)
        // console.log('isNumericAndLength errors')
        return true;
    } else {
        removeErrorMessage(wrapper)
        // console.log('isNumericAndLength NO errors')
        return false;
    }
}

function checkPhoneInput(input, wrapper, textElem) {
    const checks = [
        () => checkEmptyInput(input, wrapper, textElem, 'Please enter your phone number'),
        () => isNumericAndLength(input, wrapper, textElem, 10, 'Please enter valid phone number'),
    ];

    // console.log('Checks array:', checks);

    const hasError = checks.some((check, index) => {
        const error = check(); // Call the function
        // console.log(`Iteration ${index}, error:`, error);
        return error; // Return the error directly since it's already a boolean
    });

    if (hasError) {
        return true;
    } else {
        return false;
    }
}

function checkEmailInput(input, wrapper, textElem) {
    const checks = [
        () => checkEmptyInput(input, wrapper, textElem, 'Please enter your email'),
        () => validateEmail(input, wrapper, textElem, 'Please enter valid email'),
    ];

    // console.log('Checks array:', checks);

    const hasError = checks.some((check, index) => {
        const error = check(); // Call the function
        // console.log(`Iteration ${index}, error:`, error);
        return error; // Return the error directly since it's already a boolean
    });

    if (hasError) {
        return true;
    } else {
        return false;
    }
}

function checkMessageInput(input, wrapper, textElem) {
    const checks = [
        () => checkEmptyInput(input, wrapper, textElem, 'Please enter your message'),
        () => checkInputLength(input, wrapper, textElem, 10, 'Minimum 10 characters'),
    ];

    // console.log('Checks array:', checks);

    const hasError = checks.some((check, index) => {
        const error = check(); // Call the function
        // console.log(`Iteration ${index}, error:`, error);
        return error; // Return the error directly since it's already a boolean
    });

    if (hasError) {
        return true;
    } else {
        return false;
    }
}

// const { homeIntroInit, homeIntroAnimation, homeTransitionAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}homeAnimations.js`)

const homeIntroInit = (container) => {
    // console.log('homeIntroInit')

    /* Intro Logo */
    const introLogo = document.querySelector('.intro-logo')

    /* Navbar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = container.querySelector('.home_section_hero')
    const heroImageWrapper = container.querySelector('.hero-image-wrapper')
    const homeH1 = container.querySelector('.home-h1')
    const homeHeroParagraph = container.querySelector('.home-hero-paragraph')
    const homeHeroBtn = container.querySelector('.btn-wrapper')
    const homeHeroBgCircle = container.querySelector('.home-hero-bg-circle')

    /* Design Grid */
    // const designGrid = container.querySelector('div.home_section_grid')
    const designGridCardLarge = container.querySelector('div.home-grid-card-large')
    const designGridCardSmall = container.querySelectorAll('div.home-grid-card-small')


    gsap.set([introLogo, heroImageWrapper, homeH1, homeHeroParagraph, homeHeroBtn,
        navBarLinks, navBarLogo, homeHeroBgCircle, designGridCardLarge, designGridCardSmall], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([homeHeroBgCircle], {
        xPercent: -150,
    })

    gsap.set([designGridCardLarge], {
        xPercent: -100,
    })

    gsap.set([designGridCardSmall], {
        xPercent: 100,
    })

    gsap.set([heroImageWrapper], {
        yPercent: 75,
    })

    gsap.set([homeH1, homeHeroParagraph, homeHeroBtn], {
        xPercent: -100,
    })

    gsap.set([heroSection], {
        scale: 3.5,
    })

}

const homeIntroAnimation = () => {
    // console.log('homeIntroAnimation')

    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: resolve
        })
            .add(() => introLogoFadeIn())
            .add(() => animationColumnsEnter(), 1.0)
    })
}

const homeTransitionAnimation = (type) => {
    // console.log('homeTransitionAnimation')

    const delay = type === 'once' ? 0 : 2.25

    // console.log('delay:', delay)
    gsap.timeline()
        .add(() => transitionAnimationReset(), 2.25 - delay) // 2.25
        .add(() => scaleTo1('.home_section_hero'), 2.5 - delay) // 2.5
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 2.95 - delay) // 2.95
        .add(() => navBarLinksFadeIn(), 3.0 - delay) // 3.0
        .add(() => xPercentOpacityReturn('.home-hero-bg-circle'), 3.5 - delay) // 3.5
        .add(() => yPercentOpacityReturn('.hero-image-wrapper'), 3.75 - delay) // 3.75
        .add(() => xPercentOpacityReturn('.home-h1'), 4 - delay) // 4
        .add(() => xPercentOpacityReturn('.home-hero-paragraph'), 4.25 - delay)
        .add(() => xPercentOpacityReturn('.btn-wrapper'), 4.5 - delay)

        .add(() => xPercentOpacityReturn('div.home-grid-card-large'), 4.7 - delay)
        .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-appdesign'), 5 - delay)
        .add(() => xPercentOpacityReturn('div.home-grid-card-small.is-graphicdesign'), 4.85 - delay)
}

// const { aboutIntroInit, aboutIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}aboutAnimations.js`);

const aboutIntroInit = (container) => {
    // console.log('aboutIntroInit')

    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = container.querySelector('.about_section_hero')
    // const heroSectionMask = container.querySelector('.about-hero-mask1')
    const heroH1 = container.querySelector('.about-h1')
    const heroParagraph = container.querySelector('.about-hero-text')
    const heroBgCircle = container.querySelector('.about-hero-bg-circle')

    /* World Class Section */
    const wcSectionWrapper = container.querySelector('.about-worldclass_section_hero')
    const wcH2 = container.querySelector('.about_worldclass_h2')
    const wcText = container.querySelector('.about-worldclass-text')
    const wcBgWrapper = container.querySelector('.about_worldclass_bg_wrapper')

    gsap.set(heroSection, { scale: 3.5 })

    gsap.set([heroH1, heroParagraph, heroBgCircle, navBarLinks, navBarLogo,
        wcH2, wcText, wcBgWrapper, wcSectionWrapper
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

const aboutIntroAnimation = () => {
    // console.log('aboutIntroAnimation')

    const delay = 0.6

    gsap.timeline()
        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.about_section_hero'), 0)

        .add(() => navBarLinksFadeIn(), 0 + delay)
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 0 + delay)
        .add(() => xPercentOpacityReturn('.about-hero-bg-circle'), 0.75 + delay)

        .add(() => xPercentOpacityReturn('.about-h1'), 1.1 + delay)
        .add(() => xPercentOpacityReturn('.about-hero-text'), 1.25 + delay)

        .add(() => unMaskToLeft('.about-hero-mask1'), 1.75 + delay)

        .add(() => fadeIn('.about-worldclass_section_hero'), 1.9 + delay)

        .add(() => yPercentOpacityReturn('.about_worldclass_bg_wrapper'), 2.1 + delay)
        .add(() => xPercentOpacityReturn('.about_worldclass_h2'), 2.3 + delay)
        .add(() => xPercentOpacityReturn('.about-worldclass-text'), 2.5 + delay)

        .add(() => unMaskToRight('.about-worldclass-mask'), 2.85 + delay)
}

// const { locationsIntroInit, locationsIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}locationsAnimations.js`);

const locationsIntroInit = (container) => {
    // console.log('locationsIntroInit')
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

    // Add Hover Effects
    addBorderAnimation(canadaMain, canadaMap);
    addBorderAnimation(australiaMain, australiaMap);
    addBorderAnimation(ukMain, ukMap);
}

const locationsIntroAnimation = (container) => {
    // console.log('locationsIntroAnimation')
    gsap.timeline()
        .add(gsap.set('.intro-overlay', { autoAlpha: 0 }), 0)
        .add(() => animationColumnsLeave(), 0)
        .add(gsap.set('.transition', { autoAlpha: 0 }), 1.25)

        .add(() => navBarLinksFadeIn(), 0)
        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.75)
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

/* Hover Animations */
function addBorderAnimation(mainElement, mapElement) {
    const computedStyle = window.getComputedStyle(mapElement);
    const borderRadius = parseInt(computedStyle.borderRadius) || 0;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('border-svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList.add('border-path');

    svg.appendChild(path);
    mapElement.style.position = 'relative';
    mapElement.appendChild(svg);

    function updatePath() {
        const width = mapElement.offsetWidth;
        const height = mapElement.offsetHeight;

        // Adjust the path to be slightly inset to prevent edge overflow
        const strokeWidth = 2; // Match this with CSS stroke-width
        const offset = strokeWidth / 2;
        const adjustedRadius = Math.max(0, borderRadius - offset);

        // Create path with adjusted coordinates
        const pathData = `
        M ${borderRadius} ${offset}
        H ${width - borderRadius}
        Q ${width - offset} ${offset}, ${width - offset} ${borderRadius}
        V ${height - borderRadius}
        Q ${width - offset} ${height - offset}, ${width - borderRadius} ${height - offset}
        H ${borderRadius}
        Q ${offset} ${height - offset}, ${offset} ${height - borderRadius}
        V ${borderRadius}
        Q ${offset} ${offset}, ${borderRadius} ${offset}
      `;

        path.setAttribute('d', pathData);

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        const tl = gsap.timeline({ paused: true });

        tl.to(path, {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: 'none'
        });

        mainElement.addEventListener('mouseenter', () => tl.play());
        mainElement.addEventListener('mouseleave', () => tl.reverse());
    }

    updatePath();
    window.addEventListener('resize', updatePath);
}


// const { contactIntroInit, contactIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}contactAnimations.js`);

const contactIntroInit = () => {
    // console.log('contactIntroInit')

    /* Nav Bar */
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')
    const navBar = document.querySelector('div.navbar.w-nav')

    /* Hero Section */
    const heroSection = document.querySelector('.contact_section_hero')
    const heroH1 = document.querySelector('.contact-h1')
    const heroParagraph = document.querySelector('.contact-text')
    const heroBgCircle = document.querySelector('.contact-hero-circle')
    const heroFormInputs = document.querySelectorAll('#contact-form > .input-wrapper')
    const heroFormBtn = document.querySelector('#contact-form > .btn-wrapper')

    /* Locations */
    const designElems = document.querySelectorAll('.about-attributes-card')

    gsap.set([heroSection], { scale: 3.5 })

    gsap.set([heroH1, heroParagraph, heroBgCircle, navBarLinks, navBarLogo,
        heroFormInputs, heroFormBtn, designElems
    ], {
        opacity: 0,
    })
    gsap.set([navBar], {
        zIndex: 0,
    })

    gsap.set([heroBgCircle], {
        xPercent: 150,
    })

    gsap.set([heroH1], {
        yPercent: 100,
        xPercent: -45
    })

    gsap.set([heroParagraph], {
        yPercent: 100,
        xPercent: -15
    })

    gsap.set([heroFormInputs, heroFormBtn], {
        yPercent: 100,
        xPercent: 15
    })

    gsap.set([designElems], {
        yPercent: 75,
    })
}

const contactIntroAnimation = () => {
    // console.log('contactIntroAnimation')
    gsap.timeline()

        .add(() => transitionAnimationReset(), 0)
        .add(() => scaleTo1('.contact_section_hero'), 0)
        .add(() => navBarLinksFadeIn(), 0.6)

        .add(gsap.set('div.navbar.w-nav', { opacity: 1, zIndex: 1000 }), 1.1)
        .add(() => yPercentOpacityReturn('.contact-h1'), 1.1)
        .add(() => xPercentOpacityReturn('.contact-h1'), 1.1)

        .add(() => yPercentOpacityReturn('.contact-text'), 1.3)
        .add(() => xPercentOpacityReturn('.contact-text'), 1.3)

        .add(() => xPercentOpacityReturn('.contact-hero-circle'), 2)

        .add(() => yPercentOpacityReturnStaggered(['#contact-form > .input-wrapper', '#contact-form > .btn-wrapper']), 1.5)
        .add(() => xPercentOpacityReturnStaggered(['#contact-form > .input-wrapper', '#contact-form > .btn-wrapper']), 1.5)

        .add(() => yPercentOpacityReturnStaggered('.about-attributes-card'), 2.2)
}

// const { graphicDesignIntroInit, graphicDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}graphicDesignAnimations.js`);

const graphicDesignIntroInit = (container) => {
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

const graphicDesignIntroAnimation = () => {
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

// const { webDesignIntroInit, webDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}webDesignAnimations.js`);

const webDesignIntroInit = (container) => {
    // console.log('webDesignIntroInit')
    // const introLogo = document.querySelector('.intro-logo')

    return new Promise((resolve) => {
        /* Nav Bar */
        const navBarLinks = document.querySelectorAll('.nav-link')
        const navBarLogo = document.querySelector('.link-block > img')
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

const webDesignIntroAnimation = () => {
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

// const { appDesignIntroInit, appDesignIntroAnimation } = await import(`${CONFIG.path}${CONFIG.jsFolder}appDesignAnimations.js`);

const appDesignIntroInit = (container) => {
    // console.log('appDesignIntroInit')

    return new Promise((resolve) => {
        /* Nav Bar */
        const navBarLinks = document.querySelectorAll('.nav-link')
        const navBarLogo = document.querySelector('.link-block > img')
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

const appDesignIntroAnimation = () => {
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

// const { locationBtnsInit } = await import(`${CONFIG.path}${CONFIG.jsFolder}location-btns.js`);

const locationBtnsInit = (container) => {

    const ukBtn = container.getElementById('uk-btn');
    const canadaBtn = container.getElementById('canada-btn');
    const australiaBtn = container.getElementById('australia-btn');

    function navigateToLocation(section) {
        const locationUrl = `https://designo-project.webflow.io/locations#${section}`;
        window.location.href = locationUrl;
    }

    ukBtn.addEventListener('click', () => navigateToLocation('uk-section'))
    canadaBtn.addEventListener('click', () => navigateToLocation('canada-section'))
    australiaBtn.addEventListener('click', () => navigateToLocation('australia-section'))
}

// const {
//     // textSplit,
//     removeScriptsFromBody,
//     addScriptsToBody,
//     addFilesCssToBody,
//     removeCssFilesFromBody
// } = await import(`${CONFIG.path}${CONFIG.jsFolder}utilities.js`);

function removeScriptsFromBody(scripts) {
    scripts.forEach(script => {
        const bodyScripts = document.body.getElementsByTagName('script');
        for (let i = bodyScripts.length - 1; i >= 0; i--) {
            if (bodyScripts[i].src && bodyScripts[i].src.includes(script)) {
                bodyScripts[i].parentNode.removeChild(bodyScripts[i]);
            }
        }
    });
}

function addScriptsToBody(scripts) {
    scripts.forEach(script => {
        const scriptElem = document.createElement('script');
        scriptElem.src = script;
        scriptElem.type = 'module';
        document.body.appendChild(scriptElem);
    });
}

function addFilesCssToBody(cssFiles) {
    cssFiles.forEach(cssFile => {
        const linkTag = document.createElement('link');
        linkTag.rel = 'stylesheet';
        linkTag.href = cssFile;
        document.body.appendChild(linkTag);
    })
}

function removeCssFilesFromBody(cssFiles) {
    cssFiles.forEach(cssFile => {
        const bodyLinks = document.body.getElementsByTagName('link');
        for (let i = bodyLinks.length - 1; i >= 0; i--) {
            if (bodyLinks[i].href && bodyLinks[i].href.includes(cssFile)) {
                bodyLinks[i].parentNode.removeChild(bodyLinks[i]);
            }
        }
    });
}

// const {
//     introOverlayFadeIn,
//     animationColumnsEnter,
//     // transitionAnimationReset
// } = await import(`${CONFIG.path}${CONFIG.jsFolder}commonAnimations.js`);

const introLogoFadeIn = () => {
    const introLogo = document.querySelector('.intro-logo')
    gsap.to(introLogo, {
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
    })
}

const navBarLinksFadeIn = () => {
    const navBarLinks = document.querySelectorAll('.nav-link')
    const navBarLogo = document.querySelector('.link-block > img')

    gsap.to([navBarLogo, ...navBarLinks], {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.inout',
    })
}

const xPercentOpacityReturn = (elem) => {
    gsap.to(elem, {
        xPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

const yPercentOpacityReturn = (elem) => {
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

const xPercentOpacityReturnStaggered = (elem) => {
    gsap.to(elem, {
        xPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: 0.1,
    })
}

const yPercentOpacityReturnStaggered = (elem) => {
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: 0.1,
    })
}

const unMaskToLeft = (elem) => {
    gsap.to(elem, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        xPercent: 0,
        duration: 1.5,
        ease: 'power3.inout',
    })
}

const unMaskToRight = (elem) => {
    gsap.to(elem, {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        xPercent: 0,
        duration: 1.5,
        ease: 'power3.inout',
    })
}

const scaleTo1 = (elem, staggered = false) => {
    gsap.to(elem, {
        scale: 1.0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: staggered ? 0.1 : 0,
        clearProps: true,
    })
}

const fadeIn = (elem) => {
    gsap.to(elem, {
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

const introOverlayFadeIn = () => {
    return new Promise((resolve) => {
        // gsap.set('.transition_column', {scaleX: 0})
        gsap.set('.intro-logo', { opacity: 0 })
        gsap.to(['.intro-overlay', '.transition'], {
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power3.inout',
            onComplete: resolve
        })
    })
}


/* ######### page-column-transition */
const tlColumnsAnimation = gsap.timeline({ paused: true, defaults: { ease: 'power4inOut' } });
tlColumnsAnimation.to('.transition_column', {
    duration: 1.0,
    scaleX: 2,
    stagger: 0.025,
    delay: 0.5,
});

const animationColumnsEnter = () => {
    // console.log('animationColumnsEnter')
    return new Promise((resolve) => {
        tlColumnsAnimation.play().then(resolve);
    });
};

const animationColumnsLeave = () => {
    return new Promise((resolve) => {
        tlColumnsAnimation.reverse().then(resolve);
    });
}

const transitionAnimationReset = () => {
    // console.log('transitionAnimationReset')
    gsap.set('.intro-overlay', { autoAlpha: 0 })
    gsap.set('.transition', { autoAlpha: 0 })
    gsap.set('.transition_column', { scaleX: 0 })
    animationColumnsLeave()
}



// const homeJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}homeAnimations.js`
// const aboutJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}aboutAnimations.js`
// const locationsJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}locationsAnimations.js`
// const contactJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}contactAnimations.js`
// const locationBtnsJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}location-btns.js`
// const designJsFileUrl = `${CONFIG.path}${CONFIG.jsFolder}designAnimations.js`

const designCssFileUrl = `${CONFIG.path}${CONFIG.pathCss}design${CONFIG.cssPostFix}.css`
const locationsCssFileUrl = `${CONFIG.path}${CONFIG.pathCss}locations${CONFIG.cssPostFix}.css`

// const navmenu = document.querySelector('.nav-menu-mobile')

barba.hooks.beforeEnter(async function (data) {
    // console.log('beforeEnter')
    // window.scrollTo(0, 0); // Scroll to the top of the page
    // console.log('data.next.namespace:', data.next.namespace)

    // gsap.to(navmenu, {
    //     opacity: 0,
    //     yPercent: -105,
    //     duration: 0.25,
    //     ease: 'power2.inOut'
    // })

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

    // if (nextPageId === 'home') {
    //     addScriptsToBody([homeJsFileUrl]);
    // } else {
    //     removeScriptsFromBody([homeJsFileUrl]);
    // }
    if (nextPageId === 'locations') {
        // addScriptsToBody([locationsJsFileUrl]);
        addFilesCssToBody([locationsCssFileUrl]);
    } else {
        // removeScriptsFromBody([locationsJsFileUrl]);
        removeCssFilesFromBody([locationsCssFileUrl]);
    }
    // if (nextPageId === 'about') {
    //     addScriptsToBody([aboutJsFileUrl]);
    // } else {
    //     removeScriptsFromBody([aboutJsFileUrl]);
    // }
    if (nextPageId === 'contact') {
        // addScriptsToBody([contactJsFileUrl]);
        contactFormInit(data.next.container)
    } else {
        // removeScriptsFromBody([contactJsFileUrl]);
    }

    if (nextPageId.includes('design') && !currentPageId.includes('design')) {
        // addScriptsToBody([designJsFileUrl]);
        addFilesCssToBody([designCssFileUrl]);
    } else if (currentPageId.includes('design') && !nextPageId.includes('design')) {
        // removeScriptsFromBody([designJsFileUrl]);
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

