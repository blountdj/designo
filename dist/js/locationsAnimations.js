import{CONFIG as a}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v23/src/js/config.js";const{navBarLinksFadeIn:e,xPercentOpacityReturn:t,yPercentOpacityReturn:r,animationColumnsLeave:o}=await import(`${a.path}${a.pathJs}commonAnimations.js`),s=a=>{const e=document.querySelectorAll(".nav-link"),t=document.querySelector(".link-block > img"),r=document.querySelector("div.navbar.w-nav"),o=a.querySelector(".location_text_wrapper.is-canada"),s=a.querySelector(".location_text_wrapper.is-austalia"),i=a.querySelector(".location_text_wrapper.is-uk"),p=a.querySelector(".location-img-wrapper.is-canada"),c=a.querySelector(".location-img-wrapper.is-australia"),l=a.querySelector(".location-img-wrapper.is-uk"),d=a.querySelector(".location_text_wrapper.is-canada > .locations_circles_wrapper"),_=a.querySelector(".location_text_wrapper.is-austalia > .locations_circles_wrapper"),w=a.querySelector(".location_text_wrapper.is-uk > .locations_circles_wrapper"),u=a.querySelector(".location_text_wrapper.is-canada > .locations_h2"),x=a.querySelector(".location_text_wrapper.is-austalia > .locations_h2"),g=a.querySelector(".location_text_wrapper.is-uk > .locations_h2"),y=a.querySelector(".location_text_wrapper.is-canada > .locations_addresses_wrapper"),h=a.querySelector(".location_text_wrapper.is-austalia > .locations_addresses_wrapper"),m=a.querySelector(".location_text_wrapper.is-uk > .locations_addresses_wrapper");gsap.set([e,t,o,s,i,p,c,l,d,_,w,u,x,g,y,h,m],{opacity:0}),gsap.set([r],{zIndex:0}),gsap.set([o,c,i],{xPercent:-150}),gsap.set([p,s,l],{xPercent:100}),gsap.set([d,_,w],{xPercent:150}),gsap.set([u,x,g,y,h,m],{yPercent:100,xPercent:-45}),gsap.set([y,h,m],{yPercent:100,xPercent:-15}),n(o,p),n(s,c),n(i,l)},i=a=>{gsap.timeline().add(gsap.set(".intro-overlay",{autoAlpha:0}),0).add((()=>o()),0).add(gsap.set(".transition",{autoAlpha:0}),1.25).add((()=>e()),0).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.75).add((()=>t(".location_text_wrapper.is-canada")),1.75).add((()=>t(".location-img-wrapper.is-canada")),1.75).add((()=>t(".location-img-wrapper.is-australia")),1.75).add((()=>t(".location_text_wrapper.is-austalia")),1.75).add((()=>t(".location_text_wrapper.is-uk")),1.75).add((()=>t(".location-img-wrapper.is-uk")),1.75).add((()=>t(".location_text_wrapper.is-canada > .locations_circles_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-canada > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-canada > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-canada > .locations_addresses_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-canada > .locations_addresses_wrapper")),2.5).add((()=>t(".location_text_wrapper.is-austalia > .locations_circles_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-austalia > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-austalia > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")),2.5).add((()=>t(".location_text_wrapper.is-uk > .locations_circles_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-uk > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-uk > .locations_h2")),2.2).add((()=>t(".location_text_wrapper.is-uk > .locations_addresses_wrapper")),2.5).add((()=>r(".location_text_wrapper.is-uk > .locations_addresses_wrapper")),2.5)};function n(a,e){const t=window.getComputedStyle(e),r=parseInt(t.borderRadius)||0,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add("border-svg");const s=document.createElementNS("http://www.w3.org/2000/svg","path");function i(){const t=e.offsetWidth,o=e.offsetHeight,i=`\n        M ${r} 1\n        H ${t-r}\n        Q ${t-1} 1, ${t-1} ${r}\n        V ${o-r}\n        Q ${t-1} ${o-1}, ${t-r} ${o-1}\n        H ${r}\n        Q 1 ${o-1}, 1 ${o-r}\n        V ${r}\n        Q 1 1, ${r} 1\n      `;s.setAttribute("d",i);const n=s.getTotalLength();s.style.strokeDasharray=n,s.style.strokeDashoffset=n;const p=gsap.timeline({paused:!0});p.to(s,{strokeDashoffset:0,duration:.8,ease:"none"}),a.addEventListener("mouseenter",(()=>p.play())),a.addEventListener("mouseleave",(()=>p.reverse()))}s.classList.add("border-path"),o.appendChild(s),e.style.position="relative",e.appendChild(o),i(),window.addEventListener("resize",i)}export{i as locationsIntroAnimation,s as locationsIntroInit};
