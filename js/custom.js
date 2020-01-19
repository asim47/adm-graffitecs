
/* Global Variables*/


var SAEED_MODULES = [];

SAEED_MODULES['saeed-news']						='1';
SAEED_MODULES['saeed-posts']					='2';
SAEED_MODULES['saeed-suggestions']				='3';
SAEED_MODULES['saeed-fileDirectory']			='4';
SAEED_MODULES['saeed-galary']					='5';
SAEED_MODULES['saeed-empOfMonth']				='6';
SAEED_MODULES['saeed-announcements']			='7';
SAEED_MODULES['saeed-skills-directory']			='8';
SAEED_MODULES['saeed-tasks']					='9';
SAEED_MODULES['saeed-achievements']				='10';
SAEED_MODULES['saeed-managers-substitution']	='11';
SAEED_MODULES['saeed-events']					='12';
SAEED_MODULES['saeed-org-links']				='13';
SAEED_MODULES['saeed-my-links']					='14';
SAEED_MODULES['saeed-souq']						='15';
SAEED_MODULES['saeed-user-profile']				='16';
SAEED_MODULES['saeed-discounts']				='17';
SAEED_MODULES['saeed-assign-privelleges']		='18';
SAEED_MODULES['saeed-assign-manager']			='19';
SAEED_MODULES['saeed-souq']						='20';
SAEED_MODULES['saeed-knowledge']				='21';
SAEED_MODULES['saeed-comments']					='23';
SAEED_MODULES['saeed-partnership']				='45';
SAEED_MODULES['saeed-social-responsibility']	='56';

clientSideMaxfileSizeInMB = 500;


alertify.set('notifier','position', 'top-center');
$('.alertify-notifier').css("z-index","99999999");
//alertify.set('notifier','delay', 2);

/* jssor slider js start */



 jssor_1_slider_init = function() {
     var jssor_1_SlideshowTransitions = [
         { $Duration: 1200, x: 0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: -0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: -0.3, $During: { $Left: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: 0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: -0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: -0.3, $During: { $Top: [0.3, 0.7] }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: 0.3, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, $Cols: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: 0.3, $Rows: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: 0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, y: -0.3, $Cols: 2, $SlideOut: true, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, $Rows: 2, $During: { $Left: [0.3, 0.7] }, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: -0.3, $Rows: 2, $SlideOut: true, $ChessMode: { $Row: 3 }, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, x: 0.3, y: 0.3, $Cols: 2, $Rows: 2, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, $Delay: 20, $Clip: 3, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, $Delay: 20, $Clip: 12, $Assembly: 260, $Easing: { $Clip: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
         { $Duration: 1200, $Delay: 20, $Clip: 12, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
     ];

     var jssor_1_options = {
         $AutoPlay: 1,
         $SlideshowOptions: {
             $Class: $JssorSlideshowRunner$,
             $Transitions: jssor_1_SlideshowTransitions,
             $TransitionsOrder: 1
         },
         $ArrowNavigatorOptions: {
             $Class: $JssorArrowNavigator$
         },
         $ThumbnailNavigatorOptions: {
             $Class: $JssorThumbnailNavigator$,
             $SpacingX: 30,
             $SpacingY: 30
         }
     };

     var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

     /*#region responsive code begin*/

     var MAX_WIDTH = 980;

     function ScaleSlider() {
         var containerElement = jssor_1_slider.$Elmt.parentNode;
         var containerWidth = containerElement.clientWidth;

         if (containerWidth) {

             var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

             jssor_1_slider.$ScaleWidth(expectedWidth);
         } else {
             window.setTimeout(ScaleSlider, 30);
         }
     }

     ScaleSlider();

     $Jssor$.$AddEvent(window, "load", ScaleSlider);
     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
	 /*#endregion responsive code end*/
 };
 
 if($('#gallery_demo, #souq_gallery_demo').length > 0){
    jssor_1_slider_init();
 } 

 /* jssor slider js end */


 /*mobile menu start*/
$(document).ready(function() {

    $(".navbar-toggle").on('click', function(e) {
        e.stopPropagation();
        $(".sidebar-menu").toggleClass('active');
    });

	 /*$(".assistance").on('click', function(e) {
        e.stopPropagation();
        $(".tech-support").toggleClass('active');	 
    });*/
    
    $(".assistance").on('click', function(e) {
        e.stopPropagation();
        $("#exampleModalCenter").modal("toggle"); 
    });
    
});

$(document).ready(function() {
    $('#myNavbar').on('click', function() {
        $(this).toggleClass('open');
    });

});

/*mobile menu end*/

/*post detail popup start*/

$(document).ready(function() {
   
	
//	$("body").on('click','li.like a', function(){
//	$(this).find('img').addClass('liked').attr('src', '../images/likeHover.png');
//	$(this).addClass('liked');
//		return false;
//	});

/*
	$('.post-one .post-detail > img').on('click', function(){
		var img = $(this).attr('src');
		$('.post_popup .post_content img').attr('src',img);
	});
	$('.post-one .post-detail h6').on('click', function(){
		var img = $(this).siblings('img').attr('src');
		$('.post_popup .post_content img').attr('src',img);
	});
	*/
  
/*$("body").on('click','.main_body', function() {
        $('body').removeClass('timeline_active');
    });

 $("body").on('click','.popup_close', function() {
	 $('body').removeClass('timeline_active');
			
    });

 
    $("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_form');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_modify_form');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_add_folder');
       
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_add_edit_activity');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_add_files');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_add_activity');
    });
    $("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_skills_activity');
    });
    $("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_job_activity');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_edu_activity');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_projects_activity');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_honours_activity');
    });
    $("body").on('click','.main_body', function() {
        $('body').removeClass('active_certification_activity');
    });	
    
    $("body").on('click','.main_body, .remove_gallery_form', function() {
        $('body').removeClass('active_gallery_form');
    });

    $("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_org_form');
    });
    
	$("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_souq_popup');
    });

	$("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_add_dis_form');
    });

	$("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_manager_popup');
    });
	$("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_group_form');
    });
	$("body").on('click','.main_body, .remove_form', function() {
        $('body').removeClass('active_event_popup');
    });
	$("body").on('click',".main_body, .remove_form", function() {
        $('body').removeClass('active_profile_skills');
    });
	
  
	
	 $("body").on('click','.office_boy_popup', function(){
        $(".office_boy_popup").toggleClass('active_office_boy_popup');
        $("body").append('<div class="popup_close"></div>');
    });
	
	

	$("body").on('click','.counter_count .nav-tabs .nav-item', function(){
		$('.counter_count .nav-tabs .nav-item').removeClass('active');
        $(this).toggleClass('active');
    });*/
	
	$("body").on('.new-gallery-title .new-galley', function(){
		$('.new-gallery-title .new-galley').removeClass('collapsed');
        $(this).toggleClass('collapsed');
        $("body").append('<div class="popup_close"></div>');
    });

	////////My Links////////
	
	
	function isValidURL(str) {
		regexp =   /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//		  var pattern = new RegExp('^(http(s)?:\/\/)?'+ // protocol
//		  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
//		  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//		  '(\\:\\d+)?'+ // port
//		  '(\/[-a-zA-Z\/d%@_.~+&:]*)*'+ // path
//		  '(\\?[;&a-zA-Z\/d%@_.,~+&:=-]*)?'+ // query string
//		  '(\\#[-a-zA-Z\/d_]*)?$','g'); // fragment locator
		  return regexp.test(str);
		}
	
	function openURLInNewTab(url){
	      if (url.indexOf('https://')==-1 && url.indexOf('http://')==-1) {
	          url = 'http://' + url
	      };		
	      window.open(url, '_blank');
    }
	
	function clearLinksForm(){
		 var form = $('.gtx-mylinks-detail-add').find('form.org-user-links-form');
		 form.find('input,textarea').val('');
	 }
	

	$("body").on('click',".gtx-mylinks-detail-add .gtx-form-section-mylinks .view_links_info , #linksWidget .linkHref, .organizationLinks .view_links_info ", function(e) {
		e.stopPropagation();

		var parent = $(this).closest('.linkRow');
		
		var url = parent.attr('data-href');
		if(isValidURL(url)){
			openURLInNewTab(url);
		}else{
			alertify.error(messages['invalidurl']).dismissOthers(); 
		}
    });
	

	$("body").on('click',".gtx-mylinks-detail-add .gtx-form-section-mylinks .btn-editmode-link, .organizationLinks .btn-editmode-link", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_org_form');
        $(".popup_close").css("display", "block");
    });
	
	 $(".gtx-mylinks-detail-add .plus_button_links").on('click', function(e) {
		 e.stopPropagation();
		 $("body").toggleClass('active_org_form');
		 $(".popup_close").css("display", "block");

		 //clearLinksForm();
    });
	
	 
	 
	
	
	
	//////////////////
	 $("body").on('click', function() {
		 
		 //$('body').removeClass('active');
		 //$(".popup_close").css("display", "none");
	 });
	  $(".popup_close").on('click', function() {
		// alert('here');
		 $('body').removeClass('active');
		 $('body').removeClass('active_add_files');
		 $('body').removeClass('active_add_folder');
		 
	        $('body').removeClass('active_add_files');
	        $('body').removeClass('active_skills_activity');
	        $('body').removeClass('active_timeline');
	        $('body').removeClass('active_form');
	        $('body').removeClass('active_dis_form');
	        $('body').removeClass('active_manager_popup');
	        $('body').removeClass('active_add_edit_activity');
	        $('body').removeClass('active_add_activity');
	        $('body').removeClass('active_job_activity');
	        $('body').removeClass('active_edu_activity');
	        $('body').removeClass('active_projects_activity');
	        $('body').removeClass('active_honours_activity');
	        $('body').removeClass('active_certification_activity');
	        $('body').removeClass('active_gallery_form');
	        $('body').removeClass('active_souq_popup');
	        $('body').removeClass('active_add_dis_form');
	        $('body').removeClass('active_group_form');
	        $('body').removeClass('active_event_popup');
	        $('body').removeClass('active_profile_skills');
	        $('body').removeClass('active_modify_form');
	        $('body').removeClass('active_office_boy_popup1');
			$('body').removeClass('active_org_form');
			 $('body').removeClass('active_circ_popup');
	        $(".office_boy_popup").removeClass('active_office_boy_popup');
	        $(".popup_close").css("display", "none");
		   // $('body').find('.popup_close').remove();
		});


	  $("body").on('click','.office-boy', function(){
	        $(".office_boy_popup").toggleClass('active_office_boy_popup');
	        $("body").toggleClass('active_office_boy_popup1');
	        
	        $(".popup_close").css("display", "block");
	    });
	  
	  $("body").on('.office_boy_cancel', function(){
	        $(".office_boy_popup").removeClass('active_office_boy_popup');
	        $(".popup_close").css("display", "none");
	        
	    });
		
		$("body").on('.detail-btn', function(){
	        $(".detail_order_popup").toggleClass('active_detail_order_popup');
	        $(".popup_close").css("display", "none");
		});
	  
		$("body").on('click','#main-sec .post-one h6, #main-sec .see_more,  #main-sec .post-one .post-detail > img, #main-sec .post-detail h6, #main-sec .post-two h6, #main-sec .post-two .post-detail > img, #main-sec .post-three h6, #main-sec .post-three .post-detail > img, #main-sec .gal > img', function(e) {
	        e.stopPropagation();
	        $("body").toggleClass('active');
	        $(".popup_close").css("display", "block");
        
    });
	
		
    /*
    $("body").on('click','.post-three .postImage', function(e) {
    	e.stopPropagation();
        $("body").toggleClass('active');
        $(".popup_close").css("display", "block");
        
    });*/
    
    
    
    
    $("body").on('click',"#main-sec button.add_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_form');
        $(".popup_close").css("display", "block");
    });

	$("body").on('click',"#main-sec .news_feed button.modify_btn", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_modify_form');
        $(".popup_close").css("display", "block");
    });
	$("#main-sec .group_search button.add_button").on('click', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_group_form');
        $(".popup_close").css("display", "block");
    });
	$("body").on('click',"#main-sec .file_user_folder ul li.add_folder button", function(e) {
        $("body").toggleClass('active_add_folder');
        $("#folderName").focus();
        $(".popup_close").css("display", "block");
    });

	$("body").on('click',"#main-sec .file_user_folder ul li.add_files button", function(e) {
        $("body").toggleClass('active_add_files');
        $(".popup_close").css("display", "block");
    });
	$("body").on('click',"#main-sec .file_user_activity ul li.add_files button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_add_activity');
        $(".popup_close").css("display", "block");
    });

	$("body").on('click',"#main-sec .updates button.skill_add_button", function(e) {
        e.stopPropagation();
       
        $("body").toggleClass('active_skills_activity');
        $(".popup_close").css("display", "block");
        //--> initiate dropdown multiselect.
        $('.form-control-chosen').chosen({
            allow_single_deselect: true,
            width: '100%',    
        });
        
        
    });
	
	$("body").on('click',"#main-sec .new-gallery-wrap button.add_button, #main-sec .new-gallery-wrap .new-galley .plus_layer, #main-sec .new-gallery-head .add_gallery", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_gallery_form');
        $(".popup_close").css("display", "block");
        
    });
	
	$("body").on('click',"#main-sec .org-unit-wrap .gtx-header-right .plus_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_org_form');
        $(".popup_close").css("display", "block");
    });


	$("body").on('click',"#main-sec .event_add_icon a.add_event", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_event_popup');
        $(".popup_close").css("display", "block");
    });

	
	
	$("body").on('click','#main-sec .souq_search_fields button.add_button', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_souq_popup');
        $(".popup_close").css("display", "block");
    });
	
	
	
	$("body").on('click','#main-sec .circ_search_fields button.add_button', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_souq_popup');
        $(".popup_close").css("display", "block");
    });
	
	$("body").on('click','#main-sec .mag_search_fields button.add_button', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_souq_popup');
        $(".popup_close").css("display", "block");
    });
	
	
	$("body").on('click',"#main-sec .add_discount", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_add_dis_form');
        $(".popup_close").css("display", "block");
    });
