let addBtn = document.querySelector('.add-project');
let viewOne = document.querySelector('.view-one');
let viewAll = document.querySelector('.view-all');
let inputBar = document.querySelector('.input-bar')

let errorMsg = document.querySelector('.display-error');
let dynamicBody = document.querySelector('.dynamic-body');

let projectArray = [];

addBtn.addEventListener('click', () => {

  console.log('clicked');

  let typedProject = inputBar.value.trim();

  console.log(typedProject);

  if (typedProject !== '') {

    console.log('inside loop')
    
    newProject = inputBar.value;

    projectsObject = {
      newItem: newProject
    }

    projectArray.push(projectsObject);

    localStorage.setItem('storage', JSON.stringify(projectArray));

    displayProjects();
  }
  else {
    errorMsg.textContent = "Please create a valid project ..."
    errorMsg.style.color = 'red'

    setTimeout(() => {
      errorMsg.textContent = '';
    }, 2000);
  }

})

function displayProjects() {
  
  retrievedProjects = JSON.parse(localStorage.getItem('storage'));

  let alreadyAdded = document.querySelectorAll('.dynamic-body .each-project');
  for (let index = 0; index < alreadyAdded.length; index++) {
    const element = alreadyAdded[index];
    element.remove();
  }
  console.log('in a function');

  retrievedProjects.forEach((project, index) => {

    let displayedDiv = document.createElement('div');
    displayedDiv.className = 'each-project'
    
    let displayedProjectItem = document.createElement('p');
    displayedProjectItem.textContent = project.newItem;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-project';
    deleteBtn.textContent = "Delete";

    displayedDiv.appendChild(displayedProjectItem);
    displayedDiv.appendChild(deleteBtn);

    dynamicBody.appendChild(displayedDiv);

    console.log('deepin another function');

    deleteBtn.addEventListener('click', () => {
      deleteItem = index;
      console.log(deleteBtn);
      if (deleteItem === '') {
        console.log('empty');
      }
      else {
        projectArray.splice(deleteItem, 1);
        localStorage.setItem('storage', JSON.stringify(projectArray));
      }
      displayProjects();
    })
  })

}
