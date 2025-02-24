

const boxHolder = document.querySelector(".iHoldBoxes")

function boxGenerator(input = 50) {

input = input * input
    for (let i = 0; i < input; i++) {
        const box = document.createElement("div");
        boxHolder.appendChild(box);
    }
};

boxGenerator()