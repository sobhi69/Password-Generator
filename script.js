const result = document.getElementById('result')
const form = document.getElementById('form')
const pwdLength = document.getElementById('pwdInput')
const upperInput = document.getElementById('upperInput')
const lowerInput = document.getElementById('lowerInput')
const numbersInput = document.getElementById('numbersInput')
const symbolsInput = document.getElementById('symbolsInput')
const clipboard = document.getElementById('clipboard')

const uppercaseLetters = []
const lowercaseLetters = []
for (let i = 0; i < 26; i++) {
    lowercaseLetters.push(String.fromCharCode(i + 97))
    uppercaseLetters.push(String.fromCharCode(i + 65))
}

const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

const symbols = [
    "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "{", "}", "[", "]", "=", "<",
    ">", "/", ",", "."
]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let password = ''
    const inputs = [upperInput, lowerInput, numbersInput, symbolsInput]

    const valid = inputs.find(input => input.checked == true)

    // all the inputs are unchecked so stop
    if (!valid) {
        alert('please select at least one input')
        return 
    }
    
    const n = pwdLength.value

    const newArr = []

    for (let input of inputs) {
        if (input.checked) {
            switch (input.id) {
                case "upperInput":
                    newArr.push(...uppercaseLetters)
                    break
                case "lowerInput":
                    newArr.push(...lowercaseLetters)
                    break
                case "numbersInput":
                    newArr.push(...numbers)
                    break
                case "symbolsInput":
                    newArr.push(...symbols)
                    break
            }
        }
    }

    // to create a range Math.floor(Math.random() * (max - min) + min) 

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * (newArr.length - 0) + 0)
        password += newArr[randomIndex]
    }

    result.innerText = password
})

clipboard.addEventListener('click', (e) => {
    if (result.innerText == '') {
        alert('please generate a password first')
        return
    }
    navigator.clipboard.writeText(result.innerText)
    alert('password added to your clipboard📋')
})

console.log(navigator.clipboard.readText())