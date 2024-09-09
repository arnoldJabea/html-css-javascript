function calculer(event) {
  event.preventDefault();
  console.log("Effectuer un calcul");
  const firstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = firstNumberInput.value;
  console.log(valueOfFirstNumberInput);

  const secondNumberInput = document.getElementById("secondNumber");
  const valueOfSecondNumberInput = secondNumberInput.value;
  console.log(valueOfSecondNumberInput);

  const operation = document.getElementById("operation");
  const selectedOperation = operation.value;
  console.log(valueOfSecondNumberInput);
  let result = 0;
  if (selectedOperation == 1) {
    result = 1 * valueOfSecondNumberInput + 1 * valueOfFirstNumberInput;
  } else if (selectedOperation == 2) {
    result = Number(valueOfSecondNumberInput) * Number(valueOfFirstNumberInput);
  } else {
    result = Number(valueOfSecondNumberInput) % Number(valueOfFirstNumberInput);
  }
  console.log(result);

  document.getElementById("result").innerHTML = result;
}
