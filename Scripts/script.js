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
  let checkbox = document.getElementById("repeat")
  let randomNumbers = []

  if (numbers > 0 && min <= max) {
    if (checkbox.checked) {
      if (numbers <= max) {
        for (let i = 1; i <= numbers; i++) {
          let num = Math.floor(Math.random() * (max - min + 1)) + min
          while (randomNumbers.includes(num)) {
            num = Math.floor(Math.random() * (max - min + 1)) + min
          }
          randomNumbers.push(num)
          console.log(randomNumbers)
        }
      } else {
        alert(
          "A quantidade de números desejada a serem sorteados deve ser menor ou igual ao número máximo/final do intervalo."
        )
      }
    } else {
      for (let i = 1; i <= numbers; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        randomNumbers.push(num)
        console.log(randomNumbers)
      }
    }
  } else {
    alert(
      "A quantidade de números a serem sorteados precisa ser maior que 0 e o intervalo de início precisa ser menor ou igual ao final."
    )
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  drawNumber()
})
