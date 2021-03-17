
let gradient = document.querySelectorAll(".team-member_image-contaigner");
gradient.forEach(function(item) {
  item.addEventListener("mouseover", showSocialNetworks);
  item.addEventListener("mouseout", removeSocialNetworks);
});



function displayWindowSize(){
    let width = document.documentElement.clientWidth;

    if(width<1200)  {

      document.querySelector(".work7").classList.add("none")
      document.querySelector(".work7").classList.remove("gradient")

    }else{
      document.querySelector(".work7").classList.add("gradient")
      document.querySelector(".work7").classList.remove("none")
    }

}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);





function stopLoad(e) {
    e.preventDefault();
}

let gradientImgs = document.querySelectorAll('.gradient');

 for (let i = 0; i < gradientImgs.length; i++) {

     gradientImgs[i].addEventListener(
         'click', stopLoad, false
     );
 }








window.addEventListener('scroll', scrollPage);

function scrollPage() {

      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
         document.getElementById("myBtn").style.display = "block";
       } else {
         document.getElementById("myBtn").style.display = "none";
       }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function menuToggler(){
      document.querySelector(".menu__box").classList.toggle("none");
      document.querySelector(".menu__box").classList.toggle("open");

      document.querySelector(".hamburger-menu-btn_open").classList.toggle("open");
      document.querySelector(".hamburger-menu-btn_close").classList.toggle("open");
      document.querySelector(".hamburger-menu-btn_open").classList.toggle("none");
      document.querySelector(".hamburger-menu-btn_close").classList.toggle("none");
};










function showSocialNetworks(event){

  let coveredPhotoDataset = event.target.dataset.network;

  document.querySelector(`.${coveredPhotoDataset}`).classList.remove("none")
  document.querySelector(`.${coveredPhotoDataset}`).classList.add("layout")

}


function removeSocialNetworks(event){

  let coveredPhotoDataset = event.target.dataset.network;

  document.querySelector(`.${coveredPhotoDataset}`).classList.add("none")
  document.querySelector(`.${coveredPhotoDataset}`).classList.remove("layout")
}
