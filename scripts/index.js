$(function() {
    'use strict';

    var running = true;
    $('#stop').click(function(){
        if(running === true) {
            running = false;
            $('#stop').text('START')
                .removeClass('btn-danger').addClass('btn-success');
        } else {
            running = true;
            $('#stop').text('STOP')
                .removeClass('btn-success').addClass('btn-danger');
            $('.mix:first-child').width('auto')
            $('.mix:first-child h1').remove();
            $('.mix:first-child img').animate({
                height: "60px",
                width: "60px"
            }, 2000, function(){
                $('#trig').trigger('click');
            });
        }
    });

    // Instantiate MixItUp:
    $('#mixitup').mixItUp({
        animation: {
            duration: 1500
        },
        callbacks: {
            onMixEnd: function(state) {
                if(running === true) {
                    $('#trig').trigger('click');
                } else {
                    $('.mix:first-child').addClass('text-center').width('100%').append('<h1 class="hide text-danger"><span class="text-warning">Congratulations:</span><br/>' + $('.mix a').attr('title') + '<br/></h1>');
                    $('.mix:first-child img').animate({
                        height: "300px",
                        width: "300px"
                    }, 2000, function(){
                        $('.mix:first-child h1').removeClass('hide');
                    });
                }
            }
        }
    });
})
