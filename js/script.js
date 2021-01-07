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