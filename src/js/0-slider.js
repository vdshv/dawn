class SliderComponent extends HTMLElement {
    constructor() {
        super();

        // this
        // const carouselEl = document.getElementById("carousel");

        this.slider_container = this.querySelector('.grid');
        // const slideContainerEl = carouselEl.querySelector("#slide-container");
    
        this.slider_item = this.querySelector('.slider__item');
        // const slideEl = carouselEl.querySelector(".slide");

        this.slider_item_width = this.slider_item.offsetWidth;
        // let slideWidth = slideEl.offsetWidth;


        // Add click handlers
        this.querySelector('.slider__back').addEventListener("click", () => navigate("backward"));
        this.querySelector(".slider__forward").addEventListener("click", () => navigate("forward"));
        // this.querySelectorAll(".slide-indicator")
        //     .forEach((dot, index) => {
        //         dot.addEventListener("click", () => navigate(index));
        //         dot.addEventListener("mouseenter", () => clearInterval(autoplay));
        //     });

        // Add keyboard handlers
        // document.addEventListener('keydown', (e) => {
        this.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') {
                // clearInterval(autoplay);
                navigate("backward");
            } else if (e.code === 'ArrowRight') {
                // clearInterval(autoplay);
                navigate("forward");
            }
        });

        // Add resize handler
        window.addEventListener('resize', () => {
            this.slider_item_width = this.slider_item.offsetWidth;
        });

        // Autoplay
        // const autoplay = setInterval(() => navigate("forward"), 3000);
        // slideContainerEl.addEventListener("mouseenter", () => clearInterval(autoplay));

        // this.slideObserver = new IntersectionObserver((entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             this.slider_item_index = entry.target.dataset.slideindex;

        //             this.querySelector('.slide-indicator.active').classList.remove('active');
        //             carouselEl.querySelectorAll('.slide-indicator')[slideIndex].classList.add('active');
        //         }
        //     });
        // }, { root: slideContainerEl, threshold: .1 });
        // document.querySelectorAll('.slide').forEach((slide) => {
        //     slideObserver.observe(slide);
        // });
    }
    
    
    
    // Slide transition
    getNewScrollPosition = (arg) => {
        // const gap = 10;

        const maxScrollLeft = this.slider_container.scrollWidth - this.slider_item_width;
        if (arg === "forward") {
            // const x = this.slider_container.scrollLeft + slideWidth + gap;
            const x = this.slider_container.scrollLeft + this.slider_item_width;
            return x <= maxScrollLeft ? x : 0;
        } else if (arg === "backward") {
            // const x = this.slider_container.scrollLeft - slideWidth - gap;
            const x = this.slider_container.scrollLeft - this.slider_item_width;
            return x >= 0 ? x : maxScrollLeft;
        } else if (typeof arg === "number") {
            // const x = arg * (slideWidth + gap);
            const x = arg * (this.slider_item_width);
            return x;
        }
    }
    navigate = (arg) => {
        this.slider_container.scrollLeft = getNewScrollPosition(arg);
    }
}

customElements.define('slider-component', SliderComponent);