import { updateLayers } from './layers.js';
import { updateActive, resetTransform } from './transform.js';

let currentLayer = 0;

const canvas = document.querySelector("#canvas");
const layerContainer = document.querySelector("#layers");

// toolbar
const rectTool = document.querySelector("#rect_tool");
const circTool = document.querySelector("#circ_tool");

// layer HTML
const layerHTML = (layerNum, shapeName) => {
    return (`
        <span id="layer_state" name="${shapeName+layerNum}" data-checked="true">(🐵)</span>
        <label for="${shapeName+layerNum}">🧊 ${shapeName+layerNum}</label>
        <span id="layer_selection" name="${shapeName+layerNum}" class="selection">(🎯)</span>
    `)
}

// rect HTML
const rectHTML = (rectID) => {
    return (`
        <rect
        id="${rectID}"
        data-active
        x="1"
        y="1"
        width="20px"
        height="20px"
        transform="rotate(0) skewX(0)"
        stroke="#9BBD04"
        stroke-width="2"
        fill="#E5E5E5"
        />
    `)
}

rectTool.addEventListener("click", () => {
    updateActive();
    updateLayers();
    resetTransform();
    currentLayer += 1;
    const newLayer = document.createElement('div');
    newLayer.innerHTML = layerHTML(currentLayer, "rect");
    layerContainer.appendChild(newLayer);
    canvas.innerHTML += rectHTML(`rect${currentLayer}`)
    // console.log(currentLayer);
});