let numbers = /[0-9]/i

let nums = document.querySelectorAll("#num")
let input_label = document.getElementById('input_label')



for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function f1() {
        input_label.innerHTML
            += `${nums[i].textContent}`;
    })
}
let clear1 = document.getElementById("clear")
clear1.addEventListener("click", function f() {
    input_label.innerHTML = ''
})

let correct = document.getElementById("correct")

correct.addEventListener("click", function f() {
    let s = input_label.textContent
    input_label.innerHTML = s.substring(0, s.length - 1)
})

let opr1 = document.querySelectorAll("#opr")

for (let i = 0; i < opr1.length; i++) {
    opr1[i].addEventListener("click", function f1() {
        let input = input_label.textContent;
        if (numbers.test(input.substring(input.length - 1, input.length))) {
            input_label.innerHTML += `${opr1[i].textContent}`;
        }
    })
}


let result = document.getElementById("result")

result.addEventListener("click", function f1() {
    console.log("hi", eval(input_label.textContent))
    input_label.innerHTML = eval(input_label.textContent)

})


