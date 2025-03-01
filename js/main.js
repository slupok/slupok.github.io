const modal = document.getElementById('subject-modal')
const modalBox = document.getElementById('modal-subject-box')
const showSubjectInfoButtons = document.getElementsByClassName('subject-info')
// const closeModalBtn = document.getElementById('close-modal-btn')

for (let index = 0; index < showSubjectInfoButtons.length; index++) {
    const showBtn = showSubjectInfoButtons[index];
    showBtn.addEventListener('click', (e) => {
        var attribute = Number(showBtn.getAttribute("data-test"))
        generateSubjectInfo(document.getElementById("modal-subject-box"), subjectsArray.get(attribute))
        modal.showModal()
        isModalOpen = true
        e.stopPropagation()
    })
}

let isModalOpen = false

//showModalBtn.addEventListener('click', (e) => {
//})

function onCloseModal() {
  modal.close()
  isModalOpen = false
}

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close()
  }
})


function getObjectWithAttribute(attribute) {
  subjectsArray.get(attribute)
}