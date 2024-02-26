

gsap.from("#page1 #gola",{
    opacity:0,
    duration:5,
    delay:1
})
gsap.from("#page2 #gola",{
    opacity:0,
    duration:5,
    delay:1,
    scrollTrigger:{
        trigger:'#page2 #gola',// it is the part that animated
        scroller:'body',// it is the part that scrolled
        markers:true,// it is help to provide us the mark point
        start:'top 50%', // make the mark point position
        scrub:5// it has value either true or false or 1 to 5 on the basis of smooth.

    
    },
})

gsap.from('#page3 #gola',{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:'#page3 #gola',
        scroller:'body',
        markers:true,
        start:'top 50%',
        scrub:true
        
    }
})