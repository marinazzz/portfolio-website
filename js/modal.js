let modalModule = (function () {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.addEventListener('click', (event) => {
    if (!event.target.classList.contains('modal-window')) {
      hide();
    }
  });

  function show(projectData) {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');

    let modal = document.createElement('div');
    modal.classList.add('modal-window');

    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header')

    let modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = projectData.name;

    modalHeader.appendChild(modalTitle);

    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalContentRow = document.createElement('div');
    modalContentRow.classList.add('modal-content__row');
    modalContent.appendChild(modalContentRow);

    let modalRowItemChallengesContainer = document.createElement('div');
    modalRowItemChallengesContainer.classList.add('modal-content__row-item');

    // creating "Technologies" section title
    let modalRowItemTitle = document.createElement('h3');
    modalRowItemTitle.classList.add('modal-content__title');

    modalRowItemTitle.innerText = 'Technologies:';

    modalRowItemChallengesContainer.appendChild(
      modalRowItemTitle
    );
    // creating "Technologies" section data
    let technologiesContent = '';
    projectData.technology.forEach((el, index) => {
      technologiesContent += el;
      if (index !== projectData.technology.length - 1) {
        technologiesContent += ', ';
      }
    });
    let technologiesContentNode = document.createElement('p');
    technologiesContentNode.classList.add('modal-content__technology');
    technologiesContentNode.innerText = technologiesContent
    modalRowItemChallengesContainer.appendChild(
      technologiesContentNode
    )
    modalContent.appendChild(modalRowItemChallengesContainer);

    modal.appendChild(modalHeader);
    modal.appendChild(modalContent);

    documentBody.appendChild(overlay);
    documentBody.appendChild(modal);

    // const modal = document.querySelector('.modal-window');
    checkClassList(modal, 'visible');
  }

  function hide() {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');


    const modals = document.getElementsByClassName('modal-window');
    Array.from(modals).forEach(modal => modal.remove());
    overlay.remove();



    const modal = document.querySelector('.modal-window');
    checkClassList(modal, 'visible');
  }

  function checkClassList(element, className) {
    (!element.classList.contains(className)) ?
      element.classList.add(className) :
      element.classList.remove(className);
  }

  return {
    show,
    checkClassList,
    hide,
  }
})();