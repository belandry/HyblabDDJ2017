var animation_step_slide3=0;

window.onload = function() {

	page = document.getElementById("slide3");

	if (page.addEventListener) {
		page.addEventListener("mousewheel", MouseWheelHandler, false);
		page.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	else page.attachEvent("onmousewheel", MouseWheelHandler);
	
	function MouseWheelHandler(e) {

		var e = window.event || e; // old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

		console.log(animation_step_slide3);

		switch(animation_step_slide3)
		{
			case 0:
			if (delta==-1) {
				$("#text_slide3_app").removeClass('rezoom');
				$("#text_slide3_app").addClass('dezoom');

				$("#titre_slide3").removeClass('disparition');
    			$("#titre_slide3").addClass('apparition');

				$("#ville1_slide3").removeClass('de_apparition');
				$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="-60%";$("#ville1_slide3").removeClass('apparition');});
    			$("#ville1_slide3").addClass('apparition');
    			
				animation_step_slide3++;
			}
			else
			{
				$.fn.fullpage.setAllowScrolling(true);
			}
			break;

			case 1:
			if (delta==-1) {
				$("#text_slide3_disp").removeClass('de_disparition');
				$("#text_slide3_disp").addClass('disparition');

				$("#ville1_slide3").removeClass('de_disparition');
				$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="100%";$("#ville1_slide3").removeClass('disparition'); });
    			$("#ville1_slide3").addClass('disparition');

    			$("#ville2_slide3").removeClass('de_apparition');
    			$("#ville2_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville2_slide3").style.left="-2%";$("#ville2_slide3").removeClass('apparition');});
    			$("#ville2_slide3").addClass('apparition');

				animation_step_slide3++;
			}
			else {
				$("#text_slide3_app").removeClass('dezoom');
				$("#text_slide3_app").addClass('rezoom');

				$("#titre_slide3").removeClass('apparition');
    			$("#titre_slide3").addClass('disparition');

    			$("#ville1_slide3").removeClass('apparition');
    			$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="-180%";$("#ville1_slide3").removeClass('de_apparition');});
    			$("#ville1_slide3").addClass('de_apparition');
    			
				animation_step_slide3--;
			}
			break;

			case 2: 
			if (delta==-1) {
				
    			//animation_step_slide3++;
			}
			else {
				$("#text_slide3_disp").removeClass('disparition');
				$("#text_slide3_disp").addClass('de_disparition');

				$("#ville1_slide3").removeClass('disparition');
				$("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville1_slide3").style.bottom="-60%";$("#ville1_slide3").removeClass('de_disparition');});
    			$("#ville1_slide3").addClass('de_disparition');

    			$("#ville2_slide3").removeClass('apparition');
    			$("#ville2_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {document.querySelector("#ville2_slide3").style.left="-38%";$("#ville2_slide3").removeClass('de_apparition');});
    			$("#ville2_slide3").addClass('de_apparition');

				animation_step_slide3--;
			}
			break;

			case 3: 
			if (delta==-1) {
				
			}
			else {
				//document.querySelector("#ville1_slide3").style.bottom="-180%";
				/*$("#ville1_slide3").removeClass('disparition');
    			$("#ville1_slide3").addClass('de_disparition');*/
				animation_step_slide3--;
			}
			break;
		}

		if (delta==-1)
		{
			
		}
/*
		$("#titre_slide3").addClass('apparition_titre_slide3');
    	$("#ville1_slide3").addClass('apparition_ville1_slide3');

var myElement = document.querySelector("#ville1_slide3").style.opacity="0";


		$("#text_slide3_app").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', anim_apres_dezoom);
        $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', anim_apres_app_ville1);
        
*/



		return false;
	}

}


/*
function anim_apres_dezoom (e) {
    
};

function anim_apres_app_ville1 (e) {
    document.querySelector("#ville1_slide3").style.bottom="-50%";
    $("#ville1_slide3").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {var myElement = document.querySelector("#ville1_slide3").style.opacity="0";});
    $("#ville1_slide3").addClass('disparition_ville1_slide3');
    $("#text_slide3_disp").addClass('disparition_text_slide3');
    $("#ville2_slide3").addClass('apparition_ville2_slide3');
};
*/