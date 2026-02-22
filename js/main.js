(function ($) {
    "use strict";
    
    // ========================
    // PRELOADER & CUSTOM CURSOR
    // ========================
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader').css({
                'opacity': '0',
                'visibility': 'hidden'
            });
        }, 1500); // Show preloader for 1.5s
    });

    $(document).ready(function() {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        if (cursorDot && cursorOutline) {
            window.addEventListener('mousemove', function(e) {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Add a slight delay to the outline for a smooth effect
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            });

            // Add hover effect for links and buttons
            $('a, button, .btn').on('mouseenter', function() {
                if (cursorOutline) {
                    cursorOutline.style.width = '60px';
                    cursorOutline.style.height = '60px';
                    cursorOutline.style.backgroundColor = 'rgba(218, 159, 91, 0.1)';
                }
            }).on('mouseleave', function() {
                if (cursorOutline) {
                    cursorOutline.style.width = '40px';
                    cursorOutline.style.height = '40px';
                    cursorOutline.style.backgroundColor = 'transparent';
                }
            });
        }
    });

    // ============= CONFIGURATION =============
    // Set to true to always trigger scroll animation (for testing)
    var DEBUG_MODE = false;
    
    // Scroll position per page (0.0 to 1.2+)
    // 0.0 = stay at top (no scroll)
    // 0.5 = scroll halfway down the header
    // 1.0 = scroll to bottom of header (content just starts)
    // 1.1 = scroll 10% past header into content
    // 1.2 = scroll 20% past header into content
    var PAGE_SCROLL_POSITIONS = {
        'about.html': 1.38,
        'service.html': 1.30,
        'menu.html': 1.34,
        'reservation.html': 1.05,
        'testimonial.html': 1.05,
        'contact.html': 1.30,
        'default': 1.05  // fallback for any other pages
    };
    // =========================================
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        var dropdownTimer;
        
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseenter', function () {
                    clearTimeout(dropdownTimer);
                    $(this).find('.dropdown-menu').addClass('show');
                }).on('mouseleave', function () {
                    var $menu = $(this).find('.dropdown-menu');
                    dropdownTimer = setTimeout(function() {
                        $menu.removeClass('show');
                    }, 500); // Stay open for 500ms after mouse leaves
                });
            } else {
                $('.navbar .dropdown').off('mouseenter').off('mouseleave');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
        
        // Enhanced Carousel Functionality
        var $carousel = $('#blog-carousel');
        
        if ($carousel.length) {
            // Initialize carousel with enhanced settings
            $carousel.carousel({
                interval: 5000,
                pause: 'hover',
                ride: 'carousel',
                wrap: true
            });
            
            // Ensure smooth content transitions
            $carousel.on('slid.bs.carousel', function (e) {
                // Force repaint to restart animations
                var $activeSlide = $(e.relatedTarget);
                if ($activeSlide.hasClass('active')) {
                    $activeSlide.find('.carousel-caption').css('display', 'none');
                    setTimeout(function() {
                        $activeSlide.find('.carousel-caption').css('display', '');
                    }, 10);
                }
            });
            
            // Add subtle parallax effect on mouse move (background image only)
            var carouselParallax = function(e) {
                if ($(window).width() > 768 && $carousel.find('.carousel-item.active').length) {
                    var $active = $carousel.find('.carousel-item.active img');
                    var carouselTop = $carousel.offset().top;
                    var carouselHeight = $carousel.height();
                    var carouselBottom = carouselTop + carouselHeight;
                    
                    // Check if mouse is within carousel vertical bounds (including navbar area)
                    if (e.pageY >= 0 && e.pageY <= carouselBottom) {
                        var x = e.pageX;
                        var y = e.pageY;
                        var width = $(window).width();
                        var height = carouselHeight;
                        
                        // Calculate movement opposite to mouse (parallax effect)
                        var moveX = ((x / width) - 0.5) * -30; // Inverted: -15px to 15px
                        var moveY = ((y / height) - 0.5) * -30; // Inverted: -15px to 15px
                        
                        $active.css({
                            'transform': 'translate(' + moveX + 'px, ' + moveY + 'px) scale(1.1)',
                            'transition': 'transform 0.3s ease-out'
                        });
                    }
                }
            };
            
            // Listen to mousemove on entire document for carousel area
            $(document).on('mousemove', carouselParallax);
            
            $carousel.on('mouseleave', function() {
                if ($(window).width() > 768) {
                    var $active = $carousel.find('.carousel-item.active img');
                    $active.css({
                        'transform': 'translate(0, 0) scale(1.1)',
                        'transition': 'transform 0.8s ease-out'
                    });
                }
            });
            
            // Keyboard navigation
            $(document).on('keydown', function(e) {
                if (e.keyCode === 37) { // Left arrow
                    $carousel.carousel('prev');
                } else if (e.keyCode === 39) { // Right arrow
                    $carousel.carousel('next');
                }
            });
            
            // Touch swipe support (basic)
            var xDown = null;
            var yDown = null;
            
            $carousel.on('touchstart', function(e) {
                const firstTouch = e.touches[0] || e.originalEvent.touches[0];
                xDown = firstTouch.clientX;
                yDown = firstTouch.clientY;
            });
            
            $carousel.on('touchmove', function(e) {
                if (!xDown || !yDown) {
                    return;
                }
                
                var xUp = e.touches[0].clientX;
                var yUp = e.touches[0].clientY;
                
                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;
                
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        $carousel.carousel('next');
                    } else {
                        $carousel.carousel('prev');
                    }
                }
                
                xDown = null;
                yDown = null;
            });
        }
        
        // Clear scroll flag only when clicking content buttons (not navbar)
        $('.btn[href*=".html"], .container a.btn[href*=".html"]').on('click', function() {
            sessionStorage.removeItem('hasSeenPageScroll');
        });
        
        // Auto-scroll to content on page load (only once per session)
        if ($('.page-header').length > 0) {
            // Check if user has already seen the scroll animation this session
            var shouldScroll = DEBUG_MODE || !sessionStorage.getItem('hasSeenPageScroll');
            
            if (shouldScroll) {
                setTimeout(function() {
                    // Get current page filename
                    var currentPage = window.location.pathname.split('/').pop();
                    
                    // Get scroll position for this page (or use default)
                    var scrollPosition = PAGE_SCROLL_POSITIONS[currentPage] || PAGE_SCROLL_POSITIONS['default'];
                    
                    var headerHeight = $('.page-header').outerHeight();
                    var scrollTarget = headerHeight * scrollPosition;
                    
                    if (DEBUG_MODE) {
                        console.log('Page Scroll Debug:');
                        console.log('- Current page:', currentPage);
                        console.log('- Header height:', headerHeight + 'px');
                        console.log('- Scroll position:', (scrollPosition * 100) + '%');
                        console.log('- Scroll target:', scrollTarget + 'px');
                    }
                    
                    $('html, body').animate({
                        scrollTop: scrollTarget
                    }, 1200, 'easeInOutCubic');
                    
                    // Mark as seen for this session (skip in debug mode)
                    if (!DEBUG_MODE) {
                        sessionStorage.setItem('hasSeenPageScroll', 'true');
                    }
                }, 300);
            }
        }
        
        // Enhanced animations - only non-critical ones
        try {
            initMagneticButtons();
            initFloatingElements();
            initImageHoverEffects();
        } catch(e) {
            console.log('Animation init error:', e);
        }
    });
    
    
    // Back to top button with rotation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow').css('transform', 'rotate(360deg)');
        } else {
            $('.back-to-top').fadeOut('slow').css('transform', 'rotate(0deg)');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        $(this).css('transform', 'rotate(720deg)');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    // Magnetic button effect
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', function() {
                button.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }
    
    // Floating animation for icons and images
    function initFloatingElements() {
        $('.fa-coffee, .fa-award, .fa-leaf, .fa-clock, .service-icon').each(function(index) {
            $(this).css({
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
            });
        });
        
        // Add gentle rotation to images on hover
        $('.service-img-container, .menu-item').hover(
            function() {
                $(this).find('img').css({
                    transform: 'scale(1.1) rotate(2deg)',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            },
            function() {
                $(this).find('img').css({
                    transform: 'scale(1) rotate(0deg)',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            }
        );
    }
    
    // Enhanced image hover effects
    function initImageHoverEffects() {
        $('.menu-item, .team-item, .portfolio-item').hover(
            function() {
                $(this).css({
                    transform: 'translateY(-15px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(218, 159, 91, 0.3)',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            },
            function() {
                $(this).css({
                    transform: 'translateY(0) scale(1)',
                    boxShadow: 'none',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
            }
        );
    }
    
    // Navbar scroll effect
    function updateNavbar() {
        var scroll = $(window).scrollTop();
        
        if (scroll > 50) {
            $('.nav-bar').css('top', '0'); // Stick to top on scroll
            
            $('.navbar').css({
                background: 'rgba(51, 33, 29, 0.95)', // Solid dark brown on scroll
                backdropFilter: 'blur(10px)',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                height: '70px',
                padding: '0 30px'
            });
            
            // Shrink logo on scroll
            $('.navbar-brand img').css({
                height: '100px',
                transform: 'translateY(5px)'
            });
        } else {
            $('.nav-bar').css('top', '30px'); // Float down when at top
            
            $('.navbar').css({
                background: 'linear-gradient(to bottom, rgba(51, 33, 29, 0.4) 0%, rgba(51, 33, 29, 0) 100%)', // Transparent gradient
                backdropFilter: 'none',
                boxShadow: 'none',
                height: '90px',
                padding: '0 30px'
            });
            
            // Restore logo
            $('.navbar-brand img').css({
                height: '140px',
                transform: 'translateY(0)'
            });
        }
    }
    
    // Set navbar style on load
    updateNavbar();
    
    // Update navbar on scroll
    $(window).on('scroll', updateNavbar);
    
    // Animate section title bars dynamically based on scroll position
    function checkSectionBars() {
        $('.section-title').each(function() {
            var elementTop = $(this).offset().top;
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            // Calculate how far the section has scrolled into view
            var triggerPoint = viewportBottom - 350; // Start animation later - when 350px from bottom of viewport
            var distanceFromTrigger = triggerPoint - elementTop;
            
            // Calculate progress (0 to 1) - how far the section has moved past trigger point
            var scrollRange = 500; // Longer distance for slower, more visible expansion
            var progress = Math.max(0, Math.min(1, distanceFromTrigger / scrollRange));
            
            // Set width based on scroll progress (0% to 80%)
            var targetWidth = progress * 80;
            
            // Apply the width directly to the pseudo-element via CSS variable
            $(this).css('--bar-width', targetWidth + '%');
            
            if (progress > 0) {
                $(this).addClass('bar-animating');
            } else {
                $(this).removeClass('bar-animating');
            }
        });
    }
    
    // Check on scroll with smooth updates
    $(window).on('scroll', checkSectionBars);
    
    // ========================
    // MENU ITEM SCROLL ANIMATIONS
    // ========================
    
    var menuItemsAnimated = false;
    
    function checkMenuItems() {
        // Target both menu page items and homepage menu rows
        $('.menu-item, .service-item, .row.align-items-center.mb-5').each(function() {
            var $item = $(this);
            var elementTop = $item.offset().top;
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            // Calculate how far the item has scrolled into view
            var triggerPoint = viewportBottom - 20;
            var distanceFromTrigger = triggerPoint - elementTop;
            
            // Calculate progress (0 to 1)
            var scrollRange = 200;
            var progress = Math.max(0, Math.min(1, distanceFromTrigger / scrollRange));
            
            // Apply transformations based on progress
            var opacity = progress;
            var translateY = (1 - progress) * 40; // Start 40px down
            var scale = 0.85 + (progress * 0.15); // Scale from 0.85 to 1.0
            
            $item[0].style.opacity = opacity;
            $item[0].style.transform = 'translateY(' + translateY + 'px) scale(' + scale + ')';
        });
    }
    
    // Check on scroll
    $(window).on('scroll', function() {
        checkMenuItems();
    });
    
    // Initial check on page load
    $(window).on('load', function() {
        checkMenuItems();
    });
    
    // Also check when DOM is ready
    $(document).ready(function() {
        checkMenuItems();
    });
    
    // ========================
    // FLOATING COFFEE BEANS
    // ========================
    
    function initFloatingBeans() {
        var beans = [];
        var beansPerSide = 9; // 9 beans on each side for total of 18
        
        // Create beans for left side
        for (var i = 0; i < beansPerSide; i++) {
            createBean('left', i, beansPerSide);
        }
        
        // Create beans for right side
        for (var i = 0; i < beansPerSide; i++) {
            createBean('right', i, beansPerSide);
        }
        
        function createBean(side, index, total) {
            var bean = $('<div class="coffee-bean"></div>');
            bean.addClass(side);
            
            // Evenly distribute vertically with some randomness
            var baseTopPosition = (index / total) * 100;
            var randomOffset = (Math.random() * 15 - 7.5); // +/- 7.5% randomness
            var topPosition = baseTopPosition + randomOffset;
            
            // Random size with better distribution
            var rand = Math.random();
            var sizeClass = rand > 0.7 ? 'large' : (rand > 0.4 ? '' : 'small');
            if (sizeClass) bean.addClass(sizeClass);
            
            // Random horizontal offset with slight clustering
            var horizontalOffset = 40 + (Math.random() * 100); // 40-140px from edge
            
            // Random rotation
            var rotation = Math.random() * 360;
            
            bean.css({
                'top': topPosition + '%',
                'transform': 'rotate(' + rotation + 'deg)',
            });
            
            if (side === 'left') {
                bean.css('left', horizontalOffset + 'px');
            } else {
                bean.css('right', horizontalOffset + 'px');
            }
            
            // Store bean data
            beans.push({
                element: bean,
                initialTop: topPosition,
                rotation: rotation
            });
            
            $('body').append(bean);
        }
        
        // Parallax scroll effect - beans move opposite to scroll direction
        var lastScrollTop = $(window).scrollTop();
        
        // Function to check if bean overlaps with dark sections
        function updateBeanVisibility() {
            var viewportTop = $(window).scrollTop();
            
            beans.forEach(function(bean) {
                var beanTop = bean.element.offset().top;
                var beanBottom = beanTop + bean.element.height();
                var isOverDark = false;
                
                // Hide beans at the very top of the page (navbar/hero area)
                if (beanTop < 100) {
                    isOverDark = true;
                }
                
                // Check if bean overlaps with any dark background sections
                if (!isOverDark) {
                    // Only check specific full-width dark sections and the horizontal scroll section
                    $('.page-header, #blog-carousel, .offer, .footer, .horizontal-scroll-section').each(function() {
                        var sectionTop = $(this).offset().top;
                        var sectionBottom = sectionTop + $(this).outerHeight();
                        
                        // Check for overlap
                        if (beanBottom > sectionTop && beanTop < sectionBottom) {
                            isOverDark = true;
                            return false; // break loop
                        }
                    });
                }
                
                // Fade out or show bean based on background
                if (isOverDark) {
                    bean.element.css('opacity', '0');
                } else {
                    bean.element.css('opacity', '1');
                }
            });
        }
        
        $(window).on('scroll', function() {
            var scrollTop = $(window).scrollTop();
            var scrollDelta = scrollTop - lastScrollTop;
            
            beans.forEach(function(bean) {
                // Scroll down (positive delta) = beans move up (subtract)
                // Scroll up (negative delta) = beans move down (subtract negative = add)
                var currentTop = parseFloat(bean.element.css('top'));
                var speed = 0.2; // Parallax speed - increased for faster movement
                var newTop = currentTop - (scrollDelta * speed);
                
                // Wrap around when beans go off screen
                var viewportHeight = $(window).height();
                if (newTop < -100) {
                    newTop = viewportHeight + 50;
                } else if (newTop > viewportHeight + 50) {
                    newTop = -100;
                }
                
                bean.element.css({
                    'top': newTop + 'px'
                });
            });
            
            // Update visibility based on dark sections
            updateBeanVisibility();
            
            lastScrollTop = scrollTop;
        });
        
        // Initial visibility check
        updateBeanVisibility();
    }
    
    // Initialize beans after page load
    $(window).on('load', function() {
        // setTimeout(initFloatingBeans, 500); // Disabled to remove floating beans
    });

    // ========================
    // GSAP SCROLL ANIMATIONS
    // ========================
    $(document).ready(function() {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Section Parallax
            gsap.to(".carousel-item img", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "#blog-carousel",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Fade Up Elements
            const fadeUpElements = gsap.utils.toArray('.section-title, .about-text, .service-item, .menu-item, .reservation-form, .about-redesign .col-lg-6');
            fadeUpElements.forEach(elem => {
                gsap.fromTo(elem, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // About Section Image Parallax
            if (document.querySelector('.about-visuals')) {
                gsap.to(".about-visuals .img-sub", {
                    y: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".about-visuals",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

            // Staggered Menu Items
            gsap.from(".menu-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".menu-item",
                    start: "top 80%"
                }
            });

            // Timeline Animation
            const timelineItems = gsap.utils.toArray('.timeline-item');
            if (timelineItems.length > 0) {
                gsap.to(timelineItems, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.3,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".history-timeline",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }

            // Cinematic Accordion for Services
            const accordionItems = document.querySelectorAll('.accordion-item');
            
            if (accordionItems.length > 0) {
                accordionItems.forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        // Remove active class from all items
                        accordionItems.forEach(el => el.classList.remove('active'));
                        // Add active class to hovered item
                        item.classList.add('active');
                    });
                });
            }
        }
    });

    // ========================
    // TEXT SPLIT & LIQUID EFFECT
    // ========================
    $(document).ready(function() {
        // Split Text for Hero
        const splitTextElements = document.querySelectorAll('.split-text, .split-text-main');
        
        splitTextElements.forEach(elem => {
            const text = elem.innerText;
            elem.innerHTML = '';
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.innerText = char === ' ' ? '\u00A0' : char;
                elem.appendChild(span);
            });
        });

        // Animate Split Text after preloader
        setTimeout(() => {
            gsap.to('.split-text span', {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.8,
                stagger: 0.02,
                ease: "back.out(1.5)"
            });
            
            gsap.to('.split-text-main span', {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 1,
                stagger: 0.03,
                ease: "back.out(1.5)",
                delay: 0.3
            });

            gsap.fromTo('.fade-up-text', 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.8 }
            );
        }, 1500); // Wait for preloader

        // Liquid SVG Filter Animation
        const turbulence = document.querySelector('#liquid feTurbulence');
        if (turbulence) {
            let frames = 0;
            let rad = Math.PI / 180;
            function animateFluid() {
                frames += 0.5;
                let bfx = 0.01;
                let bfy = 0.01;
                bfx += 0.005 * Math.cos(frames * rad);
                bfy += 0.005 * Math.sin(frames * rad);
                turbulence.setAttribute('baseFrequency', `${bfx} ${bfy}`);
                requestAnimationFrame(animateFluid);
            }
            animateFluid();
        }
    });

    // ========================
    // MAGNETIC BUTTONS
    // ========================
    $(document).ready(function() {
        const magnetics = document.querySelectorAll('.magnetic');
        
        magnetics.forEach((elem) => {
            elem.addEventListener('mousemove', (e) => {
                const pos = elem.getBoundingClientRect();
                const x = e.clientX - pos.left - pos.width / 2;
                const y = e.clientY - pos.top - pos.height / 2;
                
                gsap.to(elem, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.5,
                    ease: "power3.out"
                });
            });
            
            elem.addEventListener('mouseleave', () => {
                gsap.to(elem, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });
    });

    // ========================
    // SMART WEATHER RECOMMENDATION
    // ========================
    $(document).ready(function() {
        const weatherWidget = $('#weather-widget');
        const weatherText = $('#weather-text');
        const weatherIcon = $('.weather-icon i');
        const closeBtn = $('#close-weather');

        if (weatherWidget.length) {
            // Close button functionality
            closeBtn.on('click', function() {
                weatherWidget.removeClass('show');
            });

            // Fetch location and weather
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    const lat = data.latitude;
                    const lon = data.longitude;
                    const city = data.city;

                    if (lat && lon) {
                        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
                            .then(res => res.json())
                            .then(weatherData => {
                                const temp = Math.round(weatherData.current_weather.temperature);
                                const isDay = weatherData.current_weather.is_day;
                                
                                let recommendation = "";
                                let iconClass = "fas fa-cloud-sun";

                                if (temp > 25) {
                                    recommendation = `It's ${temp}°C in ${city}. Perfect weather for an Iced Latte! 🧊☕`;
                                    iconClass = isDay ? "fas fa-sun" : "fas fa-moon";
                                } else if (temp < 15) {
                                    recommendation = `It's ${temp}°C in ${city}. Warm up with a hot Cappuccino! ☕🔥`;
                                    iconClass = "fas fa-snowflake";
                                } else {
                                    recommendation = `It's ${temp}°C in ${city}. A great day for our Signature Blend! ☕✨`;
                                    iconClass = isDay ? "fas fa-cloud-sun" : "fas fa-cloud-moon";
                                }

                                weatherText.text(recommendation);
                                weatherIcon.attr('class', iconClass);

                                // Show widget after a delay
                                setTimeout(() => {
                                    weatherWidget.addClass('show');
                                }, 3000);
                            })
                            .catch(err => console.error("Weather fetch error:", err));
                    }
                })
                .catch(err => console.error("Location fetch error:", err));
        }
    });

})(jQuery);

