window.onscroll = function (e) {
 //document.getElementById(id).style.property

 alert("hey");

if (inViewport($('#slide3')))
{
         $('#text_slide3').style.font.size= 70%;
         $('#text_slide3').style.position= 'flex';
         $('#text_slide3').style.margin.bottom= 70%;
         $('#text_slide3').style.margin.left= 'auto';
         $('#text_slide3').style.margin.right= 'auto';
}

} 



function inViewport (el) {

    var r, html;
    if ( !el || 1 !== el.nodeType ) { return false; }
    html = document.documentElement;
    r = el.getBoundingClientRect();

    return ( !!r 
      && r.bottom >= 0 
      && r.right >= 0 
      && r.top <= html.clientHeight 
      && r.left <= html.clientWidth 
    );

}
