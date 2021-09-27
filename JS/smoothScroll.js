let menuLinks = document.querySelectorAll(`.navLink`),
burgerMenuLinks = document.querySelectorAll(`.burgerNavLink`),
allScrollsLinks = [...menuLinks, ...burgerMenuLinks];

allScrollsLinks.forEach((item) => item.addEventListener(`click`, smoothScrollTo));

function smoothScrollTo(e) {  
  e.preventDefault();

  let targetId = e.target.getAttribute(`href`).slice(1),
  targetElement = document.getElementById(targetId);

  targetElement.scrollIntoView({
    behavior: `smooth`,
    block: `start`,
  });

}