// JavaScript - Accordion


const $thePanes = $('.accordion-container > div');

$thePanes.hide();

// uncomment the next line if you'd like the first pane to be visible by default
// $('#bio > div:first').show();

// Store the h2 elements so that jQuery does not have to keep selecting them
// everytime the h2 tag is clicked
const $tabs = $('.accordion-container h2');

$tabs.click(function() {
  
  const $thisPane = $(this).next();
  
  if($thisPane.is(':visible')){
	  $thisPane.slideUp();	
  }else{
	  $thePanes.slideUp();	
	  $thisPane.slideDown();
  };
  
});

//---------------------------------------------------