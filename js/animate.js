$(document).ready(function() {

    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated fadeInLeft');
    }, {
      offset: '80%'
    })

    $('.js--wp-5').waypoint(function(direction) {
      $('.js--wp-5').addClass('animated pulse');
    }, {
      offset: '90%'
    })

    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    }, {
      offset: '100%'
    })

    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeIn');
    }, {
      offset: '100%'
    })

    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    }, {
      offset: '100%'
    })

});