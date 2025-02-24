
let num = 16;
let count = 0;
const boxHolder = document.querySelector(".iHoldBoxes")
const btn = document.querySelector(".iMakeNewBoxes")
const box = document.createElement("div");


// function columnGenerator(num){
//     for (let i = 0; i < num; i++){
//         const box = document.createElement("div");
//         box.classList.add("column")
//         boxHolder.appendChild(box);
//         box.addEventListener("mouseover", (e) => {
//             e.target.style.backgroundColor = "black";
//         })
//     }

// }

function rowGenerator(num) {
    
   
    for (let i = 1; i < num; i++){
        const box = document.createElement("div");
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row")
        boxHolder.appendChild(rowContainer)
        for (let j = 1; j < num; j++){
            
            rowContainer.appendChild(box)
        }
    }
}


while (count < num){
    rowGenerator(num)
    count++
}


// btn.addEventListener("click", () => {
//     count = 0;
//     while (boxHolder.firstChild) {
//         boxHolder.removeChild(boxHolder.lastChild);
//       }
//     num = prompt("Please enter a number up to 100!")
//     columnGenerator(num)
//     while (count < num){
//         columnGenerator(num)
//         count++
//     }
// })
