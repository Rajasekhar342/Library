const addBookBtn = document.querySelector('.add-book')
const formSection = document.querySelector('.form-section')
const form = document.querySelector('.form')
addBookBtn.addEventListener('click', () => {
  form.classList.remove('form-display')
  addBookBtn.classList.add('btn-display')
})
formSection.addEventListener('click', (event) => {
  if (event.target === formSection) {
    form.classList.add('form-display')
    addBookBtn.classList.remove('btn-display')
  }
})

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  return title, author, pages, read
}
