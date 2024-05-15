
var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



  function firstPageAnimate(){
  var tl= gsap.timeline();
    
    tl.from(".nav", {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })

            .to(".boundingelem", {
                y: 0,
                ease: Expo.easeInOut,
                duration: 2,
                delay: -1,
                Stagger: .2
            })

     .from(".homefooter",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
     }) 
}


function circlessquez(){

    //    define default scale value

      var xscale = 1;
       var yscale = 1;

        var xprev =  0;
         var yprev = 0;

           window.addEventListener("mousemove", function (dets) {
             clearTimeout(timeout);

            xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
             yscale =  gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

         xprev= dets.clientX;
              yprev= dets.clientY;

               CircleMouseFollwer(xscale, yscale);

                timeout =setTimeout(function(){
                    document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
                }, 100);
           });
  }


 function CircleMouseFollwer(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
 document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
 }

circlessquez();
  CircleMouseFollwer();
  firstPageAnimate();
 

  document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove", function(details){
       gsap.to(elem.querySelector("img"), {
        opacity:1,
         ease: power1,
       })
    });
})
   