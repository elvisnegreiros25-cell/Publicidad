/*---------------------------------------------------------------------
    File Name: slider-setting.js
---------------------------------------------------------------------*/

"use strict";
var tpj = jQuery;

var revapi486;
tpj(document).ready(function () {
    if (tpj("#rev_slider_486_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_486_1");
    } else {
        revapi486 = tpj("#rev_slider_486_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 7000, // MODIFICADO: De 5000 a 7000
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off", // MODIFICADO: De "on" a "off"
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: true, // MODIFICADO: De false a true
                    hide_onleave: false, // MODIFICADO: De true a false
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20, // MODIFICADO: De 0 a 20
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20, // MODIFICADO: De 0 a 20
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: false, // MODIFICADO: De true a false
                    hide_under: 600, // MODIFICADO: De 800 a 600
                    style: "hebe",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 40, // MODIFICADO: De 30 a 40
                    space: 10, // MODIFICADO: De 5 a 10
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "wait", // MODIFICADO: De "pause" a "wait"
                visible_area: "80%", // MODIFICADO: De 70% a 80%
                presize: true // MODIFICADO: De false a true
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [700, 600, 500, 400], // MODIFICADO: Valores aumentados para mejor visualización
            lazyType: "smart", // MODIFICADO: De "none" a "smart"
            parallax: {
                type: "scroll",
                origo: "slidercenter", // MODIFICADO: De "enterpoint" a "slidercenter"
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "spinner2", // MODIFICADO: De "off" a "spinner2"
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "on", // MODIFICADO: De "off" a "on"
                disableFocusListener: false,
            }
        });
    }
});