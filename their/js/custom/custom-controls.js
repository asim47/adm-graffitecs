

var contentTypeForm = "application/x-www-form-urlencoded; charset=UTF-8;";
var contentTypeJSON = "application/json; charset=utf-8";

function showLoading(element, className) {
	var loadingImg = $("#loadingImgVal").val();	
	element.html(loadingImg);
	element.addClass(className);
}

function showLoader(element, margin){
	var locale = $('#lang').val();
	
	var marginStyle = "margin-left:"
	if (locale == 'ar') {
		marginStyle = "margin-right:"
	}
	
	
	if(isNaN(margin)){
		margin = "30";
	}
	
	//var loadingImg ="<img id='loadingImg' style='"+marginStyle+ margin +"%;' src='../images/custom/adm-loader.gif'>";
	//element.html(loadingImg);
	//var loadingElem ="<div class='smallLoader' style='"+marginStyle+ margin +"%;' >";
	var loadingElem ="<img style='"+marginStyle+ margin +"%;' src='"+contextPath+"/secure/images/custom/mini-loader-2.gif?ver=1.1'>";
	element.html(loadingElem);
}

function showLoaderSmall(element, margin){
	var locale = $('#lang').val();
	
	var marginStyle = "margin-left:"
	if (locale == 'ar') {
		marginStyle = "margin-right:"
	}
	
	
	if(isNaN(margin)){
		margin = "10";
	}
	
	var loadingElem ="<div class='smallLoader_1' style='"+marginStyle+ margin +"%;' >";
	element.html(loadingElem);
}

function loadSurveyWidgetGeneric() {
	
	var widgetDiv = $("#widgetSurvey");
	showLoader(widgetDiv, "30");
	$.ajax({
		type : "POST",
		url : contextPath + "/secure/survey/getUserPendingSurveyNm",
		//data : JSON.stringify(formData),
		contentType : contentTypeJSON,
		success : function(data) {
			widgetDiv.html(data);
		},
		error : function(response, textStatus) {
			widgetDiv.html(labels['internalError']);
		}
	});
}

function showLoadingSmall(element, className) {
	var loadingImg = $("#loadingImgSmallVal").val();
	element.html(loadingImg);
	$("#loadingImgSmall").addClass(className);
}

function initSectorDiv(elementIdForSector,elementIdForDivison){
	
	initSectorDiv(elementIdForSector,elementIdForDivison,null);
}

function initSectorDiv(elementIdForSector,elementIdForDivison,elementIdForSection){
	
	$('select[id="'+elementIdForSector+'"]').change(function() {
		var sectorId = $(this).val();
		$('select[id="'+elementIdForDivison+'"]').val("");
		$('select[id="'+elementIdForSection+'"]').val("");
		loadDivisionsForSector(sectorId,elementIdForDivison);
	
	 });
	

	
	if(elementIdForSection){	
	
		$('select[id="'+elementIdForDivison+'"]').change(function() {
			var divisionId = $(this).val();
			loadSectionForDivision(divisionId,elementIdForSection);
	
	 });
	
	}
}


function loadDivisionsForSector(sectorId,elementIdForDivison){
	
	
	$('select[id="'+elementIdForDivison+'"]').find('option').not(':first')	.remove();
	var url = contextPath + "/secure/utilities/findDivisionsBySector/" + sectorId;
	var locale = $('#lang').val();
	
	if(sectorId){
	
		$.get(url,function(data) {
			$.each(data,function(i,obj) {
				var select_data ="";
				if (locale == 'en') {
					select_data = "<option value="+obj.id+">" + obj.nameEn + "</option>";
				}
				else {
					select_data = "<option value="+obj.id+">" + obj.nameAr + "</option>";
				}
				$(select_data).appendTo('select[id="'+elementIdForDivison+'"]');
			});
	 	});
	}
	return false;
}

