'use strict';

(function($){
	$.fn.extend({leanModal:function(options){
	var defaults={top:100,overlay:0.5,closeButton:null};
	var overlay=$('<div id="lean_overlay"></div>');
	$('body').append(overlay);
	options=$.extend(defaults,options);
	return this.each(function(){
		var o=options;
		$(this).click(function(e){
			var modal_id=$(this).attr('href');
			$('#lean_overlay').click(
				function(){
					close_modal(modal_id)
				});
		$(o.closeButton).click(function(){
			close_modal(modal_id)
		});
		var modal_height=$(modal_id).outerHeight();
		var modal_width=$(modal_id).outerWidth();

		$('#lean_overlay').css({'display':'block',opacity:0});
		$('#lean_overlay').fadeTo(200,o.overlay);
		$(modal_id).css({'display':'block','position':'fixed','opacity':0,'z-index':11000,'left':50+'%','margin-left':-(modal_width/2)+'px','top':o.top+'px'});
		$(modal_id).fadeTo(200,1);e.preventDefault()
			})
		});

		function close_modal(modal_id){
			$('#lean_overlay').fadeOut(200);
			$(modal_id).css({'display':'none'})
		}
	}
  })

})(jQuery);


(function ($) {
			
	$('.bxslider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 5
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$('html, body').animate({ scrollTop: 0 }, 1000);
				return false;
		});

$('.choose').click(function() {
  $('.choose').addClass('active');
  $('.choose > .icon').addClass('active');
  $('.pay').removeClass('active');
  $('.wrap').removeClass('active');
  $('.ship').removeClass('active');
  $('.pay > .icon').removeClass('active');
  $('.wrap > .icon').removeClass('active');
  $('.ship > .icon').removeClass('active');
  $('#line').addClass('one');
  $('#line').removeClass('two');
  $('#line').removeClass('three');
  $('#line').removeClass('four');
});

$('.pay').click(function() {
  $('.pay').addClass('active');
  $('.pay > .icon').addClass('active');
  $('.choose').removeClass('active');
  $('.wrap').removeClass('active');
  $('.ship').removeClass('active');
  $('.choose > .icon').removeClass('active');
  $('.wrap > .icon').removeClass('active');
  $('.ship > .icon').removeClass('active');
  $('#line').addClass('two');
  $('#line').removeClass('one');
  $('#line').removeClass('three');
  $('#line').removeClass('four');
});

$('.wrap').click(function() {
  $('.wrap').addClass('active');
  $('.wrap > .icon').addClass('active');
  $('.pay').removeClass('active');
  $('.choose').removeClass('active');
  $('.ship').removeClass('active');
  $('.pay > .icon').removeClass('active');
  $('.choose > .icon').removeClass('active');
  $('.ship > .icon').removeClass('active');
  $('#line').addClass('three');
  $('#line').removeClass('two');
  $('#line').removeClass('one');
  $('#line').removeClass('four');
});

$('.ship').click(function() {
  $('.ship').addClass('active');
  $('.ship > .icon').addClass('active');
  $('.pay').removeClass('active');
  $('.wrap').removeClass('active');
  $('.choose').removeClass('active');
  $('.pay > .icon').removeClass('active');
  $('.wrap > .icon').removeClass('active');
  $('.choose > .icon').removeClass('active');
  $('#line').addClass('four');
  $('#line').removeClass('two');
  $('#line').removeClass('three');
  $('#line').removeClass('one');
});

$('.choose').click(function() {
  $('#first').addClass('active');
  $('#second').removeClass('active');
  $('#third').removeClass('active');
  $('#fourth').removeClass('active');
});

$('.pay').click(function() {
  $('#first').removeClass('active');
  $('#second').addClass('active');
  $('#third').removeClass('active');
  $('#fourth').removeClass('active');
});

$('.wrap').click(function() {
  $('#first').removeClass('active');
  $('#second').removeClass('active');
  $('#third').addClass('active');
  $('#fourth').removeClass('active');
});

$('.ship').click(function() {
  $('#first').removeClass('active');
  $('#second').removeClass('active');
  $('#third').removeClass('active');
  $('#fourth').addClass('active');
});

  // vars for testimonials carousel
  var $txtcarousel = $('#testimonial-list');
  var txtcount = $txtcarousel.children().length;
  var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750; // milliseconds for clients carousel
 
  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('#testimonial-list li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('#testimonial-list li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime); 
  });
  
  $('#nxt-testimonial').on('click', function(){
    var $first = $('#testimonial-list li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
    });  
  });

  // vars for clients list carousel
  // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
 /* var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 140); // 140px width for each client item 
  $clientcarousel.css('width',clientwidth);
  
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  
  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#clients');
  
  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({ 'margin-left': '-140px' }, 600, function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#clients-list li:last').after($first);
      });
    }
  }*/


})(jQuery);

console.log('\'Allo \'Allo!');