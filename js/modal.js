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

    // Create Modal Header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header')

    let modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = projectData.name;

    modalHeader.appendChild(modalTitle);

    // Create Modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalContentRow = document.createElement('div');
    modalContentRow.classList.add('modal-content__row');
    modalContent.appendChild(modalContentRow);

    let modalContentRowChallenge = document.createElement('div');
    modalContentRowChallenge.classList.add('modal-content__row-item');

    // Create Challenge section content

    // creating "Challenge" section title
    let challengeItemTitle = document.createElement('h3');
    challengeItemTitle.classList.add('modal-content__title');
    challengeItemTitle.innerText = 'Challenge:';

    // creating "Challenge" section data
    let challengeContentNode = document.createElement('p');
    challengeContentNode.classList.add('modal-content__challenge');
    challengeContentNode.innerText = projectData.challenge;

    modalContentRowChallenge.append(
      challengeItemTitle, challengeContentNode
    );

    // Create Technologies section content
    let modalContentRowTechnologies = document.createElement('div');
    modalContentRowTechnologies.classList.add('modal-content__row-item');

    // creating "Technologies" section title
    let technologiesItemTitle = document.createElement('h3');
    technologiesItemTitle.classList.add('modal-content__title');
    technologiesItemTitle.innerText = 'Technologies:';

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
    technologiesContentNode.innerText = technologiesContent;

    modalContentRowTechnologies.append(
      technologiesItemTitle, technologiesContentNode
    );

    // Create Usability section content
    let modalContentRowUsability = document.createElement('div');

    // creating "usability" section title
    let usabilityItemTitle = document.createElement('h3');
    usabilityItemTitle.classList.add('modal-content__title');
    usabilityItemTitle.innerText = 'Users are able to:';

    // creating "usability" section list
    let usabilityItemList = document.createElement('ul');
    usabilityItemList.classList.add('modal-content__list');

    projectData.usability.forEach((li) => {
      let usabilityItemListItem = document.createElement('li');
      usabilityItemListItem.classList.add('modal-content__list-item');
      usabilityItemListItem.innerText = li;

      usabilityItemList.append(usabilityItemListItem);
    })

    modalContentRowUsability.append(usabilityItemTitle, usabilityItemList);

    // Create Footer section content
    let modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // creating Footer primary button
    let modalFooterLink = document.createElement('a');
    modalFooterLink.classList.add('primary-button', 'modal-footer__link');
    modalFooterLink.innerText = 'Github';
    modalFooterLink.setAttribute('href', projectData.link);
    modalFooterLink.setAttribute('target', '_blank');

    // creating Footer ghost button
    let modalFooterGhostButton = document.createElement('button');
    modalFooterGhostButton.classList.add('primary-button', 'primary-button--ghost');
    modalFooterGhostButton.innerText = 'Close';
    modalFooter.append(modalFooterLink, modalFooterGhostButton);

    //Append content to modal
    modalContentRow.append(modalContentRowChallenge, modalContentRowTechnologies);
    modalContent.append(modalContentRow, modalContentRowUsability);
    modal.append(modalHeader, modalContent, modalFooter);

    documentBody.append(overlay, modal);

    checkClassList(modal, 'visible');
  }


  function hide() {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');

    const modals = document.getElementsByClassName('modal-window');
    Array.from(modals).forEach(modal => modal.remove());
    overlay.remove();
  }

  function checkClassList(element, className) {
    (!element.classList.contains(className)) ?
      element.classList.add(className) :
      element.classList.remove(className);
  }

  return {
    show,
    checkClassList,
    hide
  }
})();