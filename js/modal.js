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
    modal.classList.add('modal-window', 'fade-in');

    // Create Modal Header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header')
    modalHeader.appendChild(createModalTitle(projectData));

    // Create Modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    let modalContentRow = document.createElement('div');
    modalContentRow.classList.add('modal-content__row');
    modalContent.appendChild(modalContentRow);

    // Create Challenge section content
    let modalContentRowChallenge = document.createElement('div');
    modalContentRowChallenge.classList.add('modal-content__row-item');

    modalContentRowChallenge.append(
      createContentTitle('Challenge:'), createChallengeContentNode(projectData)
    );

    // Create Technologies section content
    let modalContentRowTechnologies = document.createElement('div');
    modalContentRowTechnologies.classList.add('modal-content__row-item');

    modalContentRowTechnologies.append(
      createContentTitle('Technologies:'), createTechnologiesContentNode(projectData)
    );

    // Create Usability section content
    let modalContentRowUsability = document.createElement('div');
    modalContentRowUsability.append(createContentTitle('Users are able to:'), createItemList(projectData));

    // Create Footer section content
    let modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalFooter.append(createFooterLink(projectData), createFooterGhostButton());

    //Append content to modal
    modalContentRow.append(modalContentRowChallenge, modalContentRowTechnologies);
    modalContent.append(modalContentRow, modalContentRowUsability);
    modal.append(modalHeader, modalContent, modalFooter);

    documentBody.append(overlay, modal);

    checkClassList(modal, 'visible');
    trapFocus(modal);
    hideModalOnButtonClick();
  }

  function createModalTitle(projectData) {
    let modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.innerText = projectData.name;
    return modalTitle;
  }

  function createContentTitle(text) {
    let contentItemTitle = document.createElement('h3');
    contentItemTitle.classList.add('modal-content__title');
    contentItemTitle.innerText = text;

    return contentItemTitle;
  }

  function createChallengeContentNode(projectData) {
    let challengeContentNode = document.createElement('p');
    challengeContentNode.classList.add('modal-content__challenge');
    challengeContentNode.innerText = projectData.challenge;

    return challengeContentNode;
  }

  function createTechnologiesContentNode(projectData) {
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

    return technologiesContentNode;
  }

  function createItemList(projectData) {
    let usabilityItemList = document.createElement('ul');
    usabilityItemList.classList.add('modal-content__list');

    projectData.usability.forEach((li) => {
      let usabilityItemListItem = document.createElement('li');
      usabilityItemListItem.classList.add('modal-content__list-item');
      usabilityItemListItem.innerText = li;

      usabilityItemList.append(usabilityItemListItem);
    })

    return usabilityItemList;
  }

  function createFooterLink(projectData) {
    let modalFooterLink = document.createElement('a');
    modalFooterLink.classList.add('primary-button', 'modal-footer__link');
    modalFooterLink.innerText = 'Github';
    modalFooterLink.setAttribute('href', projectData.link);
    modalFooterLink.setAttribute('target', '_blank');
    return modalFooterLink;
  }

  function createFooterGhostButton() {
    let modalFooterGhostButton = document.createElement('button');
    modalFooterGhostButton.classList.add('primary-button', 'primary-button--ghost', 'primary-modal-button--ghost');
    modalFooterGhostButton.innerText = 'Close';

    return modalFooterGhostButton;
  }

  function hide() {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');

    const modal = document.querySelector('.modal-window');
    modal.classList.add('fade-out');
    setTimeout(() => {
      modal.remove();
      overlay.remove();
    }, 300);
  }

  function hideModalOnButtonClick() {
    const ghostFooterButton = document.querySelector('.primary-modal-button--ghost');
    ghostFooterButton.addEventListener('click', (e) => {
      e.preventDefault();
      hide();
    })
  }

  function checkClassList(element, className) {
    (!element.classList.contains(className)) ?
      element.classList.add(className) :
      element.classList.remove(className);
  }

  function trapFocus(element) {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
        if (e.shiftKey) /* shift + tab */ {
          if (document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
          }
        } else /* tab */ {
          if (document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
          }
        }
      }
    });
  }

  return {
    show,
    hide
  }
})();