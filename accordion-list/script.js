
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionLIst = document.querySelectorAll('.js-accordion dt');
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

initAccordion();
