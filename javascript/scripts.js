document.getElementById('faseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado!');
});

function deleteOption(textId, checkBoxId, deleteButton) {
    document.getElementById(textId).style.display = 'none';
    document.getElementById(checkBoxId).style.display = 'none';
    deleteButton.style.display = 'none';
    deleteButton.previousElementSibling.style.display = 'none';
    deleteButton.previousElementSibling.previousElementSibling.style.display = 'none';
}
