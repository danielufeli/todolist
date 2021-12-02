import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function component() {
  let data = [
    {
      index: 1,
      description: 'Buy a Laptop',
      completed: false,
    },
    {
      index: 2,
      description: 'Attend AOT LAgos Event',
      completed: false,
    },
    {
      index: 3,
      description: 'Work on Javascript',
      completed: false,
    },
  ];

  // const task = document.querySelector('.task').innerHTML;
  let task = '';

  if (data.length === 0) {
    return (document.querySelector('#task').innerHTML =
      '<p>No Record Found</p>');
  } else {
    return data.map((e, i) => {
      task += `<li class="task">
          <input type="checkbox" id="task-${e.index}" />
          <input type="text" value="${e.description}" />
          <span>
            <i class="fas fa-ellipsis-v"></i>
          </span>
        </li>`;
      return (document.querySelector('#task').innerHTML = task);
    });
  }

  //Lodash, now imported by this script

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // return element;
}

document.body.appendChild(component());
