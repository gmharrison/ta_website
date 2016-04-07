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
    $(".slide").each(function(e) {if (e != 0) $(this).hide();});                    // hide all slides except first
    $(".btn.survey-select").click(function(){$(this).toggleClass("active");});      // survey select buttons toggle .active on click
    $('.next-slide-select').click(function(){nextSlideID = $(this).data('next');}); // survey select saves nextSlideID
    $("#next").click(function(){showSlide(nextSlideID);});                          // next button selects slide using nextSlideID
    $('#back-btn').click(function(){showSlide(prevSlideID);});                      // back button selects slide using prevSlideID
    
});
    