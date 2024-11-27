import{CONFIG as t}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v14/src/js/config.js";var a=await import("".concat(t.path).concat(t.path,"commonAnimations.js")),e=a.navBarLinksFadeIn,r=a.xPercentOpacityReturn,n=a.yPercentOpacityReturn,o=a.animationColumnsLeave,c=function(t){var a=document.querySelectorAll(".nav-link"),e=document.querySelector(".link-block > img"),r=document.querySelector("div.navbar.w-nav"),n=t.querySelector(".location_text_wrapper.is-canada"),o=t.querySelector(".location_text_wrapper.is-austalia"),c=t.querySelector(".location_text_wrapper.is-uk"),i=t.querySelector(".location-img-wrapper.is-canada"),p=t.querySelector(".location-img-wrapper.is-australia"),l=t.querySelector(".location-img-wrapper.is-uk"),d=t.querySelector(".location_text_wrapper.is-canada > .locations_circles_wrapper"),u=t.querySelector(".location_text_wrapper.is-austalia > .locations_circles_wrapper"),_=t.querySelector(".location_text_wrapper.is-uk > .locations_circles_wrapper"),w=t.querySelector(".location_text_wrapper.is-canada > .locations_h2"),f=t.querySelector(".location_text_wrapper.is-austalia > .locations_h2"),x=t.querySelector(".location_text_wrapper.is-uk > .locations_h2"),g=t.querySelector(".location_text_wrapper.is-canada > .locations_addresses_wrapper"),y=t.querySelector(".location_text_wrapper.is-austalia > .locations_addresses_wrapper"),v=t.querySelector(".location_text_wrapper.is-uk > .locations_addresses_wrapper");gsap.set([a,e,n,o,c,i,p,l,d,u,_,w,f,x,g,y,v],{opacity:0}),gsap.set([r],{zIndex:0}),gsap.set([n,p,c],{xPercent:-150}),gsap.set([i,o,l],{xPercent:100}),gsap.set([d,u,_],{xPercent:150}),gsap.set([w,f,x,g,y,v],{yPercent:100,xPercent:-45}),gsap.set([g,y,v],{yPercent:100,xPercent:-15}),s(n,i),s(o,p),s(c,l)},i=function(t){gsap.timeline().add(gsap.set(".intro-overlay",{autoAlpha:0}),0).add((function(){return o()}),0).add(gsap.set(".transition",{autoAlpha:0}),1.25).add((function(){return e()}),0).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.75).add((function(){return r(".location_text_wrapper.is-canada")}),1.75).add((function(){return r(".location-img-wrapper.is-canada")}),1.75).add((function(){return r(".location-img-wrapper.is-australia")}),1.75).add((function(){return r(".location_text_wrapper.is-austalia")}),1.75).add((function(){return r(".location_text_wrapper.is-uk")}),1.75).add((function(){return r(".location-img-wrapper.is-uk")}),1.75).add((function(){return r(".location_text_wrapper.is-canada > .locations_circles_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-canada > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-canada > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-canada > .locations_addresses_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-canada > .locations_addresses_wrapper")}),2.5).add((function(){return r(".location_text_wrapper.is-austalia > .locations_circles_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-austalia > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-austalia > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")}),2.5).add((function(){return r(".location_text_wrapper.is-uk > .locations_circles_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-uk > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-uk > .locations_h2")}),2.2).add((function(){return r(".location_text_wrapper.is-uk > .locations_addresses_wrapper")}),2.5).add((function(){return n(".location_text_wrapper.is-uk > .locations_addresses_wrapper")}),2.5)};function s(t,a){var e=window.getComputedStyle(a),r=parseInt(e.borderRadius)||0,n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("border-svg");var o=document.createElementNS("http://www.w3.org/2000/svg","path");function c(){var e=a.offsetWidth,n=a.offsetHeight,c="\n        M ".concat(r," ").concat(1,"\n        H ").concat(e-r,"\n        Q ").concat(e-1," ").concat(1,", ").concat(e-1," ").concat(r,"\n        V ").concat(n-r,"\n        Q ").concat(e-1," ").concat(n-1,", ").concat(e-r," ").concat(n-1,"\n        H ").concat(r,"\n        Q ").concat(1," ").concat(n-1,", ").concat(1," ").concat(n-r,"\n        V ").concat(r,"\n        Q ").concat(1," ").concat(1,", ").concat(r," ").concat(1,"\n      ");o.setAttribute("d",c);var i=o.getTotalLength();o.style.strokeDasharray=i,o.style.strokeDashoffset=i;var s=gsap.timeline({paused:!0});s.to(o,{strokeDashoffset:0,duration:.8,ease:"none"}),t.addEventListener("mouseenter",(function(){return s.play()})),t.addEventListener("mouseleave",(function(){return s.reverse()}))}o.classList.add("border-path"),n.appendChild(o),a.style.position="relative",a.appendChild(n),c(),window.addEventListener("resize",c)}export{i as locationsIntroAnimation,c as locationsIntroInit};
