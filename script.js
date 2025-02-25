
let num = 16;
const boxHolder = document.querySelector(".iHoldBoxes")
const btn = document.querySelector(".iMakeNewBoxes")
const box = document.createElement("div");




function rowGenerator(num) {


    for (let i = 0; i < num; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row")
        boxHolder.appendChild(rowContainer)
        for (let j = 0; j < num; j++) {
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


    if (num > 100) {
        alert("100 is the max!!")
    } else if (num > 50 && num < 60) {
        rowGenerator(num)
        const boxSizeEdit = document.querySelectorAll(".box");
        
            boxSizeEdit.style.height = "10px"
            boxSizeEdit.style.width = "10px"

       
    } else {
        box.style.height = "10px";
        box.style.width = "10px";
        rowGenerator(num)
    }
})
