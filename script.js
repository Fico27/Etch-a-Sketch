
let num = 16;
let count = 0;
const boxHolder = document.querySelector(".iHoldBoxes")


function columnGenerator(num){
    for (let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.classList.add("column")
        boxHolder.appendChild(box);
    }

}

while (count < num){
    columnGenerator(num)
    count++
}
