
export const introLogoFadeIn = () => {
    const introLogo = document.querySelector('.intro-logo__image')
    gsap.to(introLogo, {
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
    })
}

export const navBarLinksFadeIn = () => {
    const navBarLinks = document.querySelectorAll('.nav-menu__link')
    const navBarLogo = document.querySelector('.navbar__link-block > img')

    gsap.to([navBarLogo, ...navBarLinks], {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.inout',
    })
}

export const xPercentOpacityReturn = (elem) => {
    gsap.to(elem, {
        xPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

export const yPercentOpacityReturn = (elem) => {
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

export const xPercentOpacityReturnStaggered = (elem) => {
    gsap.to(elem, {
        xPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: 0.1,
    })
}

export const yPercentOpacityReturnStaggered = (elem) => {
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: 0.1,
    })
}

export const unMaskToLeft = (elem) => {
    gsap.to(elem, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        xPercent: 0,
        duration: 1.5,
        ease: 'power3.inout',
    })
}

export const unMaskToRight = (elem) => {
    gsap.to(elem, {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        xPercent: 0,
        duration: 1.5,
        ease: 'power3.inout',
    })
}

export const scaleTo1 = (elem, staggered = false) => {
    gsap.to(elem, {
        scale: 1.0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
        stagger: staggered ? 0.1 : 0,
        clearProps: true,
    })
}

export const fadeIn = (elem) => {
    gsap.to(elem, {
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inout',
    })
}

export const introOverlayFadeIn = () => {
    return new Promise((resolve) => {
        // gsap.set('.transition__column', {scaleX: 0})
        gsap.set('.intro-logo__image', { opacity: 0 })
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
tlColumnsAnimation.to('.transition__column', {
    duration: 1.0,
    scaleX: 2,
    stagger: 0.025,
    delay: 0.5,
});

export const animationColumnsEnter = () => {
    // console.log('animationColumnsEnter')
    return new Promise((resolve) => {
        tlColumnsAnimation.play().then(resolve);
    });
};

export const animationColumnsLeave = () => {
    return new Promise((resolve) => {
        tlColumnsAnimation.reverse().then(resolve);
    });
}

export const transitionAnimationReset = () => {
    // console.log('transitionAnimationReset')
    gsap.set('.intro-overlay', { autoAlpha: 0 })
    gsap.set('.transition', { autoAlpha: 0 })
    gsap.set('.transition__column', { scaleX: 0 })
    animationColumnsLeave()
}
