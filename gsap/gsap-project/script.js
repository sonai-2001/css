
var tl=gsap.timeline()

tl.from('#nav h3',{
    y:-50,
    opacity:0,
    duration:1.5,
    delay:0.5,
    stagger:0.4
})
tl.from('#main h1',{
    x:-500,
    opacity:0,
    duration:1,
    stagger:0.4
})

tl.from('img',{
    x:600,
    rotate:180,
    opacity:0,
    duration:1,
    stagger:0.5
})