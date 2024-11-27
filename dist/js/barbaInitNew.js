import{CONFIG as e}from"https://cdn.jsdelivr.net/gh/blountdj/designo@v23/src/js/config.js";const t=e=>{new Promise((e=>{const t=()=>{window.Webflow?e(window.Webflow):setTimeout(t,100)};t()})).then((e=>{e.destroy&&e.destroy(),e.push((function(){const e=document.getElementById("contact-name"),t=document.getElementById("contact-email"),s=document.getElementById("contact-phone"),c=document.getElementById("contact-message"),i=e.querySelector("input"),d=e.querySelector(".input-error-wrapper"),l=d.querySelector(".error-message-text"),p=t.querySelector("input"),u=t.querySelector(".input-error-wrapper"),g=u.querySelector(".error-message-text"),m=s.querySelector("input"),y=s.querySelector(".input-error-wrapper"),h=y.querySelector(".error-message-text"),w=c.querySelector("textarea"),_=c.querySelector(".input-error-wrapper"),x=_.querySelector(".error-message-text");$('[wr-type="submit"]').click((function(){if(function(){let e=[];return e.push(function(e,t,a){return!![()=>n(e,t,a,"Please enter your name"),()=>o(e,t,a,2,"Minimum 2 characters")].some(((e,t)=>e()))}(i,d,l)),e.push(function(e,t,o){return!![()=>n(e,t,o,"Please enter your email"),()=>function(e,t,o,n){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.value)?(r(t),!1):(a(t,o,n),!0)}(e,t,o,"Please enter valid email")].some(((e,t)=>e()))}(p,u,g)),e.push(function(e,t,o){return!![()=>n(e,t,o,"Please enter your phone number"),()=>function(e,t,o,n,s){return!/^[0-9]+$/.test(e.value)||e.value.length<n?(a(t,o,s),!0):(r(t),!1)}(e,t,o,10,"Please enter valid phone number")].some(((e,t)=>e()))}(m,y,h)),e.push(function(e,t,a){return!![()=>n(e,t,a,"Please enter your message"),()=>o(e,t,a,10,"Minimum 10 characters")].some(((e,t)=>e()))}(w,_,x)),!e.includes(!0)||(alert("Please check contact form errors"),!1)}()){document.getElementById("success-name-text").innerHTML=i.value,$(this).parents("form").submit()}}))})),e.ready&&e.ready()}))};function a(e,t,a){e.classList.add("is-error"),t.textContent=a}function r(e){e.classList.remove("is-error")}function o(e,t,o,n,s){return e.value.length<n?(a(t,o,s),!0):(r(t),!1)}function n(e,t,o,n){return e.value?(r(t),!1):(a(t,o,n),!0)}const s=e=>{const t="once"===e?0:2.25;gsap.timeline().add((()=>C()),2.25-t).add((()=>f(".home_section_hero")),2.5-t).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),2.95-t).add((()=>x()),3-t).add((()=>b(".home-hero-bg-circle")),3.5-t).add((()=>S(".hero-image-wrapper")),3.75-t).add((()=>b(".home-h1")),4-t).add((()=>b(".home-hero-paragraph")),4.25-t).add((()=>b(".btn-wrapper")),4.5-t).add((()=>b("div.home-grid-card-large")),4.7-t).add((()=>b("div.home-grid-card-small.is-appdesign")),5-t).add((()=>b("div.home-grid-card-small.is-graphicdesign")),4.85-t)},c=()=>{const e=.6;gsap.timeline().add((()=>C()),0).add((()=>f(".about_section_hero")),0).add((()=>x()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),.6).add((()=>b(".about-hero-bg-circle")),1.35).add((()=>b(".about-h1")),1.1+e).add((()=>b(".about-hero-text")),1.85).add((()=>k(".about-hero-mask1")),2.35).add((()=>A(".about-worldclass_section_hero")),2.5).add((()=>S(".about_worldclass_bg_wrapper")),2.7).add((()=>b(".about_worldclass_h2")),2.9).add((()=>b(".about-worldclass-text")),3.1).add((()=>P(".about-worldclass-mask")),3.45)},i=e=>{gsap.timeline().add(gsap.set(".intro-overlay",{autoAlpha:0}),0).add((()=>z()),0).add(gsap.set(".transition",{autoAlpha:0}),1.25).add((()=>x()),0).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.75).add((()=>b(".location_text_wrapper.is-canada")),1.75).add((()=>b(".location-img-wrapper.is-canada")),1.75).add((()=>b(".location-img-wrapper.is-australia")),1.75).add((()=>b(".location_text_wrapper.is-austalia")),1.75).add((()=>b(".location_text_wrapper.is-uk")),1.75).add((()=>b(".location-img-wrapper.is-uk")),1.75).add((()=>b(".location_text_wrapper.is-canada > .locations_circles_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-canada > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-canada > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-canada > .locations_addresses_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-canada > .locations_addresses_wrapper")),2.5).add((()=>b(".location_text_wrapper.is-austalia > .locations_circles_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-austalia > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-austalia > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-austalia > .locations_addresses_wrapper")),2.5).add((()=>b(".location_text_wrapper.is-uk > .locations_circles_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-uk > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-uk > .locations_h2")),2.2).add((()=>b(".location_text_wrapper.is-uk > .locations_addresses_wrapper")),2.5).add((()=>S(".location_text_wrapper.is-uk > .locations_addresses_wrapper")),2.5)};function d(e,t){const a=window.getComputedStyle(t),r=parseInt(a.borderRadius)||0,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.classList.add("border-svg");const n=document.createElementNS("http://www.w3.org/2000/svg","path");function s(){const a=t.offsetWidth,o=t.offsetHeight,s=`\n        M ${r} 1\n        H ${a-r}\n        Q ${a-1} 1, ${a-1} ${r}\n        V ${o-r}\n        Q ${a-1} ${o-1}, ${a-r} ${o-1}\n        H ${r}\n        Q 1 ${o-1}, 1 ${o-r}\n        V ${r}\n        Q 1 1, ${r} 1\n      `;n.setAttribute("d",s);const c=n.getTotalLength();n.style.strokeDasharray=c,n.style.strokeDashoffset=c;const i=gsap.timeline({paused:!0});i.to(n,{strokeDashoffset:0,duration:.8,ease:"none"}),e.addEventListener("mouseenter",(()=>i.play())),e.addEventListener("mouseleave",(()=>i.reverse()))}n.classList.add("border-path"),o.appendChild(n),t.style.position="relative",t.appendChild(o),s(),window.addEventListener("resize",s)}const l=()=>{gsap.timeline().add((()=>C()),0).add((()=>f(".contact_section_hero")),0).add((()=>x()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((()=>S(".contact-h1")),1.1).add((()=>b(".contact-h1")),1.1).add((()=>S(".contact-text")),1.3).add((()=>b(".contact-text")),1.3).add((()=>b(".contact-hero-circle")),2).add((()=>v(["#contact-form > .input-wrapper","#contact-form > .btn-wrapper"])),1.5).add((()=>q(["#contact-form > .input-wrapper","#contact-form > .btn-wrapper"])),1.5).add((()=>v(".about-attributes-card")),2.2)},p=()=>{gsap.timeline().add((()=>C()),0).add((()=>f(".graphicdesign-header")),0).add((()=>x()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((()=>S(".home-talk-h2")),1.1).add((()=>b(".home-talk-h2")),1.1).add((()=>S(".home-talk-text")),1.3).add((()=>b(".home-talk-text")),1.3).add((()=>f(".bg-wrapper")),1.6).add((()=>v(".webdesign_main_card")),1.5).add((()=>f("img.image-6",!0)),1.75)},u=()=>{gsap.timeline().add((()=>C()),0).add((()=>f(".webdesign-header")),0).add((()=>x()),.6).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1.1).add((()=>S(".webdesign-hero-h2")),1.1).add((()=>b(".webdesign-hero-h2")),1.1).add((()=>S(".home-talk-text")),1.3).add((()=>b(".home-talk-text")),1.3).add((()=>f(".bg-wrapper",!1)),1.6).add((()=>v(".webdesign_main_card")),1.5).add((()=>f("img.image-6",!0)),1.75)},g=()=>{gsap.timeline().add((()=>C()),0).add((()=>f(".appdesign-header")),0).add((()=>x()),.5).add(gsap.set("div.navbar.w-nav",{opacity:1,zIndex:1e3}),1).add((()=>S(".home-talk-h2")),1).add((()=>b(".home-talk-h2")),1).add((()=>S(".home-talk-text")),1.2).add((()=>b(".home-talk-text")),1.2).add((()=>f(".bg-wrapper",!1)),1.5).add((()=>v(".webdesign_main_card")),1.4).add((()=>f("img.image-6",!0)),1.65)};function m(e){e.forEach((e=>{const t=document.body.getElementsByTagName("script");for(let a=t.length-1;a>=0;a--)t[a].src&&t[a].src.includes(e)&&t[a].parentNode.removeChild(t[a])}))}function y(e){e.forEach((e=>{const t=document.createElement("script");t.src=e,t.type="module",document.body.appendChild(t)}))}function h(e){e.forEach((e=>{const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.body.appendChild(t)}))}function w(e){e.forEach((e=>{const t=document.body.getElementsByTagName("link");for(let a=t.length-1;a>=0;a--)t[a].href&&t[a].href.includes(e)&&t[a].parentNode.removeChild(t[a])}))}const _=()=>{const e=document.querySelector(".intro-logo");gsap.to(e,{opacity:1,duration:2.5,ease:"power2.out"})},x=()=>{const e=document.querySelectorAll(".nav-link"),t=document.querySelector(".link-block > img");gsap.to([t,...e],{opacity:1,duration:.5,stagger:.1,ease:"power3.inout"})},b=e=>{gsap.to(e,{xPercent:0,opacity:1,duration:.6,ease:"power3.inout"})},S=e=>{gsap.to(e,{yPercent:0,opacity:1,duration:.6,ease:"power3.inout"})},q=e=>{gsap.to(e,{xPercent:0,opacity:1,duration:.6,ease:"power3.inout",stagger:.1})},v=e=>{gsap.to(e,{yPercent:0,opacity:1,duration:.6,ease:"power3.inout",stagger:.1})},k=e=>{gsap.to(e,{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",xPercent:0,duration:1.5,ease:"power3.inout"})},P=e=>{gsap.to(e,{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",xPercent:0,duration:1.5,ease:"power3.inout"})},f=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];gsap.to(e,{scale:1,opacity:1,duration:.6,ease:"power3.inout",stagger:t?.1:0,clearProps:!0})},A=e=>{gsap.to(e,{opacity:1,duration:.6,ease:"power3.inout"})},E=gsap.timeline({paused:!0,defaults:{ease:"power4inOut"}});E.to(".transition_column",{duration:1,scaleX:2,stagger:.025,delay:.5});const I=()=>new Promise((e=>{E.play().then(e)})),z=()=>new Promise((e=>{E.reverse().then(e)})),C=()=>{gsap.set(".intro-overlay",{autoAlpha:0}),gsap.set(".transition",{autoAlpha:0}),gsap.set(".transition_column",{scaleX:0}),z()},L=`${e.path}${e.pathJs}homeAnimations.js`,j=`${e.path}${e.pathJs}aboutAnimations.js`,B=`${e.path}${e.pathJs}locationsAnimations.js`,N=`${e.path}${e.pathJs}contactAnimations.js`,T=`${e.path}${e.pathJs}designAnimations.js`,J=`${e.path}${e.pathCss}design${e.cssPostFix}.css`,D=`${e.path}${e.pathCss}locations${e.cssPostFix}.css`;barba.hooks.beforeEnter((async function(e){var t;"home"===e.next.namespace?(e=>{const t=document.querySelector(".intro-logo"),a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),o=document.querySelector("div.navbar.w-nav"),n=e.querySelector(".home_section_hero"),s=e.querySelector(".hero-image-wrapper"),c=e.querySelector(".home-h1"),i=e.querySelector(".home-hero-paragraph"),d=e.querySelector(".btn-wrapper"),l=e.querySelector(".home-hero-bg-circle"),p=e.querySelector("div.home-grid-card-large"),u=e.querySelectorAll("div.home-grid-card-small");gsap.set([t,s,c,i,d,a,r,l,p,u],{opacity:0}),gsap.set([o],{zIndex:0}),gsap.set([l],{xPercent:-150}),gsap.set([p],{xPercent:-100}),gsap.set([u],{xPercent:100}),gsap.set([s],{yPercent:75}),gsap.set([c,i,d],{xPercent:-100}),gsap.set([n],{scale:3.5})})(e.next.container):"about"===e.next.namespace?(e=>{const t=document.querySelectorAll(".nav-link"),a=document.querySelector(".link-block > img"),r=document.querySelector("div.navbar.w-nav"),o=e.querySelector(".about_section_hero"),n=e.querySelector(".about-h1"),s=e.querySelector(".about-hero-text"),c=e.querySelector(".about-hero-bg-circle"),i=e.querySelector(".about-worldclass_section_hero"),d=e.querySelector(".about_worldclass_h2"),l=e.querySelector(".about-worldclass-text"),p=e.querySelector(".about_worldclass_bg_wrapper");gsap.set(o,{scale:3.5}),gsap.set([n,s,c,t,a,d,l,p,i],{opacity:0}),gsap.set([r],{zIndex:0}),gsap.set([c],{xPercent:150}),gsap.set([n,s],{xPercent:-100}),gsap.set([p],{yPercent:-150}),gsap.set([d,l],{xPercent:100})})(e.next.container):"locations"===e.next.namespace?(e=>{const t=document.querySelectorAll(".nav-link"),a=document.querySelector(".link-block > img"),r=document.querySelector("div.navbar.w-nav"),o=e.querySelector(".location_text_wrapper.is-canada"),n=e.querySelector(".location_text_wrapper.is-austalia"),s=e.querySelector(".location_text_wrapper.is-uk"),c=e.querySelector(".location-img-wrapper.is-canada"),i=e.querySelector(".location-img-wrapper.is-australia"),l=e.querySelector(".location-img-wrapper.is-uk"),p=e.querySelector(".location_text_wrapper.is-canada > .locations_circles_wrapper"),u=e.querySelector(".location_text_wrapper.is-austalia > .locations_circles_wrapper"),g=e.querySelector(".location_text_wrapper.is-uk > .locations_circles_wrapper"),m=e.querySelector(".location_text_wrapper.is-canada > .locations_h2"),y=e.querySelector(".location_text_wrapper.is-austalia > .locations_h2"),h=e.querySelector(".location_text_wrapper.is-uk > .locations_h2"),w=e.querySelector(".location_text_wrapper.is-canada > .locations_addresses_wrapper"),_=e.querySelector(".location_text_wrapper.is-austalia > .locations_addresses_wrapper"),x=e.querySelector(".location_text_wrapper.is-uk > .locations_addresses_wrapper");gsap.set([t,a,o,n,s,c,i,l,p,u,g,m,y,h,w,_,x],{opacity:0}),gsap.set([r],{zIndex:0}),gsap.set([o,i,s],{xPercent:-150}),gsap.set([c,n,l],{xPercent:100}),gsap.set([p,u,g],{xPercent:150}),gsap.set([m,y,h,w,_,x],{yPercent:100,xPercent:-45}),gsap.set([w,_,x],{yPercent:100,xPercent:-15}),d(o,c),d(n,i),d(s,l)})(e.next.container):"contact"===e.next.namespace?(()=>{const e=document.querySelectorAll(".nav-link"),t=document.querySelector(".link-block > img"),a=document.querySelector("div.navbar.w-nav"),r=document.querySelector(".contact_section_hero"),o=document.querySelector(".contact-h1"),n=document.querySelector(".contact-text"),s=document.querySelector(".contact-hero-circle"),c=document.querySelectorAll("#contact-form > .input-wrapper"),i=document.querySelector("#contact-form > .btn-wrapper"),d=document.querySelectorAll(".about-attributes-card");gsap.set([r],{scale:3.5}),gsap.set([o,n,s,e,t,c,i,d],{opacity:0}),gsap.set([a],{zIndex:0}),gsap.set([s],{xPercent:150}),gsap.set([o],{yPercent:100,xPercent:-45}),gsap.set([n],{yPercent:100,xPercent:-15}),gsap.set([c,i],{yPercent:100,xPercent:15}),gsap.set([d],{yPercent:75})})(e.next.container):"graphic-design"===e.next.namespace?await(t=e.next.container,new Promise((e=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),o=document.querySelector("div.navbar.w-nav"),n=t.querySelector(".graphicdesign-header"),s=t.querySelector(".bg-wrapper"),c=t.querySelector(".home-talk-h2"),i=t.querySelector(".home-talk-text"),d=t.querySelectorAll(".webdesign_main_card"),l=t.querySelectorAll("img.image-6");gsap.set([n,l],{scale:3.5}),gsap.set([c,i,a,r,d,s,l],{opacity:0}),gsap.set([o],{zIndex:0}),gsap.set([s],{scale:3.5}),gsap.set([c],{yPercent:100,xPercent:-45}),gsap.set([i],{yPercent:100,xPercent:-15}),gsap.set([d],{yPercent:75}),e()}))):"web-design"===e.next.namespace?await(e=>new Promise((t=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),o=document.querySelector("div.navbar.w-nav"),n=e.querySelector(".webdesign-header"),s=e.querySelector(".bg-wrapper"),c=e.querySelector(".webdesign-hero-h2"),i=e.querySelector(".home-talk-text"),d=e.querySelectorAll(".webdesign_main_card"),l=e.querySelectorAll("img.image-6");gsap.set([n,l,s],{scale:3.5}),gsap.set([c,i,a,r,d,s,l],{opacity:0}),gsap.set([o],{zIndex:0}),gsap.set([s],{scale:3.5}),gsap.set([c],{yPercent:100,xPercent:-45}),gsap.set([i],{yPercent:100,xPercent:-15}),gsap.set([d],{yPercent:75}),t()})))(e.next.container):"app-design"===e.next.namespace&&await(e=>new Promise((t=>{const a=document.querySelectorAll(".nav-link"),r=document.querySelector(".link-block > img"),o=document.querySelector("div.navbar.w-nav"),n=e.querySelector(".appdesign-header"),s=e.querySelector(".bg-wrapper"),c=e.querySelector(".home-talk-h2"),i=e.querySelector(".home-talk-text"),d=e.querySelectorAll(".webdesign_main_card"),l=e.querySelectorAll("img.image-6");gsap.set([n,l,s],{scale:3.5}),gsap.set([c,i,a,r,d,s,l],{opacity:0}),gsap.set([o],{zIndex:0}),gsap.set([s],{scale:3.5}),gsap.set([c],{yPercent:100,xPercent:-45}),gsap.set([i],{yPercent:100,xPercent:-15}),gsap.set([d],{yPercent:75}),t()})))(e.next.container),"locations"!==e.next.namespace&&(e=>{const t=e.getElementById("uk-btn"),a=e.getElementById("canada-btn"),r=e.getElementById("australia-btn");function o(e){const t=`https://designo-project.webflow.io/locations#${e}`;window.location.href=t}t.addEventListener("click",(()=>o("uk-section"))),a.addEventListener("click",(()=>o("canada-section"))),r.addEventListener("click",(()=>o("australia-section")))})(e.next.container)})),barba.hooks.once((async function(e){"home"===e.next.namespace?(await new Promise((e=>{gsap.timeline({onComplete:e}).add((()=>_())).add((()=>I()),1)})),s("once")):"about"===e.next.namespace?c():"locations"===e.next.namespace?i():"contact"===e.next.namespace?l():"graphic-design"===e.next.namespace?p():"web-design"===e.next.namespace?u():"app-design"===e.next.namespace&&g()})),barba.hooks.afterEnter((function(e){const a=e.current.namespace,r=e.next.namespace;"home"===r?y([L]):m([L]),"locations"===r?(y([B]),h([D])):(m([B]),w([D])),"about"===r?y([j]):m([j]),"contact"===r?(y([N]),t(e.next.container)):m([N]),r.includes("design")&&!a.includes("design")?(y([T]),h([J])):a.includes("design")&&!r.includes("design")&&(m([T]),w([J]))})),barba.init({debug:e.barbaDebug,sync:!1,views:[],transitions:[{name:"page-fade-transition",once(){},async leave(e){await new Promise((e=>{gsap.set(".intro-logo",{opacity:0}),gsap.to([".intro-overlay",".transition"],{autoAlpha:1,duration:.6,ease:"power3.inout",onComplete:e})})),await I(),window.scrollTo(0,0)},async enter(e){"home"===e.next.namespace?s("enter"):"about"===e.next.namespace?c():"locations"===e.next.namespace?i():"contact"===e.next.namespace?l():"web-design"===e.next.namespace?u():"app-design"===e.next.namespace?g():"graphic-design"===e.next.namespace&&p()}}]});