
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
// }

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