function loadSectionForDivision(divisionId,elementIdForSection){
	
	$('select[id="'+elementIdForSection+'"]').val("");
	$('select[id="'+elementIdForSection+'"]').find('option').not(':first')	.remove();
	var url = contextPath + "/secure/utilities/findSectionByDivision/" + divisionId;
	var locale = $('#lang').val();
	
	if(divisionId){
	
		$.get(url,function(data) {
			$.each(data,function(i,obj) {
				var select_data ="";
				if (locale == 'en') {
					select_data = "<option value="+obj.id+">" + obj.nameEn + "</option>";
				}
				else {
					select_data = "<option value="+obj.id+">" + obj.nameAr + "</option>";
				}
				$(select_data).appendTo('select[id="'+elementIdForSection+'"]');
			});
	 	});
	}
	return false;
}



function loadFolderData(folderId,folderType,foldersContainer,entityId,entityType,entityFolderId){
	
	showLoader(foldersContainer, "40");
	
	$.ajax({
		type : "POST",
		url : contextPath+ "/secure/sharedFiles/getFolderDirs/" + folderId + "/" + folderType + "?currentEntityId="+entityId+ "&currentEntityType="+entityType ,
		//data : JSON.stringify(formData),
		contentType : contentTypeJSON,
		success : function(data) {
		
			
			foldersContainer.html(data);	//this
			
			if (foldersContainer.hasClass("gtx-gridview")){
			
				foldersContainer.find('.files_item').removeClass('col-sm-12').addClass('col-sm-2');			
			}
		
			if(folderType=="policy"){
				
				$("#currentlyOpenedPolicyFolder").val(folderId);
				$("#currentlyOpenedFolderEntityId").val(entityFolderId);
			}
			else if(folderType=="user"){
				$("#currentlyOpenedUserFolder").val(folderId);
			}
		},
		error : function(response, textStatus) {
			foldersContainer.html( labels['internalError']);
		}
	});
}


function deleteDir(entryId, dirType){

	alertify.confirm(messages['fileDirectory'], messages['sureDeleteDir'], function() {
		deleteDirConfirmed(entryId, dirType);
	}, function() {
		alertify.error(messages['deletionCanceled']).dismissOthers(); 
	}).set('labels', {ok:messages['okOption'], cancel:messages['cancelOption']});
}

function deleteDirConfirmed(entryId, dirType){
	
	var parentFolderId = null;
	var foldersContainer = null;

	if (dirType == "policy") {
		parentFolderId = $("#currentlyOpenedPolicyFolder").val();
		foldersContainer = $("#entity_policy_folders");
	} else if (dirType == "user") {
		parentFolderId = $("#currentlyOpenedUserFolder").val();
		foldersContainer = $("#user_folders_container");
	}

	var currentEntityId = $("#currentEntityId").val();
	var currentEntityType = $("#currentEntityType").val();

	$.ajax({
		type : "POST",
		url : contextPath + "/secure/sharedFiles/delete/" + entryId,
		contentType : contentTypeJSON,
		success : function(data) {

			if ((null != data && data == true) || (null != data && null != data.responseText && data.responseText.includes("true"))) {
				loadFolderData(parentFolderId, dirType,foldersContainer, currentEntityId,currentEntityType,0);
				alertify.success(messages['successDeleteDir']).dismissOthers(); 

			} else {
				alertify.error(messages['unableDeleteDir']).dismissOthers(); 
			}
		},
		error : function(response, textStatus) {
			foldersContainer.html(labels['internalError']);
			alertify.error(messages['errorDeleteDir']).dismissOthers(); 
		}
	});
	
}




function downloadAndViewAttachmentById(documentId){
	if(documentId ){
		//var downloadURL =contextPath + "/secure/utilities/downloadAttachment/"+documentId;
		var downloadURL =contextPath + "/secure/getFileNetResource/file/"+documentId;
		window.open(downloadURL,'_blank', 'location=yes,height=600,width=800,scrollbars=yes,resizable=yes,status=yes');
		
	}else{
		alertify.error(messages['noAttachmentErr']).dismissOthers(); 
	} 
}


