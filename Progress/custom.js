const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});
function update() {
    circles.forEach((circle, index) => {
        if (currentActive > index) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
    })
    let actives = document.querySelectorAll(".active");
    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive == circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
 progress.style.width=((actives.length-1)/(circles.length-1)*100+"%");
}