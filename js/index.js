
const buttonplay = document.querySelector('.play')
const buttonstop = document.querySelector('.stop')
const buttonmore = document.querySelector('.more')
const buttondecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const select = document.querySelector('.card')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')


function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function hold() {
    clearTimeout(timerTimeOut)
}


function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateDisplay(minutes, 0)

        if (isFinished) {
            updateDisplay()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)
}

buttonplay.addEventListener('click', function () {
    countDown()
})

buttonstop.addEventListener('click', function () {
    reset()
})

buttonmore.addEventListener('click', function () {
    minutes += 5
    updateDisplay(minutes, seconds)
})

buttondecrease.addEventListener('click', function () {
    if (minutes != 0) {
        minutes -= 5
        updateDisplay(minutes, seconds)
    }
})

buttonForest.addEventListener('click', function () {
    limpaSelect()
    buttonForest.classList.add('select')
})

buttonRain.addEventListener('click', function () {
    limpaSelect()
    buttonRain.classList.add('select')
})

buttonCoffee.addEventListener('click', function () {
    limpaSelect()
    buttonCoffee.classList.add('select')
})

buttonFire.addEventListener('click', function () {
    limpaSelect()
    buttonFire.classList.add('select')
})

function limpaSelect () {
    buttonForest.classList.remove('select')
    buttonRain.classList.remove('select')
    buttonCoffee.classList.remove('select')
    buttonFire.classList.remove('select')
}
