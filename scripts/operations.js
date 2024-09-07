function calculer() {
  console.log("Effectuer un calcul");
  const firstNumberInput = document.getElementById("firstNumber");
  const valueOfFirstNumberInput = firstNumberInput.value;
  console.log(valueOfFirstNumberInput);

  const secondNumberInput = document.getElementById("secondNumber");
  const valueOfSecondNumberInput = secondNumberInput.value;
  console.log(valueOfSecondNumberInput);

  const result = 1 * valueOfSecondNumberInput + 1 * valueOfFirstNumberInput;
  console.log(result);

  document.getElementById("result").innerHTML = result;
}