$("body").on('click',"#main-sec .add_comment-box", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_add_dis_form');
        $(".popup_close").css("display", "block");
    });
	$("body").on('click','#main-sec .discount_n_offer .comment_detail h3, #main-sec .discount_n_offer .comment_detail .lstCompTitle, #main-sec .discount_n_offer .comment_detail .partnership_img, #main-sec .discount_n_offer .comment_detail h2, #main-sec .discount_n_offer .comment_detail p, #main-sec .discount_n_offer .user_img > img, .achivement_detail', function(e) {
	        e.stopPropagation();
	        $("body").toggleClass('active_dis_form');
	        $(".popup_close").css("display", "block");
	    });

	$("body").on('click','#main-sec .manager_add button.skill_add_button, #main-sec .mgr-edit-schedule', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_manager_popup');
        $(".popup_close").css("display", "block");
    });

	$("body").on('click',"#main-sec .gtx-skills-detail .plus_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_profile_skills');
        $(".popup_close").css("display", "block");
		jQuery("#subSkills").attr('disabled',false);
		jQuery("#skillsCategory").attr('disabled',false);
        
        
    });
	
	

    /* Changed the repeated code to common functions */

	$("body").on('click',"#main-sec .gtx-content-profile .gtx-form-section-job  .skill_add_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_job_activity');
        $(".popup_close").css("display", "block");
        jobCommonScript('view',$(this));

    });
	$("body").on('click',"#main-sec .gtx-content-profile .gtx-form-section-job .btn-editmode", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_job_activity');
        $(".popup_close").css("display", "block");
        jobCommonScript('edit',$(this));

    });
	$("body").on('click',".gtx-history-detail .plus_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_job_activity');
        $(".popup_close").css("display", "block");
        jobCommonScript('add',$(this));
    });
	
	function  jobCommonScript(event_action, row){
		//console.log(row.find('indexRow').text());

		var form = $('.gtx-history-detail').find('form.add-new-job');
		
		if(event_action == 'add' || event_action == "edit"){
		form.find('.gtx-save-bottom').removeClass('hide');
		form.find('input,textarea').prop("disabled", false);
		}else {
		form.find('.gtx-save-bottom').addClass('hide');	
		form.find('input,textarea').attr("disabled", 'disabled');
		}
		
		form.show();
		if(event_action == 'add'){
			form.find('input:not(#jobHistory_textRangeFrom,#jobHistory_textRangeTo),textarea').val('');
		}
		
	}
	
	$("body").on('click',"#main-sec .gtx-content-profile .gtx-form-section-edu .skill_add_button", function(e) {
        e.stopPropagation();
        //BACKHERE
       // debugger;
        $("body").toggleClass('active_edu_activity');
        $(".popup_close").css("display", "block");
        educationCommonScript('view',$(this));
		//var form_edit = $('.gtx-education-detail').find('form.view-edu-data');
		//var form_add = $('.gtx-education-detail').find('form.add-edu-data')
		//form_edit.find('input,textarea').attr("disabled", 'disabled');
	//	form_edit.find('.gtx-save-bottom').addClass('hide');
		//form_edit.show();
		//form_add.hide();
    });
	$("body").on('click',"#main-sec .gtx-content-profile .gtx-form-section-edu .btn-editmode", function(e) {
		e.stopPropagation();
        $("body").toggleClass('active_edu_activity');
        $(".popup_close").css("display", "block");
        educationCommonScript('edit',$(this));
        //var form_edit = $('.gtx-education-detail').find('form.view-edu-data');
		//var form_add = $('.gtx-education-detail').find('form.add-edu-data')
		//form_edit.find('input,textarea').prop("disabled", false);
		//form_edit.find('.gtx-save-bottom').removeClass('hide');
		//form_edit.show();
		//form_add.hide();
    });
	$("body").on('click',".gtx-education-detail .plus_button", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_edu_activity');
        $(".popup_close").css("display", "block");
        educationCommonScript('add',$(this));
		//$('.gtx-education-detail').find('form.view-edu-data').hide();
		//var form = $('.gtx-education-detail').find('form.add-edu-data');
		//form.show();
		//form.find('input:not(#edu_textRangeFrom,#edu_textRangeTo),textarea').val('');
    });
	
	
	function  educationCommonScript(event_action, row){
		//console.log(row.find('indexRow').text());
	//	debugger;
		var form = $('.gtx-education-detail').find('form.view-edu-data');
		
		if(event_action == 'add' || event_action == "edit"){
		form.find('.gtx-save-bottom').removeClass('hide');
		form.find('input,textarea').prop("disabled", false);
		}else {
			form.find('.gtx-save-bottom').addClass('hide');	
			form.find('input,textarea').attr("disabled", 'disabled');
		}
		
		form.show();
		
		if(event_action == 'add'){
			form.find('input:not(#edu_textRangeFrom,#edu_textRangeTo),textarea').val('');
		}
		
	}
	
	
	
	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-certification .certification", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_certification_activity');
        $(".popup_close").css("display", "block");
        certificationCommonScript('view',$(this));
        
		//var form_edit = $('.gtx-achievements-detail').find('form.view-certification-data');
		//var form_add = $('.gtx-achievements-detail').find('form.add-certification-data')
		//form_edit.find('input,textarea').attr("disabled", 'disabled');
		//form_edit.find('.gtx-save-bottom').addClass('hide');
		//form_edit.show();
		//form_add.hide();
    });
	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-certification .btn-editmode", function(e) {
		e.stopPropagation();
        $("body").toggleClass('active_certification_activity');
        $(".popup_close").css("display", "block");
        certificationCommonScript('edit',$(this));
   //     var form_edit = $('.gtx-achievements-detail').find('form.view-certification-data');
