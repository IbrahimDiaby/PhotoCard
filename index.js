const len = 8;
let wrapper = document.querySelector(".wrapper");
let body = document.querySelector("body");
let images = document.querySelectorAll(".switcher img");
let currentFrame = 0;

const init = () => {
  cardBuilder();

  const img = document.querySelector(".switcher img");
  const prev = document.querySelector(".wrapper-container i.fa-arrow-left");
  const next = document.querySelector(".wrapper-container i.fa-arrow-right");
  let size = 60 + 5 + 2; // width + gap + borderWidth

  img.setAttribute("src", `./images/bg1.jpg`);

  wrapper.addEventListener("scrollend", (e) => {
    prev.style.visibility = (wrapper.scrollLeft === 0) ?
     "hidden" : "visible";

    next.style.visibility = 
    (wrapper.scrollLeft > (wrapper.scrollWidth / 2)) ? 
    "hidden" : "visible";

    console.info(wrapper.scrollLeft);
    console.info(wrapper.scrollWidth);
  });

  prev.addEventListener("mousedown", () => {
    wrapper.scrollLeft -= size;
  });

  next.addEventListener("mousedown", () => {
    wrapper.scrollLeft += size;
  });

}

const cardBuilder = () => {

  for (let i = 0; i < len; i++) {
    let c = document.createElement("div");
    let img = document.createElement("img");

    c.classList.add("card");
    img.setAttribute("src", `./images/bg${i+1}.jpg`);
    
    c.appendChild(img);
    wrapper.appendChild(c);

    c.addEventListener("click", (e) => {
      images[currentFrame%2].classList.toggle("show");
      images[(currentFrame+1)%2].classList.toggle("show");
      ++currentFrame;

      images[currentFrame%2].setAttribute("src", img.getAttribute("src"));
      images[currentFrame%2].classList.add("show");

      console.log(images[currentFrame%2]);
    });
  }
}