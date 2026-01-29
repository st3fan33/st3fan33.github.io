(function ($) {
    "use strict";
    
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
        if ($(window).scrollTop() > 50) {
            $('.navbar').css({
                background: 'rgba(51, 33, 29, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.4s ease'
            });
        } else {
            $('.navbar').css({
                background: 'rgba(51, 33, 29, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'none',
                transition: 'all 0.4s ease'
            });
        }
    }
    
    // Set navbar style on load
    updateNavbar();
    
    // Update navbar on scroll
    $(window).on('scroll', updateNavbar);
    
})(jQuery);