//		var form_add = $('.gtx-achievements-detail').find('form.add-certification-data')
	//	form_edit.find('input,textarea').prop("disabled", false);
		//form_edit.find('.gtx-save-bottom').removeClass('hide');
		//form_edit.show();
		//form_add.hide();
    });
	$("body").on('click',".gtx-achievements-detail .plus_button1", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_certification_activity');
        $(".popup_close").css("display", "block");
        certificationCommonScript('add',$(this));
		//$('.gtx-achievements-detail').find('form.view-certification-data').hide();
	//	var form = $('.gtx-achievements-detail').find('form.add-certification-data');
	//	form.show();
		//form.find('input:not(#achivement_textRangeFrom,#achivement_textRangeTo),textarea').val('');
    });
	
	
	function  certificationCommonScript(event_action, row){
		//console.log(row.find('indexRow').text());
	//	debugger;
		var form =  $('.gtx-achievements-detail').find('form.view-certification-data');
		
		if(event_action == 'add' || event_action == "edit"){
		form.find('.gtx-save-bottom').removeClass('hide');
		form.find('input,textarea').prop("disabled", false);
		}else {
			form.find('.gtx-save-bottom').addClass('hide');	
			form.find('input,textarea').attr("disabled", 'disabled');
		}
		
		form.show();
		
		if(event_action == 'add'){
			form.find('input:not(#achivement_textRangeFrom,#achivement_textRangeTo),textarea').val('');
		}
		
	}
	

	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-honours .honours", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_honours_activity');
        $(".popup_close").css("display", "block");
        honoursCommonScript('view',$(this));
        
		//var form_edit = $('.gtx-achievements-detail').find('form.view-achive-awards');
		//var form_add = $('.gtx-achievements-detail').find('form.add-achive-awards')
		//form_edit.find('input,textarea').attr("disabled", 'disabled');
		//form_edit.find('.gtx-save-bottom').addClass('hide');
		//form_edit.show();
		//form_add.hide();
    });
	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-honours .btn-editmode",function(e) {
		e.stopPropagation();
        $("body").toggleClass('active_honours_activity');
        $(".popup_close").css("display", "block");
        honoursCommonScript('edit',$(this));
       // var form_edit = $('.gtx-achievements-detail').find('form.view-achive-awards');
		//var form_add = $('.gtx-achievements-detail').find('form.add-achive-awards')
	//	form_edit.find('input,textarea').prop("disabled", false);
	//	form_edit.find('.gtx-save-bottom').removeClass('hide');
	//	form_edit.show();
	//	form_add.hide();
    });
	$(".gtx-achievements-detail .plus_button2").on('click', function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_honours_activity');
        $(".popup_close").css("display", "block");
        honoursCommonScript('add',$(this));
	//	$('.gtx-achievements-detail').find('form.view-achive-awards').hide();
	//	var form = $('.gtx-achievements-detail').find('form.add-achive-awards');
//		form.show();
	//	form.find('input:not(.date),textarea').val('');
    });
	
	
	function  honoursCommonScript(event_action, row){
		//console.log(row.find('indexRow').text());
	//	debugger;
		var form =  $('.gtx-achievements-detail').find('form.view-achive-awards');
		
		if(event_action == 'add' || event_action == "edit"){
		form.find('.gtx-save-bottom').removeClass('hide');
		form.find('input,textarea').prop("disabled", false);
		}else {
			form.find('.gtx-save-bottom').addClass('hide');	
			form.find('input,textarea').attr("disabled", 'disabled');
		}
		
		form.show();
		
		if(event_action == 'add'){
			form.find('input:not(.date),textarea').val('');
		}
		
	}
	
	
	
	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-projects .projects", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_projects_activity');
        $(".popup_close").css("display", "block");
        projectCommonScript('view',$(this));
	//	var form_edit = $('.gtx-achievements-detail').find('form.view-achive-projects');
	//	var form_add = $('.gtx-achievements-detail').find('form.add-achive-projects')
	//	form_edit.find('input,textarea').attr("disabled", 'disabled');
	//	form_edit.find('.gtx-save-bottom').addClass('hide');
	//	form_edit.show();
	//	form_add.hide();
    });
	$("body").on('click',".gtx-content-profile-certification .gtx-form-section-projects .btn-editmode", function(e) {
		e.stopPropagation();
        $("body").toggleClass('active_projects_activity');
        $(".popup_close").css("display", "block");
        projectCommonScript('edit',$(this));
    //    var form_edit = $('.gtx-achievements-detail').find('form.view-achive-projects');
//		var form_add = $('.gtx-achievements-detail').find('form.add-achive-projects')
//		form_edit.find('input,textarea').prop("disabled", false);
//		form_edit.find('.gtx-save-bottom').removeClass('hide');
//		form_edit.show();
//		form_add.hide();
    });
	$("body").on('click',".gtx-achievements-detail .plus_button3", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_projects_activity');
        $(".popup_close").css("display", "block");
        projectCommonScript('add',$(this));
	//	$('.gtx-achievements-detail').find('form.view-achive-projects').hide();
//		var form = $('.gtx-achievements-detail').find('form.add-achive-projects');
//		form.show();
//		form.find('input:not(.date),textarea').val('');
    });

	
	function  projectCommonScript(event_action, row){
		//console.log(row.find('indexRow').text());
	//	debugger;
		var form =  $('.gtx-achievements-detail').find('form.view-achive-projects');
		
		if(event_action == 'add' || event_action == "edit"){
		form.find('.gtx-save-bottom').removeClass('hide');
		form.find('input,textarea').prop("disabled", false);
		}else {
			form.find('.gtx-save-bottom').addClass('hide');	
			form.find('input,textarea').attr("disabled", 'disabled');
		}
		
		form.show();
		
		if(event_action == 'add'){
			form.find('input:not(.date),textarea').val('');
		}
		
	}


	$("body").on(".gtx-mylinks-detail-add .gtx-form-section-mylinks .view_links_info", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_org_form');
        $(".popup_close").css("display", "block");
        var form_edit = $('.gtx-mylinks-detail-add').find('form.view-mylinks-projects');
       // var form_edit = $('.gtx-mylinks-detail-add').find('form.add-mylinks-projects')
        form_edit.find('input,textarea').attr("disabled", 'disabled');
        form_edit.find('.gtx-save-bottom').addClass('hide');
        form_edit.show();
        form_add.hide();
    });
	$("body").on(".gtx-mylinks-detail-add .gtx-form-section-mylinks .btn-editmode-link", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_org_form');
        $(".popup_close").css("display", "block");
        var form_edit = $('.gtx-mylinks-detail-add').find('form.view-mylinks-projects');
        var form_add = $('.gtx-mylinks-detail-add').find('form.add-mylinks-projects')
        form_edit.find('input,textarea').prop("disabled", false);
        form_edit.find('.gtx-save-bottom').removeClass('hide');
        form_edit.show();
        form_add.hide();
    });
	
	 $("body").on(".gtx-mylinks-detail-add .plus_button_links", function(e) {
        e.stopPropagation();
        $("body").toggleClass('active_org_form');
        $(".popup_close").css("display", "block");
        $('.gtx-mylinks-detail-add').find('form.view-mylinks-projects').hide();
        var form = $('.gtx-mylinks-detail-add').find('form.add-mylinks-projects');
        form.show();
        form.find('input:not(#edu_textRangeFrom,#edu_textRangeTo),textarea').val('');
    });
	
	
	
	 /* Profile common functions end here*/
	

	
    // scroll
    if ($('.post_popup')[0]) {
        $(".post_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".post_popup").getNiceScroll().resize();
    }

    if ($('.updates_fields_popup')[0]) {
     
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });      
        
        $(".updates_fields_popup").scroll(function(){
        	  $(".updates_fields_popup").getNiceScroll().resize();
        	});
    }

   	 if ($('.new_media_gallery_popup')[0]) {
        $(".new_media_gallery_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".new_media_gallery_popup").getNiceScroll().resize();
    }
	
	if ($('.org_popup')[0]) {
        $(".org_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".org_popup").getNiceScroll().resize();
    }
	
		if ($('.souq_add_popup')[0]) {
        $(".souq_add_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".souq_add_popup").getNiceScroll().resize();
    }

	if ($('.modify_fields_popup')[0]) {
        $(".modify_fields_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".modify_fields_popup").getNiceScroll().resize();
    }

	if ($('.users_files_popup')[0]) {
        $(".users_files_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".users_files_popup").getNiceScroll().resize();
    }
    
	 $(".chosen-choices").niceScroll({
		 cursorcolor:"#ccc",
		 cursorwidth:"4px",
		 background:"#000", 
		 cursorborderradius:'20px'
	 }).resize();
	  


	if ($('.users_folder_popup')[0]) {
        $(".users_folder_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".users_folder_popup").getNiceScroll().resize();
    }
	if ($('.skill_fields_popup')[0]) {
        $(".skill_fields_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".skill_fields_popup").getNiceScroll().resize();
    }
	if ($('.job_fields_popup')[0]) {
        $(".job_fields_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".job_fields_popup").getNiceScroll().resize();
    }
	if ($('.edu_fields_popup')[0]) {
        $(".edu_fields_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".edu_fields_popup").getNiceScroll().resize();
    }
    if ($('.certification_popup')[0]) {
        $(".certification_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".certification_popup").getNiceScroll().resize();
    }
    if ($('.honours_popup')[0]) {
        $(".honours_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".honours_popup").getNiceScroll().resize();
    }
    if ($('.projects_popup')[0]) {
        $(".projects_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".projects_popup").getNiceScroll().resize();
    }
	if ($('.post_group_popup')[0]) {
        $(".post_group_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".post_group_popup").getNiceScroll().resize();
    }
	if ($('.add_event_popup')[0]) {
        $(".add_event_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
        });
        $(".add_event_popup").getNiceScroll().resize();
    }
	if ($('.add_skills_popup')[0]) {
        $(".add_skills_popup").niceScroll();
        $('body').on('click', 'i.emoji-picker-icon.emoji-picker.fa.fa-smile-o', function() {
            $(".emoji-items-wrap.mobile_scrollable_wrap").niceScroll();
});
        $(".add_skills_popup").getNiceScroll().resize();
    }
});
$(function() {

});
/*post detail popup end*/


/*Owl carousal start*/


   
	runOwl();
	
	function runOwl(){

		var owl = $('.new-owl-carosssusel, .file-directory-owl, .inbox-owl-carosssusel');
	    owl.owlCarousel({
	        items: 1,
	        loop: true,
	        margin: 20,
	        autoplay: true,
	        autoplayTimeout: 2000,
	        autoplayHoverPause: true
	    });
	    $('.play').on('click', function() {
	        owl.trigger('play.owl.autoplay', [2000])
	    })
	    $('.stop').on('click', function() {
	        owl.trigger('stop.owl.autoplay')
	    });
	
	    $(function() {
	        var a = $("#sortable").length;
	        if (a == 1) {
	            $("#sortable").sortable({
	                start: function(event, ui) {
	                    $("body").addClass('blur_for_sortable');
	                },
	                stop: function(event, ui) {
	                    $("body").removeClass('blur_for_sortable');
	                }
	            });
	        }
	    });
	    
	    var a = $(".new-owl-carousel > div"); 
		for (var i =0; i < a.length; i+=6) {
			a.slice(i,i+6).wrapAll("<div />");
		}
		

		var a = $(".inbox-owl-carousel > div");	
		for (var i =0; i < a.length; i+=6) {
			a.slice(i,i+6).wrapAll("<div />");
		}
		

		$('.new-owl-carousel, .inbox-owl-carousel').owlCarousel({
			items: 1,
	        loop: false,
	        margin: 20,
	        autoplay: false,
			nav: false,
	        autoplayTimeout: 2000,
	        autoplayHoverPause: true
	});
		
    
	}
    
	
	function runFdOwl(){

	    var a = $(".fd-owl > div");
		
		for (var i =0; i < a.length; i+=5) {
			a.slice(i,i+5).wrapAll("<div />");
		}
		
		var owlFd = $('.fd-owl');
		
		owlFd.owlCarousel({
	        items: 1,
	        loop: true,
	        margin: 20,
	        autoplay: false,
	        autoplayTimeout: 2000,
	        autoplayHoverPause: true
	    });
		
		
		  $('.play').on('click', function() {
			  owlFd.trigger('play.owl.autoplay', [2000])
		    })
		    $('.stop').on('click', function() {
		    	owlFd.trigger('stop.owl.autoplay')
		    });
		
		    $(function() {
		        var a = $("#sortable").length;
		        if (a == 1) {
		            $("#sortable").sortable({
		                start: function(event, ui) {
		                    $("body").addClass('blur_for_sortable');
		                },
		                stop: function(event, ui) {
		                    $("body").removeClass('blur_for_sortable');
		                }
		            });
		        }
		    });
		
	}
	
	
	
	
	function runLinksOwl(){

		
		var a = $(".lnk-owl > div");
		for (var i =0; i < a.length; i+=5) {
			a.slice(i,i+5).wrapAll("<div />");
		}
		
		var a = $(".lnkorg-owl > div");
		for (var i =0; i < a.length; i+=5) {
			a.slice(i,i+5).wrapAll("<div />");
		}
		
		
		var owl = $('.lnkorg-owl, .lnk-owl');
	    owl.owlCarousel({
	        items: 1,
	        loop: true,
	        margin: 20,
	        autoplay: false,
	        autoplayTimeout: 2000,
	        autoplayHoverPause: true
	    });
	    $('.play').on('click', function() {
	        owl.trigger('play.owl.autoplay', [2000])
	    })
	    $('.stop').on('click', function() {
	        owl.trigger('stop.owl.autoplay')
	    });
	
	    $(function() {
	        var a = $("#sortable").length;
	        if (a == 1) {
	            $("#sortable").sortable({
	                start: function(event, ui) {
	                    $("body").addClass('blur_for_sortable');
	                },
	                stop: function(event, ui) {
	                    $("body").removeClass('blur_for_sortable');
	                }
	            });
	        }
	    });
	    
	
    
	}
    
/*Owl carousal end*/

	
function initColWidthLayout(){
	
	//alert("init1");
	
	/*gallery script start*/
//	jQuery(document).ready(function($) {
	    // Stuff to do as soon as the DOM is ready
	    $(".sidebar-menu").stick_in_parent({
	        parent: "#main-sec",
	        offset_top: 35
	    });  
	
	
	
	    $("#filter > li > a").click(function() {
	        $("#filter > li ").removeClass("active")
	        $(this).parent('li').addClass("active");
	        
	       
	        return false;
	    });
	
	
	    $(".gtx-filter > ul > li > a").click(function() {
	        $(".gtx-filter > ul > li").removeClass("active")
	        $(this).parent('li').addClass("active");        
	       
	        return false;
	    });
//	});
	/*gallery script end*/
	
	
	/*discussion script start*/
	//jQuery plugin


}



function initfileUploader(maxFilesLimit){
	
	

(function($) {

    $.fn.uploader = function(options) {
    	
    
    	
        var settings = $.extend({
            acceptedFileTypes: ['pdf', 'jpg', 'gif', 'jpeg', 'bmp', 'tif', 'tiff', 'png', 'xps', 'doc', 'docx',
                'fax', 'wmp', 'ico', 'txt', 'cs', 'rtf', 'xls', 'xlsx' , 'mp4', 'mov', 'mp3'
            ]
        }, options);

        var uploadId = 1;


        //create and add the file list and the hidden input list
        var fileList = $('<ul class="file-list"></ul>');
        var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
        $('.file-uploader__message-area').after(fileList);
        $('.file-list').after(hiddenInputs);
        
      
        
        
        
        //when choosing a file, add the name to the list and copy the file input into the hidden inputs
        $('.file-chooser__input').on('change', function() {
        	
        	var numItems = $('.file-chooser__input').length;
        	
            var file = $('.file-chooser__input').val();
            var fileName = (file.match(/([^\\\/]+)$/)[0]);
            //clear any error condition
            $('.file-chooser').removeClass('error');
            $('.error-message').remove();
            //validate the file
			var fileLenght = $(".file-list li").length;
            //validate the file
            var check = checkFile(fileName);
            
            fileSizeInMB = this.files[0].size/1048576;	
          
            
            if(fileSizeInMB > clientSideMaxfileSizeInMB){
            	alertify.error("messages['filesizelimit.label'] "+clientSideMaxfileSizeInMB+" MBs").dismissOthers();
            	$(this).attr("value", "");
            	$(this).val("");
            	return false;
            }
            
            
            
            if (check === "valid" && fileLenght < maxFilesLimit) {
                // move the 'real' one to hidden list
                $('.hidden-inputs').append($('.file-chooser__input'));
                //insert a clone after the hiddens (copy the event handlers too)
                $('.file-chooser').append($('.file-chooser__input').clone({
                    withDataAndEvents: true
                }));
                //add the name and a remove button to the file-list
                $('.file-list').append('<li style="display: none;"><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="' + uploadId + '"></button></li>');
                $('.file-list').find("li:last").show(800);
                //removal button handler
                $('.removal-button').on('click', function(e) {
                    e.preventDefault();
                    //remove the corresponding hidden input
                    $('.hidden-inputs input[data-uploadid="' + $(this).data('uploadid') + '"]').remove();
                    //remove the name from file-list that corresponds to the button clicked
                    $(this).parent().hide("puff").delay(10).queue(function() {
                        $(this).remove();
                    });
                    //if the list is now empty, change the text back
                    if ($('.file-list li').length === 0) {
                        $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
                    }
                });

                //so the event handler works on the new "real" one
                $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId);

                uploadId++;

            } else {
            	$(this).attr("value", "");
            	$(this).val("");
            	
            	if(check === "valid"){
            		alertify.error(messages['maxfileselect.label']).dismissOthers(); 
            	}else{
            		alertify.error(messages['filetypenotsupported.label']).dismissOthers(); 
            	}
            	
            	
            	
            }
        });

        var checkFile = function(fileName) {
            var accepted = "invalid",
                acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
                regex;

            for (var i = 0; i < acceptedFileTypes.length; i++) {
                regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

                if (regex.test(fileName)) {
                    accepted = "valid";
                    break;
                } else {
                    accepted = "badFileName";
                }
            }

            return accepted;
        };
    };
}(jQuery));

//init
$(document).ready(function() {
    $('.fileUploader').uploader({
        MessageAreaText: "No files selected. Please select a file."
    });
});

}

/*discussion script end*/
// datepicker start
$(function() {
    $('#textRangeFrom').datepicker();
    $('#textRangeTo').datepicker();
    $('#personal_textRangeTo').datepicker({ maxDate: new Date(2005,1,1), minDate: new Date(1918, 1, 1),changeMonth: true,changeYear: true,yearRange: "-100:+0"});
    $('#jobHistory_textRangeFrom').datepicker();
    $('#jobHistory_textRangeTo').datepicker();
    $('#edu_textRangeFrom').datepicker();
    $('#edu_textRangeTo').datepicker();
    $('#achivement_textRangeFrom').datepicker();
    $('#achivement_textRangeTo').datepicker();
    $('.date-picker').datepicker({dateFormat: "dd/mm/yy",  changeMonth: true,changeYear: true,yearRange: "-100:+0" });
    
    $('.profile-date-picker').datepicker({dateFormat: "dd/mm/yy",  changeMonth: true,changeYear: true,yearRange: "-100:+0" });
    
    
});
 
$(function() {
	$(function() {
	    $('input[name="daterange"]').daterangepicker({
	        opens: 'left',
	        timePicker: false,
	        endDate: moment().startOf('hour'),
	    startDate: moment().startOf('days').subtract(30, 'days')
	    }, function(start, end, label) {
	        //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
	    });
	});
}); 
// datepicker end

// sortable start
$(function() {
    $("#sortable").sortable({
        start: function(event, ui) {
            $("body").addClass('blur_for_sortable');
        },
        stop: function(event, ui) {
            $("body").removeClass('blur_for_sortable');
        }
    });

});

// sortable end

// mytask percenta script start

(function($) {
    $.fn.progress = function() {
        var percent = this.data("percent");
        this.css("width", percent + "%");
    };
}(jQuery));

$(document).ready(function() {
    $(".bar-one .bar").progress();
    $(".bar-two .bar").progress();
    $(".bar-three .bar").progress();
    $(".bar-four .bar").progress();
});

// mytask percenta script end

// mytask counter start

(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({},
                $.fn.countTo.defaults, {
                    from: $(this).data("from"),
                    to: $(this).data("to"),
                    speed: $(this).data("speed"),
                    refreshInterval: $(this).data("refresh-interval"),
                    decimals: $(this).data("decimals")
                },
                options
            );

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data("countTo") || {};

            $self.data("countTo", data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof settings.onUpdate == "function") {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData("countTo");
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof settings.onComplete == "function") {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
})(jQuery);

jQuery(function($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
        formatter: function(value, options) {
            return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        }
    });

    // start all the timers
    $(".timer").each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data("countToOptions") || {});
        $this.countTo(options);
    }
});

// mytask counter end

//news file choosen start
$('.form-control-chosen').chosen({
    allow_single_deselect: true,
    width: '100%'
});

$('.form-control-chosen-required').chosen({
    allow_single_deselect: false,
    width: '100%'
});
$('.form-control-chosen-search-threshold-100').chosen({
    allow_single_deselect: true,
    disable_search_threshold: 100,
    width: '100%'
});
$('.form-control-chosen-optgroup').chosen({
    width: '100%'
});


$(function() {
    $('[title="clickable_optgroup"]').addClass('chosen-container-optgroup-clickable');
});
$(document).on('click', '[title="clickable_optgroup"] .group-result', function() {
    var unselected = $(this).nextUntil('.group-result').not('.result-selected');
    if (unselected.length) {
        unselected.trigger('mouseup');
    } else {
        $(this).nextUntil('.group-result').each(function() {
            $('a.search-choice-close[data-option-array-index="' + $(this).data('option-array-index') + '"]').trigger('click');
        });
    }
});
//news file choosen end



// pofile js start
	

$(document).ready(function() {
	
   // Stuff to do as soon as the DOM is ready
   $(".gtx-browse input[type='file']").change(function(e){
     var a = $(this).val();
     a = e.target.value.split( '\\' ).pop();
     $(this).parent().find('.gtx-file-name').html(a);
   });
   


   $(".file-directory-navigation ul li:first-child").addClass("active");
   $(".file-directory-navigation ul li a").click(function(){
	  
     if ($(this).parent().hasClass("active")) {
       return false;
     } else {
		 $(".file-directory-navigation ul li").removeClass("active");
		 $(this).parent().addClass("active");
		$(".gtx-changeview").toggleClass('gtx-gridview');
		$(".gtx-changeview").find(".files_item").toggleClass('col-sm-12');
		$(".gtx-changeview").find(".files_item").toggleClass('col-sm-2');
     }

     return false;
   });



   $(".gird-list a:first-child").addClass("active");
   $(".gallery").hide();
   $(".gallery:first").show();
   $(".gird-list ul li a").click(function(){
     if ($(this).parent().hasClass("active")) {
       return false;
     } else {
       $(".gird-list ul li").removeClass("active");
       $(this).parent().addClass('active');
       var a = $(this).attr('href');
	   $(".gallery").removeClass('portfolio_block');
	   $(".gallery").removeClass('portfolio_list');
       $('.gallery').addClass(a);
       colWidth();
	   $('.gallery').each(function() {
        $(this).isotope({
            // options
            itemSelector: '.gtx-column',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            },
			layoutMode: 'fitRows',
				fitRows: {
				  gutter: 30
				}
        });
    });
     }

	setTimeout(function(){
		$("body").trigger("resize");
	},500);
     return false;
   });
   $("#activity_log .table tr").on('click', function(e) {
         e.stopPropagation();
         
         $("body").toggleClass('active_add_edit_activity');
         var text = [];
         $(this).find('p').each(function(index) {
            text.push($(this).text());
         });
        $(".active_add_edit_activity input[type='text']").val(text[0])
        $(".active_add_edit_activity textarea").val(text[1])
     });
 $('#lang_profile').attr('disabled', true).trigger('chosen:updated');

$(".gtx-profile-description header .btn-editprofile").click(function(){
  $(this).hide();
  $(this).next().fadeIn(300);
  var a = $(this).parents('.modal-content');
  if (a.length > 0) {
      $(this).parents(".gtx-content-profile2").find('.gtx-form-section').find('input,textarea').attr('disabled',false);
      $(this).parents(".gtx-content-profile2").find('.gtx-form-section').find('.gtx-save-bottom ').fadeIn(300)
  } else {
      $(this).parents('.gtx-content-profile').find('input,textarea').attr('disabled',false);
      $(this).parents('.gtx-content-profile').find('.gtx-save-bottom ').fadeIn(300);
	  $('#lang_profile').attr('disabled', false).trigger('chosen:updated');
  }
  return false;
});
$(".users_activity_edit_popup header .btn-editprofile").click(function(){
  $(this).hide();
  $(this).next().fadeIn(300);
  $(this).parents(".users_activity_edit_popup").find('input,textarea').attr('disabled',false);
  return false;
})
$(".users_activity_edit_popup header .btn-cancelevent").click(function(){
  $(this).parent().hide();
  $(this).parent().prev().fadeIn(300);
  $(this).parents(".users_activity_edit_popup").find('input,textarea').attr('disabled',true);
  $('body').removeClass('active_add_edit_activity');
  return false;
})

// Modal Popup In Edit Mod
$('.btn-editmode').click(function(event) {
    /* Act on the event */
    event.preventDefault;
    var a = $(this).data('target');
    $(a).find('.gtx-form-section').find('input,textarea').attr('disabled',false);
    $(a).find('.gtx-btn-group').find('.btn-editprofile').hide();
    $(a).find('.gtx-btn-group').find('.btn-editprofile').next().show();
    $(".gtx-save-bottom").show();
});

$(".gtx-form-section td[data-toggle*='modal']").click(function(event) {
    /* Act on the event */
    event.preventDefault;
    var a = $(this).data('target');
    $(a).find('.gtx-form-section').find('input,textarea').attr('disabled',true);
    $(a).find('.gtx-btn-group').find('.btn-editprofile').show();
    $(a).find('.gtx-btn-group').find('.btn-editprofile').next().hide();
    $(".gtx-save-bottom").hide();
});

/*
// profile js end
$(document).on('click','.files_item .name img, .upload_item img',function(){
	  var a = $(this).parent(".name").text();
	  var b = $(this).parents('.gtx-info').next();
	  var c = $(this).parents('.files_item').data('folder');
	  var g = $(this).parents('.files_item').data('file');
	  if (c == null) {
	    if (g == null) {
			$("#downloadFileModal").modal("show"); 
	    } else {
		    $("#downloadFileModal").modal("show"); 
	    }
	    return false;
	  } else {
	  if ($(this).hasClass("active")) {
	    return false;
	  } else {

	  }


	  var e = $(this).parents('.files_item').data('level');
	  var d = $("."+c).length;
	  if (d > 0) {
	  var f =   $(this).parents(".gtx-mainfolder").prev().find(".gtx-breadcrumbs");
	    $(f).append("<a  data-href='."+c+"' data-relation='"+e+"'>"+a+"</a> ")
	    $(this).parents(".gtx-mainfolder").find('.files_item').hide();
	    $("."+c).fadeIn(300);
	  }
	  $(this).addClass("active");
	}
});
*/
	
// File Dir Breadcrumbs remove on click

	$(".gtx-breadcrumbs").on('click','a',function(event){
	  var a = $(this).data('relation');
	  if (a === "parent") {
	    $(this).parents('.file_user_folder').next(".gtx-mainfolder").find('.files_item').hide();
	    $(this).parents('.file_user_folder').next(".gtx-mainfolder").find("div[data-level*='parent']").fadeIn(300);
	  } else {
	    $(this).parents('.file_user_folder').next(".gtx-mainfolder").find('.files_item').show();
	    $("."+a).fadeIn(300);
	  }

	  $(".files_item .name img").removeClass("active")
	  $(this).nextAll('a').remove();
	  $(this).remove();
	  return false;
	});


// gallery js


      // Stuff to do as soon as the DOM is ready
       $(".sidebar-menu").stick_in_parent({
         parent: "#main-sec",
         offset_top: 20
      });
      // $('.gtx-grid-container').each(function(){
        // $(this).isotope({
          // // options
          // itemSelector: '.grid-box'
        // });
      // })


      // $(".gtx-filter > ul > li > a").click(function(){
        // $(".gtx-filter > ul > li").removeClass("active")
        // $(this).parent('li').addClass("active");
        // var a = $(this).attr('href');
        // $('.gtx-grid-container').isotope({ filter: a });
        // return false;
      // });

// gallery js end


$(window).load(function() {
	//$(".dropzone").dropzone();
	$("#loading").fadeOut();
	$("body").addClass("animate");
    // Initializes and creates emoji set from sprite sheet
   
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
   
});


});



function colWidth() {	
	$(".gallery .gtx-column").each(function(index, el) {
	
        if ($(this).parents('.gallery').hasClass('portfolio_block')) {
                var w = 320;
                var pw = $(".portfolio_block").width();
                var t = Math.floor(pw/w);
                $(this) .width((pw/t) - 30);
            } else if ($(this).parents('.gallery').hasClass('portfolio_list')) {
                    $(this).width('100%');
            }

    });
}

// after login popup js start

//	$(".login_button").on("click",function(e){
//		e.preventDefault();
//
//		sessionStorage.setItem('islogin',true);
//		// window.location.href = "file:///D:/farhan/admNew/ltr/index.html";
//		window.location.href = "http://graffitecs.com/adm/index.html";
//	});

	    $(function(){
        if(sessionStorage.getItem('islogin')=="true")
        {
            sessionStorage.setItem('islogin', false);
            $('#exampleModal').modal("show");

        }
    });

// after login popup js end

// image drag and drop script start

initDargDropControl();

function initDargDropControl(){	    
	    
( function ( document, window, index )
	{
		// feature detection for drag&drop upload
		var isAdvancedUpload = function()
			{
				var div = document.createElement( 'div' );
				return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
			}();
			
			
		// applying the effect for every form
		var forms = document.querySelectorAll( '.dragupload' );
		
	
		
		Array.prototype.forEach.call( forms, function( form )
		{
			
			
			
			var input		 = form.querySelector( 'input[type="file"]' ),
				label		 = form.querySelector( 'label' ),
				errorMsg	 = form.querySelector( '.box__error span' ),
				restart		 = form.querySelectorAll( '.box__restart' ),
				droppedFiles = false,
				showFiles	 = function( files )
				{
					label.textContent = files.length > 1 ? ( input.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', files.length ) : files[ 0 ].name;
				},
				triggerFormSubmit = function()
				{
					var event = document.createEvent( 'HTMLEvents' );
					event.initEvent( 'submit', true, false );
					form.dispatchEvent( event );
				};

			// letting the server side to know we are going to make an Ajax request
			var ajaxFlag = document.createElement( 'input' );
			ajaxFlag.setAttribute( 'type', 'hidden' );
			ajaxFlag.setAttribute( 'name', 'ajax' );
			ajaxFlag.setAttribute( 'value', 1 );
			form.appendChild( ajaxFlag );

			// automatically submit the form on file select
			input.addEventListener( 'change', function( e )
			{
				showFiles( e.target.files );


				triggerFormSubmit();


			});
			
			

			// drag&drop files if the feature is available
			if( isAdvancedUpload )
			{
				form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

				[ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
				{
					form.addEventListener( event, function( e )
					{
						// preventing the unwanted behaviours
						e.preventDefault();
						e.stopPropagation();
					});
				});
				[ 'dragover', 'dragenter' ].forEach( function( event )
				{
					form.addEventListener( event, function()
					{
						form.classList.add( 'is-dragover' );
					});
				});
				[ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
				{
					form.addEventListener( event, function()
					{
						form.classList.remove( 'is-dragover' );
					});
				});
				form.addEventListener( 'drop', function( e )
				{
					droppedFiles = e.dataTransfer.files; // the files that were dropped
					showFiles( droppedFiles );


					triggerFormSubmit();

									});
			}


			

			// Firefox focus bug fix for file input
			input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
			input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

		});
	}( document, window, 0 ));
	
}
// image drag and drop script end


// my tasks js start

(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});


// my tasks js end

// my tasks progress bar tart

(function ( $ ) {
  $.fn.progress = function() {
    var percent = this.data("percent");
    this.css("width", percent+"%");
  };
}( jQuery ));

$(document).ready(function(){
  $(".bar-one .bar").progress();
  $(".bar-two .bar").progress();
  $(".bar-three .bar").progress();
  $(".bar-four .bar").progress();
});

// my tasks progress bar tart

function initRangeSlider(){

	//skill directory  RangeSlider Workaround start
	if(document.getElementById("comissionLabel") != null){
	const comission = document.querySelector('#comission input, #comission_new input');
	const comissionLabel = document.getElementById('comissionLabel');
	const comissionLabelPrefix = comissionLabel.innerHTML;
	const comissionRange = document.createElement('label');
	
	comissionRange.id = 'rangeLimits';
	comissionRange.className = 'row';
	comissionRange.innerHTML = '<span class="col-6 text-left">${comission.getAttribute("min")}</span><span class="col-6 text-right">${comission.getAttribute("max")}</span>';
	document.querySelector('#comission, #comission_new').appendChild(comissionRange);
	
	comissionLabel.innerHTML = '${comissionLabelPrefix}${comission.value}';
	comission.addEventListener('input', function() {
	    comissionLabel.innerHTML = '${comissionLabelPrefix}${Number(comission.value).toFixed(2)}';
	}, false);
	};

}

// Bootstrap Tooltips Actuivation
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});





//skill directory  RangeSlider Workaround end




//$(document).ready(function(){
$("body").on('click','#skills_search', function(e) {
	 $('.skill_tags_').toggleClass('active');
	});
//});


// like counter js start


//$(document).ready(function(){
		$("body").on('click','a.like-counter', function(e) {
			
					
			var entryId = $(this).attr('data-entry');
			var module = $(this).attr('data-module');
			var moduleId = SAEED_MODULES[module];
			e.preventDefault();
			
				$(this).closest('.like').addClass('animated bounceIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd' , 
						function(){
					$(this).removeClass('animated bounceIn');
				});

				
				$(this).closest('.like1').addClass('animated bounceIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd' , 
						function(){
					$(this).removeClass('animated bounceIn');
				});
				
				
				var clicks =  parseInt($(this).siblings('#clicks').text());
				
				if($(this).find('.liked').length > 0){
					$(this).find('img').removeClass('liked').attr('src', 'images/like.png');
					clicks -= 1;
					saveUnLike(moduleId,entryId);
					
				}else{
					$(this).find('img').addClass('liked').attr('src', 'images/likeHover.png?version=1.1');
				
					clicks += 1;
					saveLike(moduleId,entryId);
				}
				
				$(this).siblings('#clicks').text(clicks);
				
				
		});
			
		$("body").on('click','a.dislike-counter', function(e) {
			
			
			var entryId = $(this).attr('data-entry');
			var module = $(this).attr('data-module');
			var moduleId = SAEED_MODULES[module];
			e.preventDefault();
			
				$(this).closest('.like').addClass('animated bounceIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd' , 
						function(){
					$(this).removeClass('animated bounceIn');
				});
				
				$(this).closest('.like1').addClass('animated bounceIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd' , 
						function(){
					$(this).removeClass('animated bounceIn');
				});
				
				var clicks =  parseInt($(this).siblings('#clicks').text());
				if($(this).find('.liked').length > 0){
					$(this).find('img').removeClass('liked').attr('src', 'images/like.png');
					clicks -= 1;
					saveUndislike(moduleId,entryId);
					
				}else{
					$(this).find('img').addClass('liked').attr('src', 'images/likeHover.png?version=1.1');
				
					clicks += 1;
					savedislike(moduleId,entryId);
				}
				
				$(this).siblings('#clicks').text(clicks);
				
				
		});
		
//	});
	

	function saveLike(moduleId,entryId){
		saveActivityLog("like",moduleId,entryId);
	}
	
	function saveUnLike(moduleId,entryId){
		saveActivityLog("unLike",moduleId,entryId);
	}
	
	function savedislike(moduleId,entryId){
		saveActivityLog("dislike",moduleId,entryId);
	}
	
	function saveUndislike(moduleId,entryId){
		saveActivityLog("undislike",moduleId,entryId);
	}
	
	
	function saveActivityLog(type,moduleId,entryId){
		$.ajax({
			  type: "POST",
			  url: contextPath + "/secure/utilities/"+type+"/"+moduleId+"/"+entryId,
			  success: function(data) {
				 if(data){
					 
					 if(type=="like"){
				
					//	 alertify.success("5 points scored!").dismissOthers();
					 }
					 else{

						// alertify.warning("5 points reverted back!").dismissOthers();
					 }
					}
				 else{
					 alertify.error("Unable to Save!").dismissOthers(); 
					 return false;
				 }
			  }  ,
			 error: function(response,textStatus) {
				//alertify.error("Something went wrong! Please try again later.");
			  }							
		});
	}
	
	

	jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
		  
	    intShakes = intShakes || 10;
	    intDistance = intDistance || 2;
	    intDuration = intDuration || 1000;
	  
	    this.each(function() {
	        $(this).css("position","relative"); 
	        for (var x=1; x<=intShakes; x++) {
	        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
	    .animate({left:intDistance}, ((intDuration/intShakes)/2))
	    .animate({left:0}, (((intDuration/intShakes)/4)));
	    }
	  });
	return this;
	};

/*
    $(document).ready(function(){
        $('a.like-counter').on('click', function(e){
        e.preventDefault();
        var clicks =  parseInt($(this).siblings('#like_clicks').text());
        if($(this).find('.commented').length > 0){
            $(this).find('img').removeClass('commented').attr('src', 'images/like.png');
            clicks -= 1;
            
        }else{
            $(this).find('img').addClass('commented').attr('src', 'images/likeHover.png');
            clicks += 1;
        }
        $(this).siblings('#like_clicks').html(clicks);
        $(this).siblings('#like_clicks').fadeOut(250).fadeIn(250);       
        });
    });
*/
	$(document).ready(function(){
		$('a.comment-counter').on('click', function(e){
		e.preventDefault();
		var clicks =  parseInt($(this).siblings('#comment_clicks').text());
		if($(this).find('.commented').length > 0){
			$(this).find('img').removeClass('commented').attr('src', 'images/comment.png');
			clicks -= 1;
			
		}else{
			$(this).find('img').addClass('commented').attr('src', 'images/commentHover.png');
			clicks += 1;
		}
		$(this).siblings('#comment_clicks').html(clicks);
		$(this).siblings('#comment_clicks').fadeOut(250).fadeIn(250); 		
		});
	});
	
	
// like counter js end

	
	
// skil page jquery start	
(function() {
  $(document).ready(function() {

  });

}).call(this);


$('.nav-item').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});
// skil page jquery end


