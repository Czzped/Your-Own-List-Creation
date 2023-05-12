const addButton = document.getElementById('addMainButton')
const themeChangerButton = document.getElementById('themeChangerButton')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const ulList = document.getElementById('mainUlList')
let position = 1
let liInnerTexts = []

addButton.addEventListener('click', function () {
    const li = document.createElement('li')
    const removeButton = document.createElement('input')

    if (input.value == '') {
        alert('None value to be added')
    }else if(liInnerTexts.includes(input.value)) {
        
        alert('Add a new value')
    }else {
        li.innerText = input.value
        removeButton.type = 'button'
        removeButton.value = 'remove'
        removeButton.classList = 'removeButton'
    
        li.appendChild(removeButton)
        ulList.appendChild(li)

        liInnerTexts.push(li.innerText)
    
        removeButton.addEventListener('click', function () {
    
            ulList.removeChild(li)
        })

        input.value = null
    }
})

themeChangerButton.addEventListener('click', function () {
    if(themeChangerButton.value === 'Light Theme'){
        themeChangerButton.value = 'Black Theme'
        root.style.setProperty('--bg-color', '#000000')
        root.style.setProperty('--color', '#fff')
    }else{
        themeChangerButton.value = 'Light Theme'
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--color', '#000000')
    }
})