function downloadAndViewAttachment(documentName, encDocumentId){
	if(encDocumentId){
	/*	var downloadURL =contextPath + "/secure/dashboard/download-media/"+ documentName +"?secureId="+ encDocumentId;*/
		var downloadURL =contextPath + "/secure/getFileNetResource/file/"+encDocumentId;
		var win = window.open(downloadURL,'_blank', 'location=yes,height=600,width=800,scrollbars=yes,resizable=yes,status=yes');
		
		setTimeout(function(){ 
			win.title=documentName;
		}, 1);
		
	}else{
		alertify.error(messages['noAttachmentErr']).dismissOthers(); 
	} 
}







/*
Marks as liked and update counter in popup
Arg 1: Selector for Like button in Popup
Arg 2: Parent Clicked Object (Parent should have  data-module and data-entry with its a.like-counter in caller/list page)
*/
function updateLikeInPopup(popupLikeSelector,clickedObj){
	
	var likesCount = clickedObj.find('#clicks').text();
	var isLiked = clickedObj.find('a.like-counter > img').hasClass('liked');
	var moduleId = clickedObj.find('a.like-counter').attr('data-module');
	var entryId = clickedObj.find('a.like-counter').attr('data-entry');
	
	
	if(isLiked){
		$(popupLikeSelector +' a').find('img').addClass('liked').attr('src', '../images/likeHover.png?version=1.1');
	}else{
		$(popupLikeSelector +' a').find('img').removeClass('liked').attr('src', '../images/like.png');
	}
		

	$(popupLikeSelector +' a.like-counter').attr('data-module',moduleId);
	$(popupLikeSelector +' a.like-counter').attr('data-entry',entryId);
	$(popupLikeSelector +' a:last-child').text(likesCount);
	 
}

/* 
Marks as liked and update counter in main page
Arg 1: Selector for Like button in Popup
(mainLikeSelector id should be #ModuleName-EntryId) 
*/

function updateLikeFromPopup(popupDtlLikeSelector){
	
	var detailModuleName=$(popupDtlLikeSelector +' a.like-counter').attr('data-module');
	var detailEntryId=$(popupDtlLikeSelector +' a.like-counter').attr('data-entry');
	var isDetailLiked = $(popupDtlLikeSelector +' a.like-counter > img').hasClass('liked');	
	var detailLikesCount = $(popupDtlLikeSelector).find('#clicks').text();
	
	var mainLikeSelector = "#"+detailModuleName + "-" + detailEntryId;
	
	
	if( detailModuleName &&  detailEntryId && detailLikesCount) {
		
		$(mainLikeSelector +' a:last-child').text(detailLikesCount);
		
		if(isDetailLiked){
			$(mainLikeSelector +' a').find('img').addClass('liked').attr('src', '../images/likeHover.png?version=1.1');
		}else{
			$(mainLikeSelector +' a').find('img').removeClass('liked').attr('src', '../images/like.png');
		}
	}
}


function loadComments(moduleId,entryId,selector){
	
	var commentsDiv = $(selector);
	
	 showLoader(commentsDiv, "30");
	 $.ajax({
		  type: "POST",
		  url: contextPath + "/secure/utilities/loadComments/"+moduleId+"/"+entryId,
		  success: function(data) {
			 if(data){
				 commentsDiv.html(data);
				}
			 else{
				 alertify.error(messages['unableLoadComments']).dismissOthers(); 
				 return false;
			 }
		  }  ,
		 error: function(response,textStatus) {
			alertify.error(messages['somethingWrong']).dismissOthers(); 
		  }							
	});
	
}



function saveComments(moduleId,entryId,commentInpSelector,selector){
	
	
	var formData = new Object();
	formData.entryId = entryId;
	formData.module = new Object();
	formData.module.id = moduleId;
	formData.body= $(commentInpSelector).val();
	
	if(formData.body==''){
		alertify.error(messages['noCommentTextErr']).dismissOthers(); 
		$(commentInpSelector).focus();
		return false;
	}
	

	$.ajax({
		  type: "POST",
		  url: contextPath + "/secure/utilities/saveComment",
		  data:JSON.stringify(formData),
		  contentType: contentTypeJSON,
		  success: function(data) {
			  if(data){
				  $(commentInpSelector).val("");
				  loadComments(moduleId,entryId,selector);
				  alertify.success(messages['commentPostedSuccess']).dismissOthers(); 
				 //$(".post-write-comment").addClass('post-write-comments-highlight');
				   updateCommentsCountFromPopup(moduleId,entryId,"add")
				}
			 else{
				 return false;
			 }
		  }  ,
		 error: function(response,textStatus) {
			
		  }							
	});


}

