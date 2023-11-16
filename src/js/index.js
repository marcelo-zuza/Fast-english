// Contador Animado 
$(document).ready(function() {
    $('.contador').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count');

        $this.text(0); // Inicializa o contador com 0

        $this.waypoint({
            handler: function(direction) {
                if (direction === 'down') {
                    $({ countNum: 0 }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(countTo);
                        }
                    });
                }
            },
            offset: '90%'
        });
    });
});

// Fade-in de elementos
$(document).ready(function() {
    $('.fade-in-element').css('opacity', 0);
  
    $('.first-element').waypoint(function() {
        $(this.element).animate({ opacity: 1 }, 1500);
    }, {
        offset: '75%',
    });
  
    $('.second-element').waypoint(function() {
        $(this.element).animate({ opacity: 1 }, 2000);
    }, {
        offset: '95%', 
        delay: 1000,   
    });
  
    $('.third-element').waypoint(function() {
      $(this.element).animate({ opacity: 1 }, 2500);
  }, {
      offset: '75%', 
      delay: 0,  
  });
  });
  /*
 fade-in-element first-element
 fade-in-element second-element
 fade-in-element third-element
  */

 // Scrol suave
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
  
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
  });