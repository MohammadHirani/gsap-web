// function locoScroll() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("main"),
//         smooth: true,
//         lerp:0.1
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
// }


function homePageAnimation() {
    gsap.set(".marquee-row", { scale: 4 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            // scroller: "main",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 2
        }
    })

    tl.to(".hero-video", {
        '--clip': "0%",
        ease: Power2,
        duaration: 2,
    }, 'a').to(".marquee-row", {
        scale: 1,
        ease: Power2,
    }, 'a').to(".row-lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4,
    }, 'b').to(".row-rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4,
    }, 'b')
}

function bodyColorChange() {
    document.querySelectorAll("section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            // scroller: "main",
            start: "top top",
            end: "bottom top",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
        })
    })
}

// locoScroll();
bodyColorChange();
homePageAnimation();