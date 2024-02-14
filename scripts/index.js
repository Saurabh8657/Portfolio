/////////for projects-screenshot crausal
const globeProjectImgArray =["", "","","","","","","","",""] ;
let globeProjectImgDiv = document.querySelector(".globe-project-img") ;
let globeProjectImg = document.createElement("img") ;
globeProjectImgDiv.append(globeProjectImg) ;
let globeCrausalIndex = -1;
let globeId = setInterval(() => {
    globeCrausalIndex++
    if(globeCrausalIndex >= globeProjectImgArray.length){
        globeCrausalIndex = 0 ;
    }
    globeProjectImg.src = globeProjectImgArray[globeCrausalIndex] ;
}, 1500);

const timeProjectImgArray =["/img/time/1.png", "/img/time/2.png","/img/time/3.png","/img/time/4.png","/img/time/5.png","/img/time/6.png","/img/time/7.png","/img/time/8.png"] ;
let timeProjectImgDiv = document.querySelector(".time-project-img") ;
let timeProjectImg = document.createElement("img") ;
timeProjectImgDiv.append(timeProjectImg) ;
let timeCrausalIndex = -1;
let timeId = setInterval(() => {
    timeCrausalIndex++
    if(timeCrausalIndex >= timeProjectImgArray.length){
        timeCrausalIndex = 0 ;
    }
    timeProjectImg.src = timeProjectImgArray[timeCrausalIndex] ;
}, 1500);

const figmaProjectImgArray =["/img/figma/1.png", "/img/figma/2.png","/img/figma/3.png","/img/figma/4.png","/img/figma/5.png","/img/figma/6.png","/img/figma/7.png","/img/figma/8.png","/img/figma/9.png"] ;
let figmaProjectImgDiv = document.querySelector(".figma-project-img") ;
let figmaProjectImg = document.createElement("img") ;
figmaProjectImgDiv.append(figmaProjectImg) ;
let figmaCrausalIndex = -1;
let figmaId = setInterval(() => {
    figmaCrausalIndex++
    if(figmaCrausalIndex >= figmaProjectImgArray.length){
        figmaCrausalIndex = 0 ;
    }
    figmaProjectImg.src = figmaProjectImgArray[figmaCrausalIndex] ;
}, 1800);



let resumeBtn = document.querySelector(".resume-button") ;
let downloadIcon = document.createElement("i") ;
downloadIcon.classList.add("fa-regular", "fa-circle-down") ;
resumeBtn.addEventListener("mouseenter", ()=>{
    resumeBtn.append(downloadIcon)
})
resumeBtn.addEventListener("mouseleave", ()=>{
    resumeBtn.removeChild(downloadIcon)
})


// Get reference to the scroll-to-top button
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");

// Function to scroll to the top when button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
});

// Function to toggle display of scroll-to-top button based on scroll position
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
