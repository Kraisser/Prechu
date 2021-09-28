export default function smoothScroll(linksToScroll, options) {
  linksToScroll.forEach((item) => item.addEventListener(`click`, (e) => {
    e.preventDefault();

    let targetId = e.target.getAttribute(`href`).slice(1),
    targetElement = document.getElementById(targetId);

    if (options) {
      targetElement.scrollIntoView({
        behavior: `smooth`,
        block: options.block ? options.block : `start`,
        inline: options.inline ? options.inline : `nearest`,
      });
    } else {
      targetElement.scrollIntoView({
        behavior: `smooth`,
        block: `start`,
        inline: `nearest`,
      });
    }
  }));
}