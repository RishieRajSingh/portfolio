export function initializeSlider(
    container,
    itemCount,
    {
        trackSelector = ".slider-track",
        prevSelector = ".slider-prev",
        nextSelector = ".slider-next",
        dotSelector = ".slider-dot",
        swipeThreshold = 50
    } = {}
) {
    const track = container.querySelector(trackSelector);
    const prevButton = container.querySelector(prevSelector);
    const nextButton = container.querySelector(nextSelector);
    const dots = container.querySelectorAll(dotSelector);

    if (!track || itemCount <= 1) return;

    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    let wheelLocked = false;

    /* =========================
       UPDATE SLIDER
       ========================= */

    function updateSlider() {
        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === currentIndex
            );
        });

        if (prevButton) {
            prevButton.disabled = currentIndex === 0;
        }

        if (nextButton) {
            nextButton.disabled =
                currentIndex === itemCount - 1;
        }
    }

    /* =========================
       NAVIGATION
       ========================= */

    function goTo(index) {
        if (index < 0 || index >= itemCount) return;

        currentIndex = index;
        updateSlider();
    }

    function next() {
        goTo(currentIndex + 1);
    }

    function previous() {
        goTo(currentIndex - 1);
    }

    /* =========================
       ARROWS
       ========================= */

    prevButton?.addEventListener("click", previous);
    nextButton?.addEventListener("click", next);

    /* =========================
       DOTS
       ========================= */

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            goTo(Number(dot.dataset.index));
        });
    });

    /* =========================
       TOUCH / MOUSE DRAG
       ========================= */

    track.addEventListener("pointerdown", event => {
        startX = event.clientX;
        isDragging = true;
    });

    track.addEventListener("pointerup", event => {
        if (!isDragging) return;

        const difference = startX - event.clientX;

        isDragging = false;

        if (Math.abs(difference) < swipeThreshold) return;

        if (difference > 0) {
            next();
        } else {
            previous();
        }
    });

    track.addEventListener("pointercancel", () => {
        isDragging = false;
    });

    /* =========================
       TRACKPAD HORIZONTAL SWIPE
       ========================= */

    container.addEventListener(
        "wheel",
        event => {
            if (
                Math.abs(event.deltaX) <=
                Math.abs(event.deltaY)
            ) {
                return;
            }

            event.preventDefault();

            if (wheelLocked) return;

            wheelLocked = true;

            if (event.deltaX > 0) {
                next();
            } else {
                previous();
            }

            setTimeout(() => {
                wheelLocked = false;
            }, 400);
        },
        { passive: false }
    );

    /* =========================
       KEYBOARD
       ========================= */

    container.setAttribute("tabindex", "0");

    container.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
        }
    });

    /* =========================
       INITIAL STATE
       ========================= */

    updateSlider();
}