import{CONFIG as e}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v14/config.js";var t=await import("".concat(e.path,"commonAnimations.js")),n=t.navBarLinksFadeIn,r=t.xPercentOpacityReturn,a=t.yPercentOpacityReturn,c=t.scaleTo1,i=t.yPercentOpacityReturnStaggered,o=t.transitionAnimationReset,d=function(e){return new Promise((function(t){var n=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),a=document.querySelector("div.navbar.w-nav"),c=e.querySelector(".graphicdesign-header"),i=e.querySelector(".bg-wrapper"),o=e.querySelector(".home-talk-h2"),d=e.querySelector(".home-talk-text"),u=e.querySelectorAll(".webdesign_main_card"),s=e.querySelectorAll("img.image-6");gsap.set([c,s],{scale:3.5}),gsap.set([o,d,n,r,u,i,s],{opacity:0}),gsap.set([a],{zIndex:0}),gsap.set([i],{scale:3.5}),gsap.set([o],{yPercent:100,xPercent:-45}),gsap.set([d],{yPercent:100,xPercent:-15}),gsap.set([u],{yPercent:75}),t()}))},u=function(){gsap.timeline().add((function(){return o()}),0).add((function(){return c(".graphicdesign-header")}),0).add((function(){return n()}),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((function(){return a(".home-talk-h2")}),1.1).add((function(){return r(".home-talk-h2")}),1.1).add((function(){return a(".home-talk-text")}),1.3).add((function(){return r(".home-talk-text")}),1.3).add((function(){return c(".bg-wrapper")}),1.6).add((function(){return i(".webdesign_main_card")}),1.5).add((function(){return c("img.image-6",!0)}),1.75)};export{u as graphicDesignIntroAnimation,d as graphicDesignIntroInit};
