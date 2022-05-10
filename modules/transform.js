// transform input
const posX = document.querySelector("#posX")
const posY = document.querySelector("#posY")
const sizeX = document.querySelector("#sizeX")
const sizeY = document.querySelector("#sizeY")
const rot = document.querySelector("#rot")
const skew = document.querySelector("#skew")

// active shape
let activeShape;
let activePosX = 1;
let activePosY = 1;
let activeSizeX = 20;
let activeSizeY = 20;

export function updateActive() {
    activeShape = document.querySelector("[data-active]");
    if(!activeShape) return;
    activePosX = activeShape.getAttribute("x");
    activePosY = activeShape.getAttribute("y");
    activeSizeX = activeShape.getAttribute("width");
    activeSizeY = activeShape.getAttribute("height");
    // console.log(activeShape);
}

export function resetTransform() {
    posX.value = activePosX;
    posY.value = activePosY;
    sizeX.value = activeSizeX;
    sizeY.value = activeSizeY;
}

// transform
posX.addEventListener("change", () => {
    updateActive();
    if (!posX.value || posX.value < 0) {
        posX.value = 0;
    }
    activeShape.setAttribute("x", posX.value);
    // console.log(`posX value updated to ${posX.value}`);
});

posY.addEventListener("change", () => {
    updateActive();
    if (!posY.value || posY.value < 0) {
        posY.value = 0;
    }
    activeShape.setAttribute("y", posY.value);
    // console.log(`posY value updated to ${posY.value}`);
});

sizeX.addEventListener("change", () => {
    updateActive();
    if (!sizeX.value || sizeX.value < 0) {
        sizeX.value = 0;
    }
    activeShape.setAttribute("width", sizeX.value);
    // console.log(`sizeX value updated to ${sizeX.value}`);
});

sizeY.addEventListener("change", () => {
    updateActive();
    if (!sizeY.value || sizeY.value < 0) {
        sizeY.value = 0;
    }
    activeShape.setAttribute("height", sizeY.value);
    // console.log(`sizeY value updated to ${sizeY.value}`);
});

rot.addEventListener("change", () => {
    updateActive();
    if (rot.value < 0) {
        rot.value = 360;
    } else if (rot.value > 360) {
        rot.value = 0;
    }
    // FIXME: rect.setAttribute("transform", `rotate(${rot.value}deg) skewX(0)`);
    //  console.log(`rot value updated to ${rot.value}`);
});

skew.addEventListener("change", () => {
    updateActive();
    if (skew.value < -85) {
        skew.value = -85;
    } else if (skew.value > 85) {
        skew.value = 85;
    }
    // FIXME: rect.setAttribute("transform", `rotate(0) skew(${skew.value}deg)`);
    //  console.log(`rot value updated to ${rot.value}`);
});