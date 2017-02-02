var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#slide1",
        triggerHook: "onEnter",
    })
    .duration('200%')
    .setTween("#slide1", {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);