function showDetails(todo) {
   const body = document.querySelector('body')
   const background = document.createElement('div')
   background.classList.add('overlay-div')


   const container = document.createElement('div')
   container.classList.add('details-container')

   const title = document.createElement('h4')
   title.innerText = todo.title

   const close = document.createElement('button')
   close.innerText = "close"
   close.setAttribute('class', 'close-btn')
   close.addEventListener('click', function (e) {
      body.removeChild(background)
   })

   const details = document.createElement('p')
   details.innerText = `Project: ${todo.parentProject} \n Priority: ${todo.priority} \n Details: ${todo.description} \n Due Date: ${todo.dueDate} \n Completed : ${todo.complete ? 'yes' : 'no'}`

   container.appendChild(title)
   container.appendChild(details)
   container.appendChild(close)
   body.appendChild(background)
   background.appendChild(container)

}


export { showDetails }