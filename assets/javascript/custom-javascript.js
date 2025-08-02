
/* -------------------- Browser Zoom Setting -------------------- */

window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
},
{
    passive: false
});

//window.addEventListener('keydown', function (e) {
//    if (e.ctrlKey) {
//        if (['+', '-', '=', '0', 'numpadAdd', 'numpadSubtract', 'numpad0'].includes(e.key) ||
//            e.keyCode === 187 || e.keyCode === 189 || e.keyCode === 48) {
//            e.preventDefault();
//        }
//    }
//});

/* -------------------- Cursor Setting -------------------- */

const cursorDefault = new MouseFollower({
    skewing: 1,
    speed: 0.5,
    visible: false,
});

const targets = document.querySelectorAll('[data-cursor]');

targets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursorDefault.show();
    });

    target.addEventListener('mouseleave', () => {
        cursorDefault.hide();
    });
});

/* -------------------- GSAP Setting -------------------- */

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Observer, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

    // Scroll Smoother

    ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.5,
    });

    document.querySelectorAll(".text-mask").forEach((el) => {
        const splitText = SplitText.create(el, {
            type: "chars,words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
        });
    });

    // Split Text

    document.querySelectorAll(".text-mask-reveal").forEach((el) => {
        const start = el.dataset.start || "top 75%";
        const splitText = SplitText.create(el, {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                gsap.set(self.lines, { yPercent: 100 });
                ScrollTrigger.create({
                    trigger: el,
                    start: start,
                    markers: false,
                    onEnter: () => {
                        gsap.to(self.lines, {
                            duration: 1.5,
                            yPercent: 0,
                            stagger: 0.065,
                            ease: "expo.out",
                        });
                    },
                });
            }
        });
    });
});



/* -------------------- Flickty Setting -------------------- */

document.querySelectorAll('.carousel').forEach(function (carouselElem) {
    var flkty = new Flickity(carouselElem, {
        imagesLoaded: true,
        percentPosition: false,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
    });

    var imgs = carouselElem.querySelectorAll('.carousel-cell img');
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';

    flkty.on('scroll', function () {
        flkty.slides.forEach(function (slide, i) {
            var img = imgs[i];
            if (img) {
                var x = (slide.target + flkty.x) * -1 / 5;
                img.style[transformProp] = 'translateX(' + x + 'px)';
            }
        });
    });
});

/* -------------------- Custom Split Text Setting -------------------- */

document.addEventListener("DOMContentLoaded", () => {

    // Splitting Text - Title

    document.querySelectorAll('.text-title').forEach(btn => {

        const textSpan = btn.querySelector('.text');

        if (textSpan) {
            const text = textSpan.textContent.trim();
            let charSpans = '';

            text.split('').forEach(char => {
                charSpans += `<span>${char}</span>`;
            });

            textSpan.innerHTML = `
                        <span>${charSpans}</span>
                    `;
        }
    });

    // Splitting Text - Link - Navbar

    document.querySelectorAll('.nav-link').forEach(btn => {

        const textSpan = btn.querySelector('.text');

        if (textSpan) {
            const text = textSpan.textContent.trim();
            let charSpans = '';

            text.split('').forEach(char => {
                charSpans += `<span>${char}</span>`;
            });

            textSpan.innerHTML = `
                        <span>${charSpans}</span>
                        <span>${charSpans}</span>
                    `;
        }
    });

    // Splitting Text - Button

    document.querySelectorAll('.btn').forEach(btn => {

        const textSpan = btn.querySelector('.text');

        if (textSpan) {
            const text = textSpan.textContent.trim();
            let charSpans = '';

            text.split('').forEach(char => {
                charSpans += `<span>${char}</span>`;
            });

            textSpan.innerHTML = `
                        <span>${charSpans}</span>
                        <span>${charSpans}</span>
                    `;
        }
    });

    // Splitting Text - Link - Navbar

    document.querySelectorAll('.link-default').forEach(link => {

        const textSpan = link.querySelector('.text');

        if (textSpan) {
            const text = textSpan.textContent.trim();
            let charSpans = '';

            text.split('').forEach(char => {
                charSpans += `<span>${char}</span>`;
            });

            textSpan.innerHTML = `
                        <span>${charSpans}</span>
                        <span>${charSpans}</span>
                    `;
        }
    });
});

/* -------------------- Navbar Setting -------------------- */

$(window).scroll(function () {
    $(".navbar").toggleClass("scroll", $(this).scrollTop() > 1)
    $("#scroll-top").toggleClass("scroll", $(this).scrollTop() > 1)
});
