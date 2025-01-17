//MODAL

const modal = document.querySelector('.modal')
const openModalButton = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = ''

}
const closeModal = () => {
    modal.style.display = 'none'

}

openModalButton.onclick = openModal
closeModalButton.onclick = closeModal
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()

    }

}
setTimeout(openModal, 10000);

const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (scrollHeight === scrollPosition) {
        openModal();
        window.removeEventListener('scroll', onScroll);
    }
};

window.addEventListener('scroll', onScroll);