$("body").on('click','.counter_count .nav-item', function(e) {
  e.preventDefault();
  animate_circles();
  $(".bar-one .bar").progress();
  $(".bar-two .bar").progress();
  $(".bar-three .bar").progress();
  $(".bar-four .bar").progress();
  
});
function animate_circles(){
	$('.circle').each(function(index) {
    var a = $(this).data('start-color')
    var b = $(this).data('end-color');
    var c = $(this).data('value');
    $(this).circleProgress({
  	value: c/100,
    fill: {
      gradient: [a, b]
    },
  }).on('circle-animation-progress', function(event, progress,stepValue) {
  	$(this).find('strong').html(Math.round((progress*c)) + '<i>%</i>').css({'color': a});
  	});
  });
}
$('.nav-item').on('click', function(){

});




function skill_count(){
	(function($) {
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});
}
$('a#gtx-skills').on('click', function(){

	alert("here");
	
	skill_count();
	
	
	
	
});

$('.openCard').on('click', function(e){
	e.preventDefault();

	$('.cardUser').toggleClass('active');

});


//success alert popup js
function testAnim(id) {
	
                $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + id + '  animated');
            window.setTimeout(function () {
                 $('#'+id).modal('hide');
             },2000);
        }

//souq owl sync js start

function souqPopupSlider() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  });

  sync2.on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
     
    }).owlCarousel({
    items : slidesPerPage,
    dots: true,
    nav: true,
    smartSpeed: 200,
    slideSpeed : 500,
    rewindNav:false,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  });


  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
  
  if ($('.footer_text img')[0]) {
	  $("footer").append('<div id="mybutton"></div>')
  }

};

