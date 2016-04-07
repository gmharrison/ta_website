/* global $ */
$(function(){
    
    var academic = false;
    var cornerstone = false;
    var echelon = false;
    var nextSlideID = '';
    var prevSlideID = '';
    
    function showSlide(slideID_or_$){
        if (typeof slideID_or_$ == "undefined" || slideID_or_$ == '' || slideID_or_$ == null){
            
            // TODO This occurs when the user probably hasn't picked an option yet
            console.log('No Slide ID, maybe user has not picked an opiton');
            return;
        }
        
        $(".slide").removeClass('active').hide();
        if (typeof slideID_or_$ === 'string') var $slide = $('#' + slideID_or_$);
        else var $slide = slideID_or_$;
        $slide.show().addClass('active');
        nextSlideID = $slide.data('next');
        prevSlideID = $slide.data('previous');
        
    }
    
    // Page load set up
    $(".btn.survey-select").click(function(){$(this).toggleClass("active");});      // survey select buttons toggle .active on click
    $('.next-slide-select').click(function(){nextSlideID = $(this).data('next');}); // survey select saves next slide ID
    $(".slide").each(function(e) {if (e != 0) $(this).hide();});                    // hide all slides except first 

    $("#next").click(function(){
        
        showSlide(nextSlideID);
        
        // if ($(".slide:visible").next().length != 0){
        //     // if the slide has a next slide, show that, hide this
        //     var nextSlide = $(".slide:visible").next().show();
        //     nextSlide.prev().hide();
        //     nextSlide.addClass('active');
        // }
        // else {
        //     // if the slide doesn't have a next slide, show the first slide
        //     $(".slide:visible").hide();
        //     $(".slide:first").show();
        // }
        // return false;
    });

    // We don't need a generic "previous" button because
    // we can't determine the previous slide from any current slide
    // $("#prev").click(function(){
    //     if ($(".slide:visible").prev().length != 0)
    //         $(".slide:visible").prev().show().next().hide();
    //     else {
    //         $(".slide:visible").hide();
    //         $(".slide:last").show();
    //     }
    //     return false;
    // });
    
    // This back button uses data on the slide 
    // to know which slide is the previous slide.
    $('#back-btn').click(function(){
        showSlide(prevSlideID);
    });
    
    // Select subject on the first slide
    
});
    