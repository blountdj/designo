import{CONFIG as e}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v20/src/js/config.js";var t=await import("".concat(e.path).concat(e.pathJs,"commonAnimations.js")),n=t.navBarLinksFadeIn,r=t.xPercentOpacityReturn,a=t.yPercentOpacityReturn,c=t.scaleTo1,o=t.yPercentOpacityReturnStaggered,i=t.transitionAnimationReset,d=function(e){return new Promise((function(t){var n=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),a=document.querySelector("div.navbar.w-nav"),c=e.querySelector(".appdesign-header"),o=e.querySelector(".bg-wrapper"),i=e.querySelector(".home-talk-h2"),d=e.querySelector(".home-talk-text"),u=e.querySelectorAll(".webdesign_main_card"),s=e.querySelectorAll("img.image-6");gsap.set([c,s,o],{scale:3.5}),gsap.set([i,d,n,r,u,o,s],{opacity:0}),gsap.set([a],{zIndex:0}),gsap.set([o],{scale:3.5}),gsap.set([i],{yPercent:100,xPercent:-45}),gsap.set([d],{yPercent:100,xPercent:-15}),gsap.set([u],{yPercent:75}),t()}))},u=function(){gsap.timeline().add((function(){return i()}),0).add((function(){return c(".appdesign-header")}),0).add((function(){return n()}),.5).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1).add((function(){return a(".home-talk-h2")}),1).add((function(){return r(".home-talk-h2")}),1).add((function(){return a(".home-talk-text")}),1.2).add((function(){return r(".home-talk-text")}),1.2).add((function(){return c(".bg-wrapper",!1)}),1.5).add((function(){return o(".webdesign_main_card")}),1.4).add((function(){return c("img.image-6",!0)}),1.65)};export{u as appDesignIntroAnimation,d as appDesignIntroInit};
