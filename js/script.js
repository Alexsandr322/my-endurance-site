// Аналитика кликов по кнопкам
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('Клик по кнопке:', this.textContent.trim());
  });
});

// Сохранение данных форм в LocalStorage
const formInputs = document.querySelectorAll('input, select');
formInputs.forEach(input => {
  input.addEventListener('change', function() {
    localStorage.setItem(input.id, input.value);
  });
  
  if (localStorage.getItem(input.id)) {
    input.value = localStorage.getItem(input.id);
  }
});
