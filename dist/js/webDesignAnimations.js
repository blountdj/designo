import{CONFIG as e}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v23/src/js/config.js";const{navBarLinksFadeIn:t,xPercentOpacityReturn:a,yPercentOpacityReturn:r,scaleTo1:n,yPercentOpacityReturnStaggered:d,transitionAnimationReset:s}=await import(`${e.path}${e.pathJs}commonAnimations.js`),i=e=>new Promise((t=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),n=document.querySelector("div.navbar.w-nav"),d=e.querySelector(".webdesign-header"),s=e.querySelector(".bg-wrapper"),i=e.querySelector(".webdesign-hero-h2"),c=e.querySelector(".home-talk-text"),o=e.querySelectorAll(".webdesign_main_card"),g=e.querySelectorAll("img.image-6");gsap.set([d,g,s],{scale:3.5}),gsap.set([i,c,a,r,o,s,g],{opacity:0}),gsap.set([n],{zIndex:0}),gsap.set([s],{scale:3.5}),gsap.set([i],{yPercent:100,xPercent:-45}),gsap.set([c],{yPercent:100,xPercent:-15}),gsap.set([o],{yPercent:75}),t()})),c=()=>{gsap.timeline().add((()=>s()),0).add((()=>n(".webdesign-header")),0).add((()=>t()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((()=>r(".webdesign-hero-h2")),1.1).add((()=>a(".webdesign-hero-h2")),1.1).add((()=>r(".home-talk-text")),1.3).add((()=>a(".home-talk-text")),1.3).add((()=>n(".bg-wrapper",!1)),1.6).add((()=>d(".webdesign_main_card")),1.5).add((()=>n("img.image-6",!0)),1.75)};export{c as webDesignIntroAnimation,i as webDesignIntroInit};