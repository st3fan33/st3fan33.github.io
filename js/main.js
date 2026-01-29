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
    
})(jQuery);

