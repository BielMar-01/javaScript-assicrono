import outsideClick from './outside-click.js';

export default function dropDown() {
  const dropdpwnMenus = document.querySelectorAll('[data-dropdown]');

  dropdpwnMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
}


