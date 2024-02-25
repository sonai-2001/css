// gsap.to("#box",{
// x:1000,
// rotate:180,
// backgroundColor:'green',
// duration:5,
// delay:2,

// })

// gsap.from("#box",{
//     x:1000,
//     rotate:180,
//     backgroundColor:'green',
//     duration:5,
//     delay:2,
    
//     })

var tl=gsap.timeline()// this help to run three event one by one

tl.to("#box1",{
    x:1000,
    rotate:180,
    backgroundColor:'green',
    duration:5,
    delay:2,
    
    })
tl.to("#box2",{
    x:1000,
    rotate:180,
    backgroundColor:'green',
    duration:5,
    delay:2,
    
    })
tl.to("#box3",{
    x:1000,
    rotate:180,
    backgroundColor:'green',
    duration:5,
    delay:2,
    
    })