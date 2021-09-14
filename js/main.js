// JavaScript Document

$(document).ready(function () {
            //collapsible panel jquery expand all
            var active = false;
            $('.fa-arrows-alt').click(function () {
                if (active) {
                    active = false;
                    $('.panel-collapse').collapse('show');
                    $('.panel-title').attr('data-toggle', '');
                    
                } else {
                    active = true;
                    $('.panel-collapse').collapse('hide');
                    $('.panel-title').attr('data-toggle', 'collapse');
                    
                }
            });
            $('#accordion').on('show.bs.collapse', function () {
                if (active) $('#accordion.in').collapse('hide');
            });
               
				
            
        });
		
$(function () {
	$('.tlt').textillate({ in: { effect: 'fadeInDownBig', delay:100 } });
		
});




     //Single Box slide toggle
        var head = $('#content').find('.category-head');
        var status = 'open';

        head.addClass('add-border');

        head.click(function() {
          $(this).siblings('ul').slideToggle(300, function() {
            $(this).siblings('div').toggleClass('remove-border');
          });
        });

document.addEventListener("DOMContentLoaded", function(event) { 

// Uses sharer.js 
//  https://ellisonleao.github.io/sharer.js/#twitter	
   var url = window.location.href;
   var title = document.title;
   var subject = "Read this good article";
   var via = "bootstrapC";
   console.log( url );
    console.log( title );


//facebook
$('#share-fb').attr('data-url', url).attr('data-sharer', 'facebook');
//twitter
$('#share-tw').attr('data-url', url).attr('data-sharer', 'twitter');
//linkedin
$('#share-li').attr('data-url', url).attr('data-sharer', 'linkedin');
// google plus
$('#share-gp').attr('data-url', url).attr('data-sharer', 'googleplus');
  // email
  $('#share-em').attr('data-url', url).attr('data-subject', subject).attr('data-sharer', 'email');
	//whatsapp
	$('#share-wa').attr('data-url', url).attr('data-title', title).attr('data-sharer', 'whatsapp');

//Prevent basic click behavior
$( ".sharer button" ).click(function() {
  event.preventDefault();
});


});
        