//souq owl sync js start


//new gallery page js start


var owl = $("#slider-item");
var nCount=0;
$(document).ready(function() {
	
	$("body").on('click','.new-gallery-title .new-galley', function(e) {
		
		 var albumId = $(this).attr('data-albumId');          
		
		    nCount=0;
	        $('.new-gallery-title .new-galley').removeClass('collapsed');
	        $(this).toggleClass('collapsed');
	        owl.owlCarousel('destroy');
	        $("#slider-item a").remove();
	        var a = $(this).find('.gtx-grid-container img');
	        var asize='';
	        if(a.length <= 2)
	        {
	            asize = 'single_item';
	        }
	        a.each(function(index) {
	            nCount++;
	            var src = $(this).attr('biggerImage');          
	            $(this).clone().appendTo(owl).wrap('<a class="'+asize+'" data-fancybox="gallery-album-'+albumId+'" href="'+src+'"></a>');
	            
	        });
	        
	        settingCarousel (nCount);
		});
	
});

function callme(){
    var nCount=0;
    $('.owl-item').each(function(){
        if(!$(this).hasClass('cloned'))
        {
            nCount++;
        }
    });
   
    if(nCount>3)
    {
        return true;
    }else{

        return false;
    }       

  }


  function settingCarousel (nCount) {
	  
	
	  
	  if(nCount>5)
      {	
		  nCount=5;
		  
        }else if(nCount ==1){
            nCount=1;
        }else if(nCount ==2){
            nCount=1;
        }else if(nCount ==3){
            nCount=3;
        }else if(nCount ==4){
            nCount=3;
        }else if(nCount ==5){
            nCount=3;
        }
      
	  if(nCount>0)
		  {
		  owl.owlCarousel({
			     
		      center: true,
		        items:nCount,
		      nav: true,
		        dots: false,
		        loop:setTimeout(function(){ callme(); }, 1000),
		        startPosition: 2,          
		        navText: ['<i class="fa fa-chevron-left"> </i>', '<i class="fa fa-chevron-right"></i>']

		    });
		  
		  owl.on('translated.owl.carousel', function(event) {
		      owlLoaded(nCount)
		    })
		    
		    
		    
		    $("html, body").animate({ scrollTop: (owl.offset().top) - 100 }, 1000);
		  }

		  function owlLoaded(nCount) {
			  if(nCount<= 4)
		      {
		        var a = $("#slider-item .center");
		        
		      }else{
		        
		      }    

		    $("#slider-item .owl-item").removeClass('middle_beside');
		    $("#slider-item .owl-item").removeClass('next_to_mid');
		    $("#slider-item .owl-item").removeClass('prev_to_mid');
		    var a = $("#slider-item .center");
		    a.next().addClass('middle_beside');
		    a.prev().addClass('middle_beside');
		    a.next().nextAll().addClass('next_to_mid')
		    a.prev().prevAll().addClass('prev_to_mid')
		  }
		  }
	  
  


  
 //new gallery page js end 
  

