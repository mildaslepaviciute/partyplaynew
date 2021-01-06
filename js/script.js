// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

// BUTTER INIT

butter.init({
    wrapperId: 'butter'
});

butter.init({
    cancelOnTouch: true
});

// GAMES FILTER

$("#option1-toggle").click(function(){
    $(".option-content").removeClass("d-flex");
    $(".option-content").addClass("d-none");
    $("#option1").removeClass("d-none");
    $("#option1").addClass("d-flex");
    $(".option-toggle").removeClass("option-toggle-active");
    $("#option1-toggle").addClass("option-toggle-active");
});

$("#option2-toggle").click(function(){
    $(".option-content").removeClass("d-flex");
    $(".option-content").addClass("d-none");
    $("#option2").removeClass("d-none");
    $("#option2").addClass("d-flex");
    $(".option-toggle").removeClass("option-toggle-active");
    $("#option2-toggle").addClass("option-toggle-active");
});

$("#option3-toggle").click(function(){
    $(".option-content").removeClass("d-flex");
    $(".option-content").addClass("d-none");
    $("#option3").removeClass("d-none");
    $("#option3").addClass("d-flex");
    $(".option-toggle").removeClass("option-toggle-active");
    $("#option3-toggle").addClass("option-toggle-active");
});

$("#option4-toggle").click(function(){
    $(".option-content").removeClass("d-flex");
    $(".option-content").addClass("d-none");
    $("#option4").removeClass("d-none");
    $("#option4").addClass("d-flex");
    $(".option-toggle").removeClass("option-toggle-active");
    $("#option4-toggle").addClass("option-toggle-active");
});

$("#option5-toggle").click(function(){
    $(".option-content").removeClass("d-flex");
    $(".option-content").addClass("d-none");
    $("#option5").removeClass("d-none");
    $("#option5").addClass("d-flex");
    $(".option-toggle").removeClass("option-toggle-active");
    $("#option5-toggle").addClass("option-toggle-active");
});


// RANGE 

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// // STEPS

// $("#circle1").click(function(){
//     $("#circle2").removeClass("circle-active");
//     $(".circle-xs2").removeClass("circle-xs-active");
//     $("#circle3").removeClass("circle-active");
//     $(".circle-xs3").removeClass("circle-xs-active");
//     $("#circle4").removeClass("circle-active");
//     $(".circle-xs4").removeClass("circle-xs-active");
// });

// $("#circle2").click(function(){
//     $("#circle2").addClass("circle-active");
//     $(".circle-xs2").addClass("circle-xs-active");
//     $("#step-text2").removeClass("d-none");
//     $("#step-text2").addClass("d-block");
//     $("#circle3").removeClass("circle-active");
//     $(".circle-xs3").removeClass("circle-xs-active");
//     $("#circle4").removeClass("circle-active");
//     $(".circle-xs4").removeClass("circle-xs-active");
// });

// $("#circle3").click(function(){
//     $("#circle2").addClass("circle-active");
//     $(".circle-xs2").addClass("circle-xs-active");
//     $("#circle3").addClass("circle-active");
//     $(".circle-xs3").addClass("circle-xs-active");
//     $("#circle4").removeClass("circle-active");
//     $(".circle-xs4").removeClass("circle-xs-active");
// });

// $("#circle4").click(function(){
//     $("#circle2").addClass("circle-active");
//     $(".circle-xs2").addClass("circle-xs-active");
//     $("#circle3").addClass("circle-active");
//     $(".circle-xs3").addClass("circle-xs-active");
//     $("#circle4").addClass("circle-active");
//     $(".circle-xs4").addClass("circle-xs-active");
// });