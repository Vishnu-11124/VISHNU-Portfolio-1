// splash screen 
window.addEventListener("load", () => {
      const splash = document.querySelector(".splash");
      const content = document.querySelector("nav");

      // Keep splash for 2.5s then hide
      setTimeout(() => {
        splash.classList.add("hide");
        content.classList.add("show");
        document.body.style.overflow = "auto"; // enable scrolling again
      }, 2500);
});

const sideMenu = document.querySelector("#sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-300px";
}

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector("nav ul");
    if(this.scrollY > 50){
        nav.classList.add("bg-white", "bg-opacity-50",'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'bg-opacity-50','shadow-sm');
    }
    else{
        nav.classList.remove("bg-white", "bg-opacity-50",'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'bg-opacity-50','shadow-sm');
    }
});

// Dark and Light mode toggle
const modeToggle = document.querySelector('.mode');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modeToggle.innerHTML = document.body.classList.contains('dark') ? '<img src="./images/sun_icon.png" class="w-6" alt="">' : '<img src="./images/moon_icon.png" class="w-6" alt="">';
});

// Slider
let currentIndex = 0;
        const sliderTrack = document.getElementById('sliderTrack');
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dotsContainer');
        let slidesToShow = getSlidesToShow();
        let totalSlides = slides.length;
        let maxIndex = Math.max(0, totalSlides - slidesToShow);

        // Calculate slides to show based on screen width
        function getSlidesToShow() {
            if (window.innerWidth >= 1280) return 4;
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }

        // Create dots
        function createDots() {
            dotsContainer.innerHTML = '';
            const dotsCount = maxIndex + 1;
            for (let i = 0; i < dotsCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Update slider position
        function updateSlider() {
            const offset = -(currentIndex * (100 / slidesToShow));
            sliderTrack.style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        // Update active dot
        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Next slide
        function nextSlide() {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }

        // Previous slide
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateSlider();
        }

        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        // Auto slide
        let autoSlideInterval = setInterval(nextSlide, 5000);

        // Pause auto slide on hover
        sliderTrack.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        sliderTrack.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            slidesToShow = getSlidesToShow();
            maxIndex = Math.max(0, totalSlides - slidesToShow);
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            createDots();
            updateSlider();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Touch/Swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        sliderTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        sliderTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) nextSlide();
            if (touchEndX > touchStartX + 50) prevSlide();
        }

        // Initialize
        createDots();