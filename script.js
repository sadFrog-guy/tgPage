const date = document.querySelector('#date')
const author = document.querySelector('#author')
const content = document.querySelector('#content')
const createdAt = document.querySelector('#createdAt')
const views = document.querySelector('#views')
const admin = document.querySelector('#admin')

let inputList = document.querySelector('#inputList')
const authorInput = document.querySelector('#authorInput')
const contentInput = document.querySelector('#contentInput')
const createdAtInput = document.querySelector('#createdAtInput')
const viewsInput = document.querySelector('#viewsInput')
const lastMessageDateInput = document.querySelector('#lastMessageDateInput')

const regex = new RegExp(/&lt;?(\w+)(\s+\w+=(\w+|&quot;[^&quot;]*&quot;|'[^']*'))*&gt;/)

const createdAtBlock =
    '<span class="createdAt_wrapper">\n' +
    '   <img src="img/Eye.svg" alt="#" class="eye">\n' +
    '   <span class="views" id="views">2</span>\n' +
    '   <span class="createdAt" id="createdAt">10:28</span>\n' +
    '</span>'

const urlify = (text) => {
    return text.replace(regex)
}

const dateOnChange = (e) => {
    date.innerText = e.target.value
}
const authorOnChange = (e) => {
    author.innerText = e.target.value
}
const contentOnChange = (e) => {
    content.innerHTML = urlify(e.target.value) + createdAtBlock
}
const createdAtOnChange = (e) => {
    createdAt.innerText = e.target.value
}

const viewsOnChange = (e) => {
    views.innerText = e.target.value
}

const toggleAdminMenu = () => {
    if(inputList.className.includes('active')) {
        inputList.className = 'input_list'
    } else {
        inputList.className = inputList.className + ' active'
    }
}

admin.addEventListener('click', toggleAdminMenu)
authorInput.addEventListener('change', authorOnChange)
contentInput.addEventListener('change', contentOnChange)
createdAtInput.addEventListener('change', createdAtOnChange)
lastMessageDateInput.addEventListener('change', dateOnChange)
viewsInput.addEventListener('change', viewsOnChange)