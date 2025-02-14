const slider = document.querySelector(".slider__input");
const imgSize = document.querySelector(".slider__image");

slider.addEventListener("input", _.debounce(() => {
    imgSize.style.width = `${slider.value}px`
}, 30))

console.dir(slider)

const box = document.querySelector("#box");

document.addEventListener("mousemove", _.debounce((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    box.style.left = `${mouseX}px`;
    box.style.top = `${mouseY}px`;
  }, 100));
