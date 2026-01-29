(function ($) {
    "use strict";
    
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
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
        
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
                    // Only check specific full-width dark sections
                    $('.page-header, #blog-carousel, .offer, .footer').each(function() {
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
        setTimeout(initFloatingBeans, 500);
    });

})(jQuery);

