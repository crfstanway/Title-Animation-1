$(document).ready(function() {
  $('.title-container').on('mouseover', function(){
    $('#title-1, #title-2, #title-3, #title-4, #title-5').addClass('back-col');
    console.log('mouseover');
  })
  $('.title-container').on('mouseleave', function(){
    $('#title-1, #title-2, #title-3, #title-4, #title-5').removeClass('back-col');
    console.log('mouseleave');
  })
});
