import{CONFIG as e}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v23/src/js/config.js";const{navBarLinksFadeIn:t,xPercentOpacityReturn:a,yPercentOpacityReturn:r,scaleTo1:n,yPercentOpacityReturnStaggered:d,transitionAnimationReset:c}=await import(`${e.path}${e.pathJs}commonAnimations.js`),s=e=>new Promise((t=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),n=document.querySelector("div.navbar.w-nav"),d=e.querySelector(".graphicdesign-header"),c=e.querySelector(".bg-wrapper"),s=e.querySelector(".home-talk-h2"),i=e.querySelector(".home-talk-text"),o=e.querySelectorAll(".webdesign_main_card"),l=e.querySelectorAll("img.image-6");gsap.set([d,l],{scale:3.5}),gsap.set([s,i,a,r,o,c,l],{opacity:0}),gsap.set([n],{zIndex:0}),gsap.set([c],{scale:3.5}),gsap.set([s],{yPercent:100,xPercent:-45}),gsap.set([i],{yPercent:100,xPercent:-15}),gsap.set([o],{yPercent:75}),t()})),i=()=>{gsap.timeline().add((()=>c()),0).add((()=>n(".graphicdesign-header")),0).add((()=>t()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((()=>r(".home-talk-h2")),1.1).add((()=>a(".home-talk-h2")),1.1).add((()=>r(".home-talk-text")),1.3).add((()=>a(".home-talk-text")),1.3).add((()=>n(".bg-wrapper")),1.6).add((()=>d(".webdesign_main_card")),1.5).add((()=>n("img.image-6",!0)),1.75)};export{i as graphicDesignIntroAnimation,s as graphicDesignIntroInit};
