import anime from 'animejs/lib/anime.es.js';

import "@scss/components/GreetingAnimation.scss"

export const GreetingAnimation = () => {
    var textWrapper = document.querySelector('.ml11 .letters1');
    if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|'|,)/g, "<span class='letter1'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.ml11 .line1',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.ml11 .line1',
                translateX: [0, textWrapper.getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 1200
            }).add({
                targets: '.ml11 .letter1',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            }).add({
                targets: '.ml11',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 2000
            });
    }

    var textWrapper2 = document.querySelector('.ml12 .letters2');
    if (textWrapper2 && textWrapper2.textContent) {
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w|\.|'|,)/g, "<span class='letter2'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '.ml12 .line2',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.ml12 .line2',
                translateX: [0, textWrapper2.getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 2000
            }).add({
                targets: '.ml12 .letter2',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (el, i) => 34 * (i + 1)
            }).add({
                targets: '.ml12',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 2200
            });
    }
}