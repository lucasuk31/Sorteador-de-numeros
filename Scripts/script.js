//Escreva um programa que sorteie a quantidade de numeros solicitados pelo usuário de forma aleatoria, que contenha um intervalo máximo e mínimo também solicitados previamente.

//Se o usuário desejar que o número possa ser repetido, bem, caso contrário nao permita que o número se repita.

let form = document.querySelector("form")
const initialPage = document.getElementById("initialPage")
const resultPage = document.getElementById("resultPage")
let round = document.getElementById("round")
let roundNumber = 1
let retry = document.getElementById("drawAgain")

let resultWrapper = document.getElementById("result-wrapper")

let num

numbers.focus()

function drawNumber() {
  let numbers = document.getElementById("numbers")
  numbers = parseInt(numbers.value)
  let min = document.getElementById("start")
  min = parseInt(min.value)
  let max = document.getElementById("end")
  max = parseInt(max.value)
  let checkbox = document.getElementById("repeat")
  let randomNumbers = []
  roundNumber++

  if (numbers > 0 && min <= max) {
    if (checkbox.checked) {
      if (numbers <= max - min + 1) {
        showResult()
        for (let i = 1; i <= numbers; i++) {
          num = Math.floor(Math.random() * (max - min + 1)) + min
          while (randomNumbers.includes(num)) {
            num = Math.floor(Math.random() * (max - min + 1)) + min
          }
          randomNumbers.push(num)
          addNumberToResultPage()
        }
      } else {
        alert(
          "A quantidade de números desejada a serem sorteados deve ser menor ou igual ao fim - inicio + 1. Ou, a opcao de repetir deve ser desabilitada."
        )
      }
    } else {
      for (let i = 1; i <= numbers; i++) {
        num = Math.floor(Math.random() * (max - min + 1)) + min
        randomNumbers.push(num)
        addNumberToResultPage()
        showResult()
      }
    }
  } else {
    alert(
      "A quantidade de números a serem sorteados precisa ser maior que 0 e o intervalo de início precisa ser menor ou igual ao final."
    )
  }
}

function showResult() {
  initialPage.style.display = "none"
  resultPage.style.display = "block"
}

function showInitial() {
  resultPage.style.display = "none"
  initialPage.style.display = "block"
}

function addNumberToResultPage() {
  try {
    let div = document.createElement("div")
    div.classList.add("resultBox")
    resultWrapper.append(div)

    let span = document.createElement("span")
    span.textContent = num
    div.append(span)
  } catch (error) {
    alert("Nao foi possivel mostrar o número sorteado.")
    console.log(error)
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  round.textContent = roundNumber
  drawNumber()
})

retry.addEventListener("click", (event) => {
  event.preventDefault()
  showInitial()
  resultWrapper.innerHTML = ""
})
