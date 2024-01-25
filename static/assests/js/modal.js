const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);

    //close function
    modal.onclick = () => {
        modal.remove();
    };
    modal.append(newImage);
};

// ...................Copy Link modals...........................

let share= document.getElementById('sharecompose');
share.addEventListener('click',function(event){
  let link = window.location.href;
  navigator.clipboard.writeText(link);
  let alert =document.getElementById('alert');
  alert.classList.remove('d-none');
  alert.classList.add('d-block');
  setTimeout(() => {
    alert.classList.remove('d-block');
    alert.classList.add('d-none');
  }, 2000);
});