//managers leave schedul search js start
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".managers_schedule").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
//managers leave schedul search js end

 // new gallery add popup js start

  function addNewGalleryPopup(){
  var previewNode = document.querySelector("#template");
  previewNode.id = "";
  var previewTemplate = previewNode.parentNode.innerHTML;
  previewNode.parentNode.removeChild(previewNode);

  var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
    url: "http://www.torrentplease.com/dropzone.php", // Set the url
    thumbnailWidth: 80,
    thumbnailHeight: 80,
    parallelUploads: 20,
    previewTemplate: previewTemplate,
    autoQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: "#previews", // Define the container to display the previews
    clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
  });

  myDropzone.on("addedfile", function(file) {
    // Hookup the start button
    file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file); };
  });

  // Update the total progress bar
  myDropzone.on("totaluploadprogress", function(progress) {
    document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
  });

  myDropzone.on("sending", function(file) {
    // Show the total progress bar when upload starts
    document.querySelector("#total-progress").style.opacity = "1";
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
  });

  // Hide the total progress bar when nothing's uploading anymore
  myDropzone.on("queuecomplete", function(progress) {
    document.querySelector("#total-progress").style.opacity = "0";
  });

  // Setup the buttons for all transfers
  // The "add files" button doesn't need to be setup because the config
  // `clickable` has already been specified.
  document.querySelector("#actions .start").onclick = function() {
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
  };
  document.querySelector("#actions .cancel").onclick = function() {
    myDropzone.removeAllFiles(true);
  };
  }
 // new gallery add popup js end  
  
 // new gallery bigger image thumbnail js start
  
  function galleryThumbnailAlign(){
  


	  $(document).on("click", "button.fancybox-button--thumbs" , function() {
	         
	         var fancy_list = new Array();
	         var new_fancy_html = '';
	         
	         $(".fancybox-thumbs__list a").each(function() {
	              
	              var aurl = $(this).attr("style");
	              aurl = aurl.replace("background-image:url(","");
	              aurl = aurl.replace(")","");
	              
	              if(jQuery.inArray(aurl, fancy_list) !== -1)
	              {
	                
	              }
	              else
	              {
	                fancy_list.push(aurl);
	                  new_fancy_html += this.outerHTML;
	               }
	              
	              
	              
	          });
	          
	          $(".fancybox-thumbs__list").html(new_fancy_html);        
	      });
	     
  }
  // new gallery bigger image thumbnail js end

  //loadmore content js start 
  
