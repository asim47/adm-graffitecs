/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});






	// 	$('.upload-btn').click(function(e){
	// 	e.preventDefault();
	// 	var spanInput = $('.box span:not(.labelBox)');
	// 	var boxstrong = $('.box strong');
	// 	var boxstrong1 = boxstrong[i]
	// 	boxstrong1.classList.add('view-btn');
	// 	boxstrong.html('<i class="fa fa-eye" aria-hidden="true"9></i>' + ' View');

	// 	$(this)[i].classList.add('delete-btn');
	// 	$(this).html('<i class="fa fa-trash" aria-hidden="true"></i>' + ' Delete');

	// 	var spanInput1 = spanInput[i];
	// 	spanInput.html('<i class="fa fa-file-image-o" aria-hidden="true"></i>');
	// 	spanInput.css({'border':'none', 'width':'50px'});
	// })






}( document, window, 0 ));



$('.upload-btn').on('click',function(e){
	e.preventDefault();
	var span = $(this).closest('.box').find('span')[1];
	   $(span).addClass("icon-file-upload");
	   $(span).html('<i class="fa fa-file-image-o" aria-hidden="true"></i>');
	var browse = $(this).closest('.box').find('strong');
		$(browse).addClass('view-btn');
		$(browse).html('<i class="fa fa-eye" aria-hidden="true"></i> view');

		$(this).html('<i class="fa fa-trash-o" aria-hidden="true"></i> Delete');
		$(this).addClass('delete-btn');
})


$('.request-documents button').on('click',function(){
	$(this).addClass('selectedFace');
});