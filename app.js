let button1 = document.querySelector('#myButton1')
let button2 = document.querySelector('#myButton2')
let button3 = document.querySelector('#myButton3')
let button4 = document.querySelector('#myButton4')



//  birchi son uchunni randam qilish uchun 
const son1 = document.querySelector('#a');
const sonA = Math.trunc(Math.random() * 50 + 1);
son1.textContent = sonA; // sonA ni ekranga chiqarish

//  ikkinchi son uchunni randam qilish uchun 
const son2 = document.querySelector('#b');
const sonB = Math.trunc(Math.random() * 15 + 1);
son2.textContent = sonB; // sonB ni ekranga chiqarish

const ishora = document.querySelector('#amal') // ishora qismi uchu o`zgaruvchi

const sonD = document.querySelector('#d') // d 3-son uchun value

// qo`shish uchun kod
button1.addEventListener('click', () => {
    ishora.textContent = `+`
    sonD.textContent = sonA + sonB

})

button2.addEventListener('click', () => {
    ishora.textContent = `-`
    sonD.textContent = sonA - sonB
})

button3.addEventListener('click', (e) => {
    ishora.textContent = `*`
    sonD.textContent = sonA * sonB
    console.log(e);
})

button4.addEventListener('click', () => {
    
    ishora.textContent = `/`
    sonD.textContent = Math.floor(sonA / sonB)

})





