let modalModule = (function () {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.addEventListener('click', (event) => {
    if (!event.target.classList.contains('modal-window')) {
      hide();
    }
  });

  function show() {
    const documentBody = document.getElementsByTagName('body')[0];
    if (!documentBody.classList.contains('no-scroll')) {
      documentBody.classList.add('no-scroll');
      documentBody.appendChild(overlay);
    }

    const modal = document.getElementsByClassName('modal-window')[0];
    if (!modal.classList.contains('visible')) {
      modal.classList.add('visible');
    }
  }

  function hide() {
    const documentBody = document.getElementsByTagName('body')[0];
    if (documentBody.classList.contains('no-scroll')) {
      documentBody.classList.remove('no-scroll');
      document.getElementsByClassName('modal-overlay')[0].remove();
    }

    const modal = document.getElementsByClassName('modal-window')[0];
    if (modal.classList.contains('visible')) {
      modal.classList.remove('visible');
    }
  }

  return {
    show,
    hide
  }
})();