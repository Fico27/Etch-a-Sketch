
let num = 16;
let count = 0;
const boxHolder = document.querySelector(".iHoldBoxes")
const btn = document.querySelector(".iMakeNewBoxes")



function columnGenerator(num){
    for (let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.classList.add("column")
        boxHolder.appendChild(box);
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        })
    }

}

while (count < num){
    columnGenerator(num)
    count++
}


btn.addEventListener("click", () => {
    count = 0;
    while (boxHolder.firstChild) {
        boxHolder.removeChild(boxHolder.lastChild);
      }
    num = prompt("Please enter a number up to 100!")
    columnGenerator(num)
    while (count < num){
        columnGenerator(num)
        count++
    }
})
