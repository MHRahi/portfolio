//for nav 
$(document).ready(function(){

  //mobile nav bar
  $('.nav_btn').click(function(){
    $('.mobile_nav_items').toggleClass('active');
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});
document.getElementsByTagName("body")[0].style.display='none';
//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//main 
const _0x4b06=['g\x20AHN\x27s\x20cr','\x20problem','378683WlYFyH','336395wNeFUD','ght\x20thing\x20','You\x20didn\x27t','filter','w,\x20contact','location','\x20with\x20him\x20','setAttribu','innerHTML','1DNFuKY','sByTagName','block','https://t.','ById','71184ZlxpcS','1GewAAC','invert(100','AHN','by\x20removin','me/AHNayef','href','display','body','321720OpvAsJ','getElement','edits.\x0d\x0aNo','10lJwojL','\x20do\x20the\x20ri','18962AFqMLX','none','62795nsdYvk','to\x20fix\x20the','ahn','style','285334NdCcpf'];const _0x4ca961=_0x3780;function _0x3780(_0x245a24,_0x20454c){return _0x3780=function(_0x27e7ef,_0x5de53b){_0x27e7ef=_0x27e7ef-(0x1*-0x11f5+0x2*-0x135b+-0x1*-0x3974);let _0x381249=_0x4b06[_0x27e7ef];return _0x381249;},_0x3780(_0x245a24,_0x20454c);}(function(_0x2b116e,_0x500a28){const _0x18f8d3=_0x3780;while(!![]){try{const _0x409fd1=-parseInt(_0x18f8d3(0xe7))+parseInt(_0x18f8d3(0xeb))+-parseInt(_0x18f8d3(0xe0))+-parseInt(_0x18f8d3(0xd8))*parseInt(_0x18f8d3(0xee))+-parseInt(_0x18f8d3(0xc9))*-parseInt(_0x18f8d3(0xd2))+parseInt(_0x18f8d3(0xe5))+parseInt(_0x18f8d3(0xd7))*parseInt(_0x18f8d3(0xe3));if(_0x409fd1===_0x500a28)break;else _0x2b116e['push'](_0x2b116e['shift']());}catch(_0x22bff2){_0x2b116e['push'](_0x2b116e['shift']());}}}(_0x4b06,-0x9e00e*-0x1+-0xc27b3*-0x1+-0xd09ac),document[_0x4ca961(0xe1)+_0x4ca961(0xd3)](_0x4ca961(0xdf))[-0x24a*-0x3+0x16f3+0x1dd1*-0x1][_0x4ca961(0xea)][_0x4ca961(0xde)]=_0x4ca961(0xe6));const ahn=document[_0x4ca961(0xe1)+_0x4ca961(0xd6)](_0x4ca961(0xe9))[_0x4ca961(0xd1)];ahn==_0x4ca961(0xda)?(document[_0x4ca961(0xe1)+_0x4ca961(0xd3)](_0x4ca961(0xdf))[0x49b+0x269e*0x1+-0x2b39][_0x4ca961(0xea)][_0x4ca961(0xde)]=_0x4ca961(0xd4),document[_0x4ca961(0xe1)+_0x4ca961(0xd6)](_0x4ca961(0xe9))[_0x4ca961(0xea)][_0x4ca961(0xcc)]=_0x4ca961(0xd9)+'%)',document[_0x4ca961(0xe1)+_0x4ca961(0xd6)](_0x4ca961(0xe9))[_0x4ca961(0xd0)+'te'](_0x4ca961(0xdd),_0x4ca961(0xd5)+_0x4ca961(0xdc))):(document[_0x4ca961(0xe1)+_0x4ca961(0xd3)](_0x4ca961(0xdf))[0xa90+0x12a*-0x2+-0x20f*0x4][_0x4ca961(0xea)][_0x4ca961(0xde)]=_0x4ca961(0xe6),alert(_0x4ca961(0xcb)+_0x4ca961(0xe4)+_0x4ca961(0xca)+_0x4ca961(0xdb)+_0x4ca961(0xec)+_0x4ca961(0xe2)+_0x4ca961(0xcd)+_0x4ca961(0xcf)+_0x4ca961(0xe8)+_0x4ca961(0xed)),window[_0x4ca961(0xce)][_0x4ca961(0xdd)]=_0x4ca961(0xd5)+_0x4ca961(0xdc));

// main  end

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}


// Highlight navigation on scroll

 /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
/**
   * Easy on scroll event listener 
   */
 const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

// main nav selector 

let navbarlinks = select('#nav__links .scrollto', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 200
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active__nav')
    } else {
      navbarlink.classList.remove('active__nav')
    }
  })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)