function updateCommentsCountFromPopup(moduleId,entryId,type){
	
	 	var countOfComments=  $("#comments_count_"+moduleId+"_"+entryId).val();
	 	var newValue="";
	 	if(type=="add"){
	 		newValue = parseInt(countOfComments) + parseInt(1);
	 	}
	 	else{
	 		newValue = parseInt(countOfComments) - parseInt(1);
	 	} 
	
	  $("#comments_count_"+moduleId+"_"+entryId).val(newValue);
	  $(".comments_count_"+moduleId+"_"+entryId).text(newValue);
	  $(' a.comments_counter').text(newValue);
	  
	  return false;
}


function setUpEnterKeyForClick(inputSelector , buttonSelector){
	
	$(inputSelector).keypress(function (e) {
		var key = e.which;
		if(key == 13)  // the enter key code
		{
			$(buttonSelector).trigger( "click" );
			return false;  
		}
	});   
}

function searchUserByStaffNo(staffNo ,parentElement, clickedElement){
	
	clickedElement.addClass('disablePointerEvents');
	
	//Reset Current Fields
	resetUserSearchFields(parentElement);
	
	if(staffNo && $.isNumeric(staffNo)){

		$.ajax({
			type : "POST",
			url : contextPath + "/secure/utilities/searchUser/" + staffNo,
			contentType : contentTypeJSON,
			success : function(data) {

				if (data) {
					//Populate date if found
					populateUserSearchFields(parentElement, data);
					alertify.success(messages['recordfound']).dismissOthers(); 
					
				} else {
					alertify.error(messages['noRecForStaffNoErr'] +" "+staffNo ).dismissOthers(); 
				}
				
				clickedElement.removeClass('disablePointerEvents');
				
			},
			error : function(response, textStatus) {
				
				alertify.error(messages['somethingWrong']).dismissOthers(); 
				clickedElement.removeClass('disablePointerEvents');
			}
		});
	}else{
		alertify.error(messages['validStaffNoErr']).dismissOthers(); 
		clickedElement.removeClass('disablePointerEvents');
	}
}



function resetUserSearchFields(parentElement){
	
	//Reset Current Fields
	parentElement.find('.search_user_id').val("");
	parentElement.find('.search_user_staff_no').val("");
	parentElement.find('.search_user_name_ar').val("");
	parentElement.find('.search_user_name_en').val("");
	parentElement.find('.search_user_sector_name_en').val("");
	parentElement.find('.search_user_sector_name_ar').val("");
	parentElement.find('.search_user_division_name_en').val("");
	parentElement.find('.search_user_division_name_ar').val("");
	parentElement.find('.search_user_section_name_en').val("");
	parentElement.find('.search_user_section_name_ar').val("");
	parentElement.find('.search_user_email').val("");
	parentElement.find('.search_user_prof_email').val("");
	
}


function populateUserSearchFields(parentElement, data){
	
	
	
	//Reset Current Fields
	parentElement.find('.search_user_id').val(data.userId);
	parentElement.find('.search_user_staff_no').val(data.staffNo);
	parentElement.find('.search_user_name_ar').val(data.fullNameAr);
	parentElement.find('.search_user_name_en').val(data.fullNameEn);
	parentElement.find('.search_user_sector_name_en').val(data.sectorEn);
	parentElement.find('.search_user_sector_name_ar').val(data.sectorAr);
	parentElement.find('.search_user_division_name_en').val(data.divisionEn);
	parentElement.find('.search_user_division_name_ar').val(data.divisionAr);
	parentElement.find('.search_user_section_name_en').val(data.sectionEn);
	parentElement.find('.search_user_section_name_ar').val(data.sectionAr);
	parentElement.find('.search_user_email').val(data.email);
	parentElement.find('.search_user_prof_email').val(data.profileEmail);
	
}



