// Burger Menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
  burger.setAttribute('aria-expanded', !isOpen);
});

// Feedback Form Validation
const form = document.getElementById('giveaway-form');
const statusDiv = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusDiv.textContent = '';

  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const screenshot = formData.get('screenshot');
  const agree = formData.get('agree');

  if (!name || !email || !screenshot || !agree) {
    statusDiv.textContent = 'Заполните все поля и согласитесь на обработку данных.';
    statusDiv.style.color = 'red';
    return;
  }

  if (!/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) {
    statusDiv.textContent = 'Введите корректный email.';
    statusDiv.style.color = 'red';
    return;
  }

  if (screenshot.size > 8 * 1024 * 1024) {
    statusDiv.textContent = 'Файл слишком большой! Максимум 8 МБ.';
    statusDiv.style.color = 'red';
    return;
  }

  // Simulate success
  setTimeout(() => {
    statusDiv.textContent = 'Форма успешно отправлена!';
    statusDiv.style.color = 'green';
    form.reset();
  }, 1000);
});