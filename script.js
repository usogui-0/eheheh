const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    console.log("YES clicked");
  });
  
  noBtn.addEventListener("click", () => {
    console.log("NO clicked");
  });
  
  const questionScreen = document.getElementById("questionScreen");
const loveScreen = document.getElementById("loveScreen");

let scale = 1; // starting scale

let noIndex = 0; // starting index

noBtn.addEventListener("click", () => {
  // 1️⃣ Grow YES button
  scale += 0.5;
  yesBtn.style.transform = `scale(${scale})`;

  if (scale >= 6) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = 0;
    yesBtn.style.left = 0;
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.fontSize = "3rem";
  }

  // 2️⃣ Only update if there are images left
  if (noIndex < noImages.length) {
    questionImage.src = noImages[noIndex];
    questionText.textContent = noTexts[noIndex];
    noIndex++; // move to next image/text
  }
  // if noIndex >= noImages.length → do nothing, last image/text stays
});


  


yesBtn.addEventListener("click", () => {
    questionScreen.style.display = "none";
    loveScreen.style.display = "block";
    // start floating hearts
  setInterval(createHeart, 300);
 
  });
  

 function createHeart() {
  const heart = document.createElement("img");
  heart.src = "heart-clipart.png"; // your clipart here
  heart.classList.add("heart");

  // random horizontal position
  heart.style.left = Math.random() * 100 + "vw";

  // random size
  heart.style.width = (30 + Math.random() * 30) + "px";

  document.body.appendChild(heart);

  // remove after animation ends
  setTimeout(() => heart.remove(), 5000);
}

const noImages = [
  "no1.jpg",
  "no2.jpg",
  "no3.jpg"
];

const noTexts = [
  "Are you sure? ",
  "Come on, say YES! ",
  "I’ll keep asking! "
];

const questionImage = document.getElementById("questionImage");
const questionText = document.querySelector("#questionScreen h1");