/* ************  Event Calendar functions ****************************** */
	
	var selectedDate;
	function  testDate(){
		return selectedDate;
		
	}

function loadEventData(){
	
	$('#eventsCalendar').remove();
	$("#eventsCalendarDiv").html('<div id="eventsCalendar"></div>');
	
	var eventUrl=contextPath +"/secure/events/find-events";
	
	$.ajax({
        type: "POST",
        url: eventUrl,
         success: function (data) {
        	 
        	
        	 
       	 initFullCalender(data);
        	}
   });
	
	
}
 
function initFullCalender(data){
	
	
	var language = $('#lang').val();
	var prevNextBttn="prev,next"
	
	if(language=='ar'){
		language = 'ar-kw';
	   prevNextBttn="next,prev"
	}
	
	
//	alert(language);
	
	$('#eventsCalendar').fullCalendar({
			
		selectable: true,	
		 select: function(start, end, jsEvent, view) {
	         var allDay = !start.hasTime() && !end.hasTime();
	        if(moment(start._d).add(1, 'days').format('YYYY-MM-DD')==moment(end._d).format('YYYY-MM-DD')){
	        	  selectedDate = moment(start).format('MM/DD/YYYY');
	        	  document.getElementById("eventDate").value = testDate();
	        	  document.getElementById('select').click();
	        	  
	        }
	        else{
	        	var language = $('#lang').val();
	        	if(language=='ar'){
	        		alert("يرجي اختيار يوم واحد فقط ");
	        	}
	        	else{
	        	alert("Please select only one day");
	        	}
	        	
	        }        
	         
	    }

	,
		
		 header: {
		        left: prevNextBttn,
		        center: 'title',
		        right: ''
		      },
		
		defaultDate: new Date(),
		editable: false,
		rerenderEvents:false,
		eventLimit: false, // allow "more" link when too many events
		locale: language,
		
	    events:  $.map(data, function (item, i) {
	    	  
	    	
	    		var event = new Object();
        			 
	    		var color="#e4402f";
	    		if(item.hallId==7){
	    			color="#916492";
	    		}
	    		
	    		
	    		
	    		
	    		event.title= item.title,
                event.start= moment(new Date(item.start)),
                event.backgroundColor = color,
                event.stime=  moment(new Date(item.start)),
                event.etime= item.time,
                event.desc=item.desc,
                event.location=item.location,
                event.eCategory=item.hall
              	               
               
               return event;
	          
	    	  
	      }),
	      eventRender: function(eventObj, $el,cell) {
	    	  
	    	
	    	
		        var dateselector = eventObj.start.format('YYYY-MM-DD');
		        var a = eventObj.backgroundColor;
		        var b = eventObj.title;
		        var c = eventObj.desc;
		        var d = eventObj.eCategory;
		        var f = eventObj.location;
		        var g = eventObj.etime;
		       
		       
		        
		        if (b) {b =  "<h3>"+b+"</h3>"} else {b = ""}
		        if (c) {c =  "<p>"+c+"</p>"} else {c = ""}
		        if (d) {d =  "<h5>"+d+"</h5>"} else {d = ""}
		        if (g) {g =  "<h5>"+g+"</h5>"} else {g = ""}
		        if (f) {f =  "<p><i class='fa fa-map-marker'></i>"+f+"</p>"} else {f= ""}
		        var tip = $('td[data-date*='+dateselector+']').find('.tooltip-calendar');
		        $('td[data-date*='+dateselector+']').find('.fc-day-number').addClass('hasEvent');
		        if (tip.length == 0) {
		          $('td[data-date*='+dateselector+']').append('<div class="tooltip-calendar"><div class="tooltip-calendar-wrapper"></div></div');
		        }
		        if (a) {
		          $('td[data-date*='+dateselector+']') .find('.fc-day-number').css('background',a)
		          var token = $('<div class="tooltip-box hasColor" data-background="'+a+'">' + b + d + g+ f  + '</div>');
		           $(token).appendTo('td[data-date*='+dateselector+'] .tooltip-calendar-wrapper');
		           return false;
		        } else {
		          var token =  $('<div class="tooltip-box">' + b + d + g + f  + '</div>');
		           $(token).appendTo('td[data-date*='+dateselector+'] .tooltip-calendar-wrapper');
		           return false;
		        }
		     },
	      eventAfterAllRender: function (view) {

	     }
	     
	     
	    });
	
	}
	
		
