import { updateActive, resetTransform } from './transform.js';

const layersContainer = document.querySelector("#layers")

export const updateLayers = () => {
    let allSelections = document.querySelectorAll("#layer_selection");
    allSelections.forEach(selection => {
        selection.textContent = "(🕳️)";
        let name = selection.getAttribute("name");
        let shape = document.querySelector(`#${name}`);
        shape.removeAttribute("data-active");
        // console.log(name, shape);
    });
}

layersContainer.addEventListener("click", (e) => {
    let element = e.target;
    let layerID = element.getAttribute("id");
    // console.log(element);
    switch(layerID) {
        case "layer_state":
            let check = element.getAttribute("data-checked");
            let layerName = element.getAttribute("name");
            let shape = document.querySelector(`#${layerName}`)
            switch(check) {
                case "false":
                    element.textContent = "(🐵)";
                    element.setAttribute("data-checked", "true");
                    shape.setAttribute("class", "shown");
                break;
                case "true":
                default:
                    element.textContent = "(🙈)";
                    element.setAttribute("data-checked", "false");
                    shape.setAttribute("class", "hidden");
                break;
            }
        break;
        case "layer_selection":
            updateActive()
            updateLayers();
            element.textContent = "(🎯)";
            let shapeName = element.getAttribute("name");
            let shapeElement = document.querySelector(`#${shapeName}`);
            shapeElement.setAttribute("data-active", "");
            resetTransform();
        break;
    }
});