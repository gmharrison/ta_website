/* global $ */
$(function(){
    
    var academic = false;
    var cornerstone = false;
    var echelon = false;
    var nextSlideID = $('.slide').first().data('next');
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
        if(!prevSlideID) $('#back-btn').hide();
        else $('#back-btn').show();
        $(window).scrollTop(0);
    }
    
    function enableProgramSections(className, enabledBool){
        if(enabledBool){
            console.log('show: ' + className);
            $('.' + className).show();
        }
        else{
            console.log('hide: ' + className);
            $('.' + className).hide();
        }
        
    }
    
    // Page load set up
    $(".slide").each(function(e) {if (e != 0) $(this).hide();});                    // hide all slides except first
    $('.survey-section').hide();
    $('.default-section').show();
    
    $("#next").click(function(e){
        showSlide(nextSlideID);
        e.preventDefault();
        return false;
    });                          // next button selects slide using nextSlideID
    $('#back-btn').click(function(){showSlide(prevSlideID);});                      // back button selects slide using prevSlideID
    $(".btn.survey-select").click(function(){$(this).toggleClass("active");});      // survey select buttons toggle .active on click
    
    $('.program-select').click(function(){ // enables questions specific to certain programs
        console.log('select');
        if($(this).hasClass('academic')){
            
            academic = !academic;
            console.log(academic);
            enableProgramSections('questionAcademic', academic);
        }
        else if($(this).hasClass('cornerstone')){
            
            cornerstone = !cornerstone;
            console.log(cornerstone);
            enableProgramSections('questionCornerstone', cornerstone);
        }
        else if($(this).hasClass('echelon')){
            
            echelon = !echelon;
            console.log(echelon);
            enableProgramSections('questionEchelon', echelon);
        }
        
    }); 
    
});
    