//  $(function() {
//      
//      $(window).scroll(function() {
//          
//          var $this = $(this);
//          var $results = $("#data_results");
//
//          if ($this.scrollTop() + $this.height() >= $results.height()) {
//              $("#data_loading").html('<img src="../images/Logo_7.gif" />');
//              loadResults();
//          }
//      });
//  });
//	
//	function loadResults() 
//	{
//      setTimeout(function(){ 
//    	 
//    	 
//		var result = '<div class="post-two"> <div class="featured"> <div class="row"> <div class="col-md-6 post_date"> <div class="post_thumb"> <a href="#"><img src="http://localhost:8080/saeed-new/images/adam-adraws.png" width="52" height="52" alt="img"></a> </div><div class="info"> <div class="row"> <h6>Adam Andrews</h6> </div><div class="row"> <p>Monday, June 25-2018</p></div></div></div><div class="col-md-6"> <div class="admin-btn"> <ul> <li> <button class="btn btn-style btn-purple">Photos</button> </li></ul> </div></div></div><div class="row margin-top20"> <div class="post-detail col-md-11 col-md-offset-1 "> <div class="gal"><a data-fancybox="gallery" href="images/adam-image-1.png"> <img src="http://localhost:8080/saeed-new/images/adam-image-1.png" alt="img"></a><a data-fancybox="gallery" href="http://localhost:8080/saeed-new/images/adam-image-2.png"> <img src="http://localhost:8080/saeed-new/images/adam-image-2.png" alt="img"></a><a data-fancybox="gallery" href="http://localhost:8080/saeed-new/images/adam-image-3.png"> <img src="http://localhost:8080/saeed-new/images/adam-image-3.png" alt="img"></a><a data-fancybox="gallery" href="http://localhost:8080/saeed-new/images/adam-image-4.png"> <img src="http://localhost:8080/saeed-new/images/adam-image-4.png" alt="img"></a> </div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ex quis purus dictum vestibulum non a ante.</p><ul> <li class="like"><a href="#" class="like-counter"><img src="http://localhost:8080/saeed-new/images/like.png" alt="img"><span class="click-text"></span></a><a id="clicks">11</a></li><li class="comment"><a href="#" class="comment-counter"><img src="http://localhost:8080/saeed-new/images/comments.png" alt="img"><span class="click-comment"></span></a><a id="comment_clicks">13</a></li></ul> </div></div></div></div><div class="clearfix"></div>';
//		
//		$("#data_results").append(result);
//      $("#data_loading").html('');
//  }, 8000);	//to test 
//	}
	
	 $(document).ready( function() {
			$(document).on('change', '.btn-file :file', function() {
			var input = $(this),
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [label]);
			});

			
			function readURL(input) {
				
				
			    if (input.files && input.files[0]) {
			    	//$('.imgDiv').show();
					//$('.textEmoji').hide();
			    	//$('.nImage').show();
			    	//$('.deleteImage').show();
			    	var filename = input.files[0].name;
			    	$('.fa-times-circle').text("		"+filename);
			    	//$('.imageUploadBox').text(filename);
			    	$('.imageUploadBox').show();
			        var reader = new FileReader();
			        
			        reader.onload = function (e) {
			            $('#imgUpload').attr('src', e.target.result);
			        }
			        
			        reader.readAsDataURL(input.files[0]);
			    }
			}		
			
			
			$("#imgInp").change(function(){
			    readURL(this);
			   
			}); 	
				 
				
		});
	 
	 //**** for Task Management*****/
	 
	/* let initialData = [{id:'1', category:'success'},{id:'1', category:'danger'},{id:'2', category:'info'},{id:'3', category:'danger'},{id:'4', category:'danger'},{id:'5', category:'danger'}]
     var table = document.getElementById('tbody');
     let divs = initialData.map((item,index)=>'<tr><td class="pointer-cursor d-flex"><div class="form-check"><input class="form-check-input position-static outer-checkbox" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> </div><div data-toggle="modal" data-target="#exampleModalCenter2"> <b>Click me to mark this checkbox as checked</b><div class="text-sm text-muted"> when an unknown printer took a galley of type and scrambled</div> </div> </td><td><input class="custom-range skill-range" type="range" min="0" max="100" step="0"></td><td class="text-center">4/23/14</td> <td> <span class="badge badge-pill badge-'+item.category+' p-2 px-4 text-capitalize">'+item.category+'</span></td><td class="text-center"><img src="./images/profile.png" alt="..." class="rounded-circle avatar"/></td></tr>').join('');
     table.innerHTML = divs;
	
	 function loadMore(number,event){
  	   
	      event.preventDefault();
	        let page2 = [{id:'1', category:'success'},{id:'1', category:'warning'},{id:'2', category:'danger'},{id:'3', category:'danger'},{id:'4', category:'danger'},{id:'5', category:'danger'}];
	        let page1 = initialData;
	        let data = number==='1'?page1:page2;
	        //  initialData = initialData.concat(initialData);
	         let divs = data.map((item,index)=>'<tr><td class="pointer-cursor d-flex"><div class="form-check"><input class="form-check-input position-static outer-checkbox" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> </div><div data-toggle="modal" data-target="#exampleModalCenter2"> <b>Click me to mark this checkbox as checked</b><div class="text-sm text-muted"> when an unknown printer took a galley of type and scrambled</div> </div> </td><td><input class="custom-range skill-range" type="range" min="0" max="100" step="0"></td><td class="text-center">4/23/14</td> <td> <span class="badge badge-pill badge-'+item.category+' p-2 px-4 text-capitalize">'+item.category+'</span></td><td class="text-center"><img src="./images/profile.png" alt="..." class="rounded-circle avatar"/></td></tr>').join('');
	      table.innerHTML = divs;
    	}*/
	 
	 //**** for Task Management ends here*****/
     
	
