export default function initAccordion() {
  const accordionLIst = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  if (accordionLIst.length) {
    accordionLIst[0].classList.add(activeClass);
    accordionLIst[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionLIst.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
