//carrossel
$(document).ready(function () {
    const $carousel = $('.carousel-fade');
    const $items = $carousel.find('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        $items.eq(currentIndex).removeClass('opacity-100').addClass('opacity-0');
        $items.eq(index).removeClass('opacity-0').addClass('opacity-100');
        currentIndex = index;
    }

    function nextItem() {
        const nextIndex = (currentIndex + 1) % $items.length;
        showItem(nextIndex);
    }

    function prevItem() {
        const prevIndex = (currentIndex - 1 + $items.length) % $items.length;
        showItem(prevIndex);
    }
    //temporizador
    function startAutoSlide() {
        setInterval(nextItem, 3000); 
    }

    // Iniciar o carousel
    showItem(currentIndex);

    // Lidar com os botões de próxima e anterior
    $('.carousel-next').on('click', nextItem);
    $('.carousel-prev').on('click', prevItem);
});

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