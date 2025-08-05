
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

/* -------------------- GSAP Setting -------------------- */

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText);

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

    gsap.set(".logo-marquee.primary .logo-marquee-content .content-marquee .marquee-image .image", {
        x: (i) => i * 200
    });

    gsap.to(".logo-marquee.primary .logo-marquee-content .content-marquee .marquee-image .image", {
        duration: 50,
        ease: "none",
        x: "-=1200",
        modifiers: {
            x: gsap.utils.unitize(x => (parseFloat(x) + 1200) % 1200)
        },
        repeat: -1
    });
});

/* -------------------- Flickty Setting -------------------- */

window.addEventListener('DOMContentLoaded', function () {
    var groupCellsValue = window.innerWidth >= 1024 ? 2 : false;

    var flkty = new Flickity('.carousel-double', {
        wrapAround: false,
        groupCells: groupCellsValue,
        cellAlign: 'left',
        draggable: true,
        freeScroll: true
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