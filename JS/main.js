let burger = document.querySelector(`#burgerMenu`),
menu = document.querySelector(`.burgerNavList`);


burger.addEventListener(`click`, burgerOpen);

menu.addEventListener(`click`, (e) => {
  if (!e.target.classList.contains(`burgerNavList`)) {
    burgerClose();
  }
});

function burgerOpen(e) {
  e.preventDefault();

  menu.classList.add(`burgerNavListActive`);

  burger.querySelector(`span:nth-child(1)`).classList.remove(`stickTopBack`);
  burger.querySelector(`span:nth-child(3)`).classList.remove(`stickBotBack`);

  burger.querySelector(`span:nth-child(1)`).classList.add(`stickTop`);
  burger.querySelector(`span:nth-child(2)`).classList.add(`hideSpan`);
  burger.querySelector(`span:nth-child(3)`).classList.add(`stickBot`);

  burger.addEventListener(`click`, burgerClose);
}

function burgerClose(e) {
  if (e) {
    e.preventDefault();    
  }

  menu.classList.remove(`burgerNavListActive`);

  burger.querySelector(`span:nth-child(1)`).classList.remove(`stickTop`);
  burger.querySelector(`span:nth-child(2)`).classList.remove(`hideSpan`);
  burger.querySelector(`span:nth-child(3)`).classList.remove(`stickBot`);

  burger.querySelector(`span:nth-child(1)`).classList.add(`stickTopBack`);
  burger.querySelector(`span:nth-child(3)`).classList.add(`stickBotBack`);

  burger.removeEventListener(`click`, burgerClose);
}