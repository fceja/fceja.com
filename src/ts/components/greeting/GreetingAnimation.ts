import anime from 'animejs/lib/anime.es.js';

import "@scss/components/GreetingAnimation.scss"

export const GreetingAnimation = () => {
    let textWrapper = document.querySelector('.heading-1 .letters1');
    if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.|'|,)/g, "<span class='letter1'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.heading-1 .line1',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.heading-1 .line1',
                translateX: [0, textWrapper.getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 300
            }).add({
                targets: '.heading-1 .letter1',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (_, i) => 34 * (i + 1)
            }).add({
                targets: '.heading-1',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 2000
            });
    }

    let textWrapper2 = document.querySelector('.heading-2 .letters2');
    if (textWrapper2 && textWrapper2.textContent) {
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w|\.|'|,)/g, "<span class='letter2'>$&</span>");
        anime.timeline({ loop: false })
            .add({
                targets: '.heading-2 .line2',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.heading-2 .line2',
                translateX: [0, textWrapper2.getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 1500
            }).add({
                targets: '.heading-2 .letter2',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                // delay: (el, i) => 34 * (i + 1)
                delay: (_, i) => 34 * (i + 1)
            }).add({
                targets: '.heading-2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1700
            });
    }

    let textWrapper3 = document.querySelector('.heading-3 .letters3');
    if (textWrapper3 && textWrapper3.textContent) {
        textWrapper3.innerHTML = textWrapper3.textContent.replace(/([^\x00-\x80]|\w|\.|'|,)/g, "<span class='letter3'>$&</span>");

        const letterElements = textWrapper3.querySelectorAll('.letter3');

        // Loop through each element, add heart id for css
        letterElements.forEach(letterElement => {
            if (letterElement.textContent === '❤') {
                letterElement.id = 'heart';
            }
        });

        anime.timeline({ loop: false })
            .add({
                targets: '.heading-3 .line3',
                scaleY: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: '.heading-3 .line3',
                translateX: [0, textWrapper3.getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 3400
            }).add({
                targets: '.heading-3 .letter3',
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=775',
                delay: (_, i) => 34 * (i + 1)
            }).add({
                targets: '.heading-3',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1800
            });
    }

}