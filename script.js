

const boxHolder = document.querySelector(".iHoldBoxes")

function boxGenerator(input = 16) {

    for (let i = 0; i < input; i++) {
        const box = document.createElement("div");
        boxHolder.appendChild(box);
    }
};

boxGenerator()