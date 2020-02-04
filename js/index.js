var images = Array.from( document.getElementsByClassName("img-fluid")) ;
var boxContainer = document.querySelector(".box_container") ;
var close = document.getElementById("close") ;
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var currentImageIndex ;
for( var i=0 ; i< images.length ; i++)
{
     images[i].addEventListener("click" ,showBox)
}

function showBox(e)
{
   boxContainer.style.transform ="scale(1,1)";
   boxContainer.firstElementChild.style.transform ="scale(1,1)";   
   var imgSrc = e.target.src ;
   boxContainer.firstElementChild.style.backgroundImage =`url(${imgSrc})` ;
   currentImageIndex = images.indexOf(e.target) ;
}
close.addEventListener("click" , hideBox) ;
function hideBox()
{
   //boxContainer.style.display ="none" ;
   boxContainer.style.transform ="scale(0,0)";
} ;
// go next
next.addEventListener("click" , goNext) ;
function goNext()
{
   currentImageIndex++ ;
   if(currentImageIndex == images.length)
   {
      currentImageIndex = 0 ;
   }
   boxContainer.firstElementChild.style.backgroundImage =`url(${images[currentImageIndex].src})` ;
} ;
// go prev
prev.addEventListener("click" ,goPrev) ;
function goPrev()
{
   
   currentImageIndex-- ;
   if(currentImageIndex<0)
   {
      currentImageIndex = images.length-1 ;
   }
   boxContainer.firstElementChild.style.backgroundImage =`url(${images[currentImageIndex].src})` ;

}
document.addEventListener("keydown" ,function(e)
{
   if(e.keyCode== 39)
   {
      goNext();
   } else if(e.keyCode==37)
   {
    goPrev() ;
   } else if(e.keyCode==32)
   {
      hideBox() ;
   }
})