$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['accueil', 'bellevue', 'quartier-bellevue', 'encombrants-solidaires', 'ampleur-association', 'operateurs', 'environnements-solidaires', 'lien-social', 'porte-à-porte', 'explication-nom', 'conclusion', 'crédit'],
        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction)
        {
            if (nextIndex===1)
            {
                $('#fp-nav').fadeOut();
            }

            
        },
        afterLoad: function(anchorLink, index)
        {
            if (index===1)
            {
                $('#fp-nav').hide();
                $("#text_slide3").removeClass('dezoom');
                $("#titre_slide3").removeClass('apparition_text_slide3');
                $("#ville1_side3").removeClass('apparition_ville1_slide3');
                $("#text_slide3").removeClass('disparition_text_slide3');
                $("#titre_slide3").removeClass('disparition_text_slide3');
            }
            else
            {
                $('#fp-nav').fadeIn();
            }

            if (index===3)
            {
                $("#text_slide3_app").addClass('dezoom');
                $("#titre_slide3").addClass('apparition_titre_slide3');

                $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                    function(e) {
                        var myElement = document.querySelector("#ville1_slide3");
                        myElement.style.bottom="-50%";
                        $("#ville1_slide3").addClass('disparition_ville1_slide3');
                    });

                $("#ville1_slide3").addClass('apparition_ville1_slide3');

                $("#text_slide3_disp").addClass('disparition_text_slide3');
            }

            if (index===11)
            {
                $('#p1').addClass('apparition_p1');
                $('#p2').addClass('apparition_p2');
                $('#p3').addClass('apparition_p3');
                $('#social_network').addClass('apparition_logos');
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});