let imgArray = [
  "https://acplcargo.com/images/fraction-slider/HPB_03.jpg",
  "https://acplcargo.com/images/fraction-slider/NEW_home_page_banner.jpg",
  "https://acplcargo.com/images/fraction-slider/Marathwada.jpg",
  "https://acplcargo.com/images/fraction-slider/delhi_branch_2023.jpg",
  "https://acplcargo.com/images/fraction-slider/important%20Banner-2.png"
];

let index = 0;
let heroImage = document.querySelector("#heroimg");
heroImage.src = imgArray[index];
setInterval(() => {
  heroImage.style.opacity = 0.6;

  setTimeout(() => {
    index = (index + 1) % imgArray.length;
    heroImage.src = imgArray[index];
    heroImage.style.opacity = 1;
  }, 300);

}, 3000);
