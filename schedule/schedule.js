const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`Anda menekan tombol: ${button.textContent}`);
  });
});
