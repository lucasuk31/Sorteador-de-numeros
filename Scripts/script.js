//Escreva um programa que sorteie a quantidade de numeros solicitados pelo usuário de forma aleatoria, que contenha um intervalo máximo e mínimo também solicitados previamente.

//Se o usuário desejar que o número possa ser repetido, bem, caso contrário nao permita que o número se repita.

let form = document.querySelector("form")

function drawNumber() {
  let numbers = document.getElementById("numbers")
  numbers = parseInt(numbers.value)
  let min = document.getElementById("start")
  min = parseInt(min.value)
  let max = document.getElementById("end")
  max = parseInt(max.value)

  if (numbers > 0 && min <= max) {
    for (let i = 1; i <= numbers; i++) {
      console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    }
  } else {
    alert(
      "A quantidade de números desajados a serem sorteados deve ser '1' ou mais. E o número de inicio do intervalo deve ser menor do que o número final"
    )
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  drawNumber()
})
