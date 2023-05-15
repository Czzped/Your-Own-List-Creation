const addButton = document.getElementById('addMainButton')
const themeChangerButton = document.getElementById('themeChangerButton')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const ulList = document.getElementById('mainUlList')

addButton.addEventListener('click', function () {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const removeButton = document.createElement('input')

    if (input.value == '') {
        alert('None value to be added')
    } else {
        
        div.innerText = input.value
        removeButton.type = 'button'
        removeButton.value = 'remove'
        removeButton.classList = 'removeButton'
    
        li.append(div, removeButton)
        ulList.appendChild(li)
    
        removeButton.addEventListener('click', function () {
            ulList.removeChild(li)
        })

        input.value = null
    }
})

input.addEventListener('keydown', function (ev) {

    if(ev.key === 'Enter'){
        if(input.value === ''){
            alert('None value to be added')
        } else {
            const li = document.createElement('li')
            const div = document.createElement('div')
            const removeButton = document.createElement('input')
            
            div.innerText = input.value
            removeButton.type = 'button'
            removeButton.value = 'remove'
            removeButton.classList = 'removeButton'
        
            li.append(div, removeButton)
            ulList.appendChild(li)
        
            input.value = null
    
            removeButton.addEventListener('click', function () {
                ulList.removeChild(li)
            })

        }}

})

themeChangerButton.addEventListener('click', function () {
    if (themeChangerButton.value === 'Light Theme'){
        themeChangerButton.value = 'Black Theme'
        root.style.setProperty('--bg-color', '#000000')
        root.style.setProperty('--color', '#fff')
    } else {
        themeChangerButton.value = 'Light Theme'
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--color', '#000000')
    }
})