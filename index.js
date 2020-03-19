// const calculator = {
//   plus: function(a, b) {
//     return a + b;
//   },
//   minus: function(a, b) {
//     return a - b;
//   },
//   multiple: function(a, b) {
//     return a * b;
//   },
//   divide: function(a, b) {
//     return a / b;
//   },
//   power: function(a, b) {
//     return a ** b;
//   }
// };

// const plus = calculator.plus(5, 5);
// const minus = calculator.minus(5, 5);
// const multiple = calculator.multiple(5, 5);
// const divide = calculator.divide(5, 5);
// const power = calculator.power(5, 5);

// console.log(plus, minus, multiple, divide, power);

// console.log(
//   `5 + 5 = ${plus}, 5 - 5 = ${minus}, 5 * 5 = ${multiple}, 5 / 5 = ${divide}, 5 ** 5 = ${power}`
// );

// function resultclear() {
//   alert("C");
//   // $result.text("C");
// }

var num1 = "";
var result = document.getElementById("result");
var cal = "";
function resultclear() {
  result.innerHTML = "0";
}
function show_number(input) {
  if (input === "." && result.innerHTML == "0") {
    result.innerHTML = "0" + input;
  } else if (result.innerHTML == "0") {
    result.innerHTML = input;
  } else if (input === "%") {
    result.innerHTML = Number(result.innerHTML) / 100;
  } else {
    result.innerHTML += input;
  }
}
function operation(op) {
  num1 = result.innerHTML;
  cal = op;
  result.innerHTML = "0";
}
function show_result() {
  var num2 = result.innerHTML;
  switch (cal) {
    case "+":
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case "-":
      result.innerHTML = Number(num1) - Number(num2);
      break;
    case "*":
      result.innerHTML = Number(num1) * Number(num2);
      break;
    case "/":
      if (num2 == "0") {
        alert("0으로 나눌 수 없어요 (´∩ω∩｀)");
        result.innerHTML = "0";
        // result.innerHTML = "0으로 나눌 수 없어요 (´∩ω∩｀)";
      } else {
        result.innerHTML = Number(num1) / Number(num2);
      }
      break;
  }
}
