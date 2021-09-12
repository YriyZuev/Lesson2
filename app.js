const item = document.querySelector('.item')
const placeholderds = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholderds) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart (event) {
    event.target.classList.add('hold')
    event.target.textContent = 'Перетаскивается'
    setTimeout(() => event.target.classList.add('hide'), 0) // Исчезает из забронного поля и остается при перетаскивании видимым
}

function dragend (event) {
    event.target.className = 'item' // Для сброса всех классов или можно 2 вариант: event.target.classList.remove('hide', 'hold')
    event.target.textContent = 'На месте'
}

function dragover(event) {  
    event.preventDefault() // Чтобы элемент мог перемещаться в другое поле
}

function dragenter(event) {
    event.target.classList.add('hovered') 
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {  
    event.target.classList.remove('hovered')
    event.target.append(item) // для того, чтобы добавить перетаскиваемый элемент в поле для дропа
}