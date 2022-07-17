// (() => {
// 	const refs = {
// 		openMenuBtn: document.querySelector(".menu-open"),
// 		closeMenuBtn: document.querySelector(".menu-close"),
// 		menu: document.querySelector(".mob-menu"),
// 	};

// 	refs.openMenuBtn.addEventListener("click", toggleMenu);
// 	refs.closeMenuBtn.addEventListener("click", toggleMenu);

// 	function toggleMenu() {
// 		refs.menu.classList.toggle("is-open");
// 	}
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
