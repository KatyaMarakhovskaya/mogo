
let gradient = document.querySelectorAll(".team-member_image-contaigner");

// let networksBar = document.querySelectorAll(".social-networks_bar")
//
// networksBar.forEach(function(item){
//   item.addEventListener("mouseover", showSocialNetworksInside);
// });
//
// function showSocialNetworksInside(event){
//   console.log(event.target.classlist)
//   console.log("hhhhhhhhhhhhh")

//console.log(document.documentElement.clientWidth)
function resize(){
        if(document.documentElement.clientWidth<1200)  {
          console.log(document.documentElement.clientWidth)
          document.querySelector(".work7").classList.add("none")
          document.querySelector(".work7").classList.remove("gradient")

        }else{
          document.querySelector(".work7").classList.add("gradient")
          document.querySelector(".work7").classList.remove("none")
        }

}

window.onload = function (){
  resize();
}


gradient.forEach(function(item) {
  item.addEventListener("mouseover", showSocialNetworks);
  item.addEventListener("mouseout", removeSocialNetworks);
});


function showSocialNetworks(event){
  console.log(event.target.dataset.network)
  let coveredPhotoDataset = event.target.dataset.network;
  console.log(event.target.classList)
  document.querySelector(`.${coveredPhotoDataset}`).classList.remove("none")
  document.querySelector(`.${coveredPhotoDataset}`).classList.add("layout")

}

// function showSocialNetworks(event){
//   console.log(event.target.dataset.network)
//   let coveredPhotoDataset = event.target.dataset.network;
//   console.log(event.target.classList)
//   console.log(document.querySelector(`.${coveredPhotoDataset}`).classList.remove("none"))
//   console.log(document.querySelector(`.${coveredPhotoDataset}`).classList.add("layout"))
//
// }

function removeSocialNetworks(event){
  console.log(event.target.dataset.network)
  let coveredPhotoDataset = event.target.dataset.network;
  console.log(event.target.classList)
  document.querySelector(`.${coveredPhotoDataset}`).classList.add("none")
  document.querySelector(`.${coveredPhotoDataset}`).classList.remove("layout")
}
