
const menuBtn = document.querySelector('.menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const menuBack = document.getElementById('menuBack');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  document.body.classList.remove('menu-open');
});

menuBack.addEventListener('click', () => {
  sidebar.classList.remove('active');
  document.body.classList.remove('menu-open');
});

/* CLICK OUTSIDE */
sidebar.addEventListener('click', (e) => {
  if (e.target === sidebar) {
    sidebar.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

/* CLICK CAR */
const cars = document.querySelectorAll('.car');

cars.forEach(car => {
  car.addEventListener('click', () => {
    const link = car.getAttribute('data-link');
    window.location.href = link;
  });
});