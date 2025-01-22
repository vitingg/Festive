
function selectOption(selectedButton) {
  const buttons = document.querySelectorAll('.toggle-button');
  buttons.forEach(button => button.classList.remove('selected'));
  selectedButton.classList.add('selected');
}