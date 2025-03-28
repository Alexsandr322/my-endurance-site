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
// Анимация загрузки
function showLoader() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="loader">
      <div class="loader-spinner"></div>
    </div>
  `);
}

// Затемнение неактивных форм
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.style.opacity = '1';
  });
  input.addEventListener('blur', function() {
    this.parentElement.style.opacity = '0.8';
  });
});