//loadmore content js end

	
// profile image crop and update js start
	
/*function initFileCropper(){	
	
	window.addEventListener('DOMContentLoaded', function () {
	      var avatar = document.getElementById('avatar');
	      var image = document.getElementById('image');
	      var input = document.getElementById('input');
	      var $progress = $('.progress');
	      var $progressBar = $('.progress-bar');
	      var $alert = $('.alert');
	      var $modal = $('#modal');
	      var cropper;

	      $('[data-toggle="tooltip"]').tooltip();

	      input.addEventListener('change', function (e) {
	        var files = e.target.files;
	        var done = function (url) {
	          input.value = '';
	          image.src = url;
	          $alert.hide();
	          $modal.modal('show');
	        };
	        var reader;
	        var file;
	        var url;

	        if (files && files.length > 0) {
	          file = files[0];

	          if (URL) {
	            done(URL.createObjectURL(file));
	          } else if (FileReader) {
	            reader = new FileReader();
	            reader.onload = function (e) {
	              done(reader.result);
	            };
	            reader.readAsDataURL(file);
	          }
	        }
	      });

	      $modal.on('shown.bs.modal', function () {
	        cropper = new Cropper(image, {
	          aspectRatio: 1,
	          viewMode: 3,
	        });
	      }).on('hidden.bs.modal', function () {
	        cropper.destroy();
	        cropper = null;
	      });

	      document.getElementById('crop').addEventListener('click', function () {
	        var initialAvatarURL;
	        var canvas;

	        $modal.modal('hide');

	        if (cropper) {
	          canvas = cropper.getCroppedCanvas({
	            width: 160,
	            height: 160,
	          });
	          initialAvatarURL = avatar.src;
	          avatar.src = canvas.toDataURL();
	          $progress.show();
	          $alert.removeClass('alert-success alert-warning');
	          canvas.toBlob(function (blob) {
	            var formData = new FormData();

	            formData.append('avatar', blob, 'avatar.jpg');
	            $.ajax('', {
	              method: 'POST',
	              data: formData,
	              processData: false,
	              contentType: false,

	              xhr: function () {
	                var xhr = new XMLHttpRequest();

	                xhr.upload.onprogress = function (e) {
	                  var percent = '0';
	                  var percentage = '0%';

	                  if (e.lengthComputable) {
	                    percent = Math.round((e.loaded / e.total) * 100);
	                    percentage = percent + '%';
	                    $progressBar.width(percentage).attr('aria-valuenow', percent).text(percentage);
	                  }
	                };

	                return xhr;
	              },
	              complete: function () {
	                $progress.hide();
	              },
	            });
	          });
	        }
	      });
	    });
}*/
	// profile image crop and update js end