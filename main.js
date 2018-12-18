function openModal() {
    document.querySelector('#background').style.visibility='visible';
    document.querySelector('#modal-container').style.visibility='visible';
}

function closeModal() {
    document.querySelector('#background').style.visibility='hidden';
    document.querySelector('#modal-container').style.visibility='hidden';
}

document.querySelector('#add-button').addEventListener("click", openModal);
document.querySelector('#close').addEventListener("click", closeModal);