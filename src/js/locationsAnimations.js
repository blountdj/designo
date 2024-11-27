// console.log('locationsAnimations.js')

import { CONFIG } from "https://cdn.jsdelivr.net/gh/blountdj/designo@v14/src/js/config.js";

// function importModule(modulePath) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.type = 'module';
//         script.src = modulePath;
//         script.onload = () => {
//             // Assuming the module exports are globally available
//             resolve(window);
//         };
//         script.onerror = reject;
//         document.head.appendChild(script);
//     });
// }


// const {
//     navBarLinksFadeIn,
//     xPercentOpacityReturn,
//     yPercentOpacityReturn,
//     animationColumnsLeave
// } = await importModule(`${CONFIG.path}commonAnimations.js`)

const {
    navBarLinksFadeIn,
    xPercentOpacityReturn,
    yPercentOpacityReturn,
    animationColumnsLeave
} = await import(`${CONFIG.path}${CONFIG.path}commonAnimations.js`)

export const locationsIntroInit = (container) => {
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


export const locationsIntroAnimation = (container) => {
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