function loadUpcommingEventData(){
	
	var eventUrl=contextPath +"/secure/events/find-upcomming-events";
	
	$.ajax({
        type: "POST",
        url: eventUrl,
         success: function (data) {
        	 
        	$("#upcommingEventsDiv").html(data);
        	 
         }
   });
	
	return false;
}
   


var waitTime = 0.4 * 60 * 1000;

window.setInterval(function() {
//	getYoutubeLive();
}, waitTime);

function getYoutubeLive() {
	var url="";
	if (!($("#youtubeModel").data('bs.modal') || {})._isShown) {
		$.ajax({
				type : "POST",
				url : contextPath + "/secure/youtube-controller/home",
				success : function(data) {
					if(data && data!="" && data.length<50){
						
						url="http://www.youtube.com/embed/"+data +"?controls=0;&autoplay=1";
						$('#youtubeModel').modal('show');
					}else {
						url="";	
						$('#youtubeModel').modal('hide');
					}
					$("#liveBroadCastId").attr("src",url);
				},
				error : function(response, textStatus) {
					//alertify.error("Something went wrong while fetching the live broadcast").dismissOthers();
				}
			});
	};

}



function initializeDatePick(){
	
	$("input.datePick").datepicker({ 
		dateFormat: "mm/dd/yy", changeMonth: true, changeYear: true,autoClose: true}
		).keyup(function(e) {
			
			if(e.keyCode == 8 || e.keyCode == 46) {
		        $.datepicker._clearDate(this);
		    }
	});
	
	$("input.datePick").change(function(){$(this).removeClass("border-red");});
	
	$(".fromDate").change(function(){
		var date2 = $(this).datepicker('getDate');
        date2.setDate(date2.getDate());
        $('.toDate').datepicker('option', 'minDate', date2);
		return false;
	});
	
	$(".setMaxTill").change(function(){
		var date2 = $(this).datepicker('getDate');
        date2.setDate(date2.getDate());
        $('.getMaxTill').datepicker('option', 'maxDate', date2);
		return false;
	});
	
	$("input.datePickerFuture").datepicker({ 
		dateFormat: "mm/dd/yy", 
		 minDate: 1 ,
		changeMonth: true, 
		changeYear: true,
		autoClose: true
		}
		).keyup(function(e) {
			
			if(e.keyCode == 8 || e.keyCode == 46) {
		        $.datepicker._clearDate(this);
		    }
	});
}


function initializeDatePicker(){

	$("input.datePicker").datepicker({ 
		dateFormat: "mm/dd/yy", 
		 minDate: 0 ,
		changeMonth: true, 
		changeYear: true,
		autoClose: true
		}
		).keyup(function(e) {
			
			if(e.keyCode == 8 || e.keyCode == 46) {
		        $.datepicker._clearDate(this);
		    }
	});
	
	
	
	
	
	$("input.datePickerPast").datepicker({ 
		dateFormat: "dd/mm/yy", 
		maxDate: 0 ,
		changeMonth: true, 
		changeYear: true,
		autoClose: true
		}
		).keyup(function(e) {
			
			if(e.keyCode == 8 || e.keyCode == 46) {
		        $.datepicker._clearDate(this);
		    }
	});
}


