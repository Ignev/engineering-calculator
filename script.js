"use strict";

const input = document.querySelector(".result");
let power = "";

function insert(value) {
  if (input.textContent === "0") {
    input.textContent = value;
  } else {
    input.textContent += value;
  }
}

function clearInput() {
  input.textContent = "";
  power = "";
}

function calc() {
  let exp = input.textContent;
  if (input.textContent.includes("^")) {
    let tmp = input.textContent.split("^");
    let num = eval(power);
    let pow = +tmp[1];
    input.textContent = Math.pow(num, pow);
    power = "";
    return;
  }
  if (exp) {
    input.textContent = eval(exp);
  }
}

function deleat() {
  let str = input.textContent;
  input.textContent = str.substring(0, str.length - 1);
  if (input.textContent == 0) {
    input.textContent = "0";
  }
}

function percent() {
  input.textContent = eval(input.textContent) / 100;
}

function partOne() {
  input.textContent = 1 / eval(input.textContent);
}

function constant(name) {
  if (input.textContent === "0") {
    input.textContent = "";
  }
  if (constanta === "Π") input.textContent += Math.PI.toFixed(8);
  if (constanta === "e") input.textContent += Math.E.toFixed(8);
}

function operation(name) {
  if (name === "sqrt")
    input.textContent = Math.sqrt(eval(input.textContent), 2);
  if (name === "sqr") input.textContent = Math.pow(eval(input.textContent), 2);
  if (name === "^-1") input.textContent = Math.pow(eval(input.textContent), -1);
  if (name === "^") {
    power = input.textContent;
    input.textContent += "^";
  }
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
function fact() {
  input.textContent = factorial(+eval(input.textContent));
}

function log(name) {
  if (name === "lg") {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
  }
  if (name === "ln") {
    input.textContent = Math.log(eval(input.textContent)).toFixed(8);
  }
}

document.querySelector(".type").addEventListener("click", function () {
  if (document.querySelector(".type").textContent == "deg") {
    document.querySelector(".type").textContent = "rad";
  }
  else if (document.querySelector(".type").textContent == "rad") {
    document.querySelector(".type").textContent = "deg";
  }
});

function f(name) {
  if (name == 'sin') {
      if(document.querySelector('.type').textContent == "deg") {
          input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
      } else {
          input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
      }        
  }
  if (name == 'cos') {
      if(document.querySelector('.type').textContent == "deg") {
          input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
      } else {
          input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
      } 
  }
  if (name == 'tan') {
      if(document.querySelector('.type').textContent == "deg") {
          input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
      } else {
          input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
      }  
  }
}
