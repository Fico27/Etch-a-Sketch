

const boxHolder = document.querySelector(".iHoldBoxes")

// Makes boxes based on user input
function boxGenerator(input = 50) {

input = input * input
    for (let i = 0; i < input; i++) {
        const box = document.createElement("div");
        
    }
};

function columnGenerator(num =16){
    for (let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.classList.add("column")
        boxHolder.appendChild(box);
    }
}

columnGenerator()