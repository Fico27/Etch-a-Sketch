
let num = 25;
let count = 0;
const boxHolder = document.querySelector(".iHoldBoxes")
const btn = document.querySelector(".iMakeNewBoxes")
const box = document.createElement("div");




function rowGenerator(num) {
    
   
    for (let i = 0; i < num; i++){
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row")
        boxHolder.appendChild(rowContainer)
        for (let j = 0; j < num; j++){
            const box = document.createElement("div");
            box.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            })
            box.classList.add("box")
            rowContainer.appendChild(box)
        }
    }
}

rowGenerator(num)


btn.addEventListener("click", () => {
 
    while (boxHolder.firstChild) {
        boxHolder.removeChild(boxHolder.lastChild);
      }
    num = prompt("Please enter a number up to 100!")
    rowGenerator(num)
})
