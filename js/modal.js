let modalModule = (function () {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.addEventListener('click', (event) => {
    if (!event.target.classList.contains('modal-window')) {
      hide();
    }
  });

  function show() {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');
    documentBody.appendChild(overlay);

    const modal = document.querySelector('.modal-window');
    checkClassList(modal, 'visible');
  }

  function hide() {
    const documentBody = document.querySelector('body');
    checkClassList(documentBody, 'no-scroll');
    overlay.remove();

    const modal = document.querySelector('.modal-window');
    checkClassList(modal, 'visible');
  }

  function checkClassList(element, className) {
    (!element.classList.contains(className)) ?
      element.classList.add(className) :
      element.classList.remove(className);
  }

  let projectData = [];

  async function getProjects() {
    const response = await fetch(
      '/js/project-data.json'
    );
    return response.json();
  }

  getProjects()
    .then((data) => {
      projectData = data;
      console.log(data);
      // displayProject();
    })

  // function displayProject() {

  // }

  return {
    show,
    checkClassList,
    hide,
    getProjects
  }
})();