function saeedAlert(type, message, title, timeoutSeconds){
	 
	 var timeoutDuration = 3000;	//defualts
	 var defualtSuccessTitle = messages['success'];
	 var defualtFailTitle = messages['error'];
	 
	 if(timeoutSeconds && $.isNumeric(timeoutSeconds)){
		 timeoutDuration = timeoutSeconds * 1000;
	 }
	 
	 if(message){
		 if(type && type.toLowerCase() === 'error'){
			 $("#success_alert #saeed_alert_happy").addClass('hide');
			 $("#success_alert #saeed_alert_sad").removeClass('hide');
			 if(!title){
				 title = defualtFailTitle;
			 }
			 
		 }else{
			 $("#success_alert #saeed_alert_happy").removeClass('hide');
			 $("#success_alert #saeed_alert_sad").addClass('hide');
			 if(!title){
				 title = defualtSuccessTitle;
			 }
		 }
		 
		 $('#success_alert #saeed_alert_title').text(title);
		 $('#success_alert #saeed_alert_message').text(message);
		 $('#success_alert').modal('show');
		 
		 $('.modal .modal-dialog').attr('class', 'modal-dialog  success_alert  animated');
			window.setTimeout(function () {
				$('#success_alert').modal('hide');
			},timeoutDuration);
		 
	 }
	 
}






function deleteProfileData(entryId,entryType,formValue){
	
	
	
	alertify.confirm(messages['user_profile_title'], messages['sureDeleteDir'], function() {
		deleteProfileConfirmed(entryId,entryType,formValue);
	}, function() {
		alertify.error(messages['deletionCanceled']).dismissOthers(); 
	}).set('labels', {ok:messages['okOption'], cancel:messages['cancelOption']});
}

function deleteProfileConfirmed(entryId,entryType,formValue){
	
	
	
	
	$.ajax({
		type : "POST",
		url : contextPath + "/secure/profile/delete/" + entryId +"/"+entryType,
		contentType : contentTypeJSON,
		success : function(data) {

			if ((null != data && data == true) || (null != data && null != data.responseText && data.responseText.includes("true"))) {
				saeedAlert('success',messages['profile_sucess_delete'],null, null);
				formValue.closest('tr').remove();

			} else {
				saeedAlert('error',messages['somethingWrong'],null, null);
			}
		},
		error : function(response, textStatus) {
			//alertify.error("<spring:message code="newsDelError.label"/>").dismissOthers();
			saeedAlert('error',messages['somethingWrong'],null, null);
		}
	});
	
}


function allowOnllyNumbers(){
	
	$(".number").keypress(function (e) {
	   if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		   return false;
	   }
	});
	
	$(".number").on('paste', function(e) {
		alertify.error(messages['enterValuemanually']).dismissOthers();
		return false;
    });
	
	$(".number2").keypress(function (e) {
		
		var regex = new RegExp("^[0-9-!@#$%&*?]");
        var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
	});
	
}



function loadTaskManagementCount(){
	$.get(  contextPath + "/secure/tasks-management/refreshCounts", function( data ) {
	    var result = data.split(',');
	    //$('#myInbox').text(result[0]);
	    //$('#myTask').text(result[1]);
	    $('.taskmgmt-inboxCount').text(result[0]);
	 });
}

function loadInboxCount(){
	
	$.ajax({
		type : "POST",
		url : contextPath + "/secure/widget/myInboxCount",
		success : function(data) {
			$(".req-inboxCount").html(data);
		},
		error : function(response, textStatus) {
			
		}
	});
	return false;
	
}

function loadReqCount(){
	
	$.ajax({
		type : "POST",
		url : contextPath + "/secure/widget/myReqCount",
		success : function(data) {
			$(".saeed-myreqCount").html(data);
		},
		error : function(response, textStatus) {
			
		}
	});
	return false;
	
	
}

function loadTaskCount(){
	
	$.ajax({
		type : "POST",
		url : contextPath + "/secure/widget/myTaskCount",
		success : function(data) {
			$("#myTaskCount").html(data);
		},
		error : function(response, textStatus) {
			
		}
	});
	return false;
}




