//these for progress bar
let progressSpans = document.querySelectorAll(".prog span");
let section = document.querySelector(".our-skills");
//these for count on scroll
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) { //these for progress bar
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (window.scrollY >= statsSection.offsetTop - 300) {//these for count on scroll
        if (!started) {
        nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) { //these for count on scroll
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
        clearInterval(count);
        }
    }, 2000 / goal);
}


//portfolio part
let switcherLis = document.querySelectorAll(".shuffle li");
let imgs = Array.from(document.querySelectorAll(".imgs-container img"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
        });
}

// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
    img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
    });
}


//landingimg-slider
sliderImages = Array.from(document.querySelectorAll(".landing .landimg"));
sliderCount = sliderImages.length;
currentSlide = 1;
nextBtn = document.getElementById("next");
prevBtn = document.getElementById("prev");
liBullets = document.querySelectorAll(".landing .bullets li");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

paginationBullets = Array.from(liBullets);

for (let i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {
        currentSlide = this.getAttribute("data-index");
        theChecker();
    }

};

theChecker();

function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
};

function prevSlide() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
};

function theChecker() {
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add("active");
    paginationBullets[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
    }else{
        prevBtn.classList.remove("disabled");
    }
    if (currentSlide == sliderCount) {
        nextBtn.classList.add("disabled");
    }else {
        nextBtn.classList.remove("disabled");
    }
};

function removeAllActive() {
    sliderImages.forEach( function (img) {
        img.classList.remove("active");
    });
    paginationBullets.forEach(function (li) {
        li.classList.remove("active");
    })
};