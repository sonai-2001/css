
gsap.registerPlugin(ScrollTrigger);
 
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

 let exptl = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     start: "top 85%",
     end: "top 5%",
     scrub: 2,
     markers: true,
     scroller: '#main'
   }
 });
 exptl.from(item, {
   x: 100,
   opacity: 0,
   duration: 1
 });
 
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var h1 =document.querySelectorAll('#page2 h1')
console.log(h1)
h1.forEach(function(elem){
    var clutter=''
    var h1Text=elem.textContent

    var splittedText=h1Text.split('')

    splittedText.forEach(function(elem){
         clutter+=`<span> ${elem} </span>`
    })
    elem.innerHTML=clutter
})

gsap.to("#page2 span",{
    color:'white',
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:'#page2 span',
        scroller:"#main",
        
        markers:true,
        start:'top 50%',
        end:"top 0",
        scrub:1
    }
})