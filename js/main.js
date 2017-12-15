$(document).ready(() => {
	$('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  });

  $('.menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  $('.btn').on('mouseenter', event => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  });

  $('.postText').on('keyup', () => {
    $('.postText').focus();
    var post = $(event.currentTarget).val();
    var remaining = 140 - post.length;
    if (remaining <=0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
  });




});
