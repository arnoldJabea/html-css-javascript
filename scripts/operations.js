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

  console.log(typeof selectedOperation);

  if (Number(selectedOperation) === 1) {
    result = 1 * valueOfSecondNumberInput + 1 * valueOfFirstNumberInput;
  } else if (Number(selectedOperation) === 2) {
    result = Number(valueOfSecondNumberInput) * Number(valueOfFirstNumberInput);
  } else {
    result = Number(valueOfSecondNumberInput) % Number(valueOfFirstNumberInput);
  }
  console.log("result " + result);

  const name = document.getElementById("name");
  const valueOfNameInput = name.value;
  console.log(`Name: ${valueOfNameInput}`);

  // Initiales
  const fistNameAndLastname = valueOfNameInput.split(" ");
  const initials = `${fistNameAndLastname[0][0]}${fistNameAndLastname[0][1]}`;

  // concatenation
  let nameAndResult = valueOfNameInput + " " + result;
  nameAndResult = `${initials.toUpperCase()} ${result}`;

  // longueur d'une chaine;
  const length = nameAndResult.length;
  console.log(length);

  document.getElementById("result").innerHTML = nameAndResult;
}
