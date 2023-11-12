var group1 = undefined
var group2 = undefined
var operator = ""


var numButtons = document.querySelectorAll(".numbers")
var operatorButtons = document.querySelectorAll(".operator")
var equalBtn = document.querySelector("#equal")
var dscreen = document.querySelector("#dscreen")


numButtons.forEach((item) => {
    item.addEventListener("click", (e) => {numbersFunction(e)})
})

operatorButtons.forEach((item) => {
    item.addEventListener("click", (e) => {
        operator = String(e.target.id)
        if (dscreen.textContent !== "Calculator"){
            console.log(operator)
            if (group1 == undefined){
                group1 = Number(dscreen.textContent)
                console.log("Group 1 Tersimpan " + group1)
                dscreen.textContent = ""
            }else if (group2 == undefined){
                group2 = Number(dscreen.textContent)
                console.log("Group 2 Tersimpan " + group2)
                dscreen.textContent = ""
            }
            if (group1 !== undefined && group2 !== undefined){
                dscreen.textContent = equal(group1, operator, group2)
                group1 = dscreen.textContent
                group2 = undefined
            }
        }
    })
})

equalBtn.addEventListener("click", () => {
    if (group1 !== undefined && group2 !== undefined){
        dscreen.textContent = equal(group1, operator, group2)
    } else if (group1 !== undefined && group2 == undefined){
        group2 = dscreen.textContent
        dscreen.textContent = equal(group1, operator, group2)
    }
    else{
        console.log("group1 " + group1)
        console.log("group2 " + group2)
    }
})

function numbersFunction(itemClick){
    if (dscreen.textContent == "Calculator"){
        dscreen.textContent = ""
    }
    console.log(itemClick.target.id)
    dscreen.textContent += String(itemClick.target.id)
}

function divide(group1, group2){
    return group1 / group2
}

function multiply(group1, group2){
    return group1 * group2
}

function subtract(group1, group2){
    return group1 - group2
}

function add(group1, group2){
    return group1 + group2
}

function equal(group1, operator, group2){
    switch(operator){
        case "divide":
            return divide(group1, group2)
        case "multiply":
            return multiply(group1, group2)
        case "subtract":
            return subtract(group1, group2)
        case "add":
            return add(group1, group2)
    }
}