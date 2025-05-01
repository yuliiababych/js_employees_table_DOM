'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  let isAscending = true;
  let currenColumn = null;

  // sorting of the table
  thead.addEventListener('click', (e) => {
    const headerList = thead.querySelectorAll('th');
    const target = e.target;

    if (target.tagName === 'TH') {
      const columnIndex = Array.from(headerList).indexOf(target);
      const rowsArray = Array.from(tbody.rows);

      if (currenColumn === columnIndex) {
        isAscending = !isAscending;
      } else {
        currenColumn = columnIndex;
        isAscending = true;
      }

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim().toLowerCase();
        const cellB = rowB.cells[columnIndex].textContent.trim().toLowerCase();

        const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

        let comparison;

        if (!isNaN(numA) && !isNaN(numB)) {
          comparison = numA - numB;
        } else {
          comparison = cellA.localeCompare(cellB);
        }

        return isAscending ? comparison : -comparison;
      });

      rowsArray.forEach((row) => tbody.appendChild(row));
    }
  });

  // highlighting the selected column

  tbody.addEventListener('click', (e) => {
    const selectedRow = e.target.closest('tr');

    if (selectedRow) {
      Array.from(tbody.rows).forEach((row) => row.classList.remove('active'));
    }

    selectedRow.classList.toggle('active');
  });

  // adding a form
  const form = document.createElement('form');

  form.classList.add('new-employee-form');
  document.body.appendChild(form);

  // adding a label and an input for the name
  const nameLabel = document.createElement('label');

  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name:';

  const nameInput = document.createElement('input');

  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('data-qa', 'name');
  nameInput.setAttribute('required');

  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);

  // adding a label and an input for the position

  const positionLabel = document.createElement('label');

  positionLabel.setAttribute('for', 'position');
  positionLabel.textContent = 'Position:';

  const positionInput = document.createElement('input');

  positionInput.setAttribute('type', 'text');
  positionInput.setAttribute('name', 'position');
  positionInput.setAttribute('id', 'position');
  positionInput.setAttribute('data-qa', 'position');
  positionInput.setAttribute('required');

  positionLabel.appendChild(positionInput);
  form.appendChild(positionLabel);

  // adding a label and an input for the age
  const ageLabel = document.createElement('label');

  ageLabel.setAttribute('for', 'age');
  ageLabel.textContent = 'Age:';

  const ageInput = document.createElement('input');

  ageInput.setAttribute('type', 'number');
  ageInput.setAttribute('name', 'age');
  ageInput.setAttribute('id', 'age');
  ageInput.setAttribute('data-qa', 'age');
  ageInput.setAttribute('required');

  ageLabel.appendChild(ageInput);
  form.appendChild(ageLabel);

  // adding a label and an input for the salary
  const salaryLabel = document.createElement('label');

  salaryLabel.setAttribute('for', 'salary');
  salaryLabel.textContent = 'Salary:';

  const salaryInput = document.createElement('input');

  salaryInput.setAttribute('type', 'number');
  salaryInput.setAttribute('name', 'salary');
  salaryInput.setAttribute('id', 'salary');
  salaryInput.setAttribute('data-qa', 'salary');
  salaryInput.setAttribute('required');

  salaryLabel.appendChild(salaryInput);
  form.appendChild(salaryLabel);

  // adding select and options
  const selectLabel = document.createElement('label');

  selectLabel.setAttribute('for', 'office');
  selectLabel.textContent = 'Office:';

  const select = document.createElement('select');

  select.setAttribute('name', 'office');
  select.setAttribute('id', 'office');
  select.setAttribute('data-qa', 'office');
  select.setAttribute('required');

  const optionsArray = [
    'Tokyo',
    'Singapore',
    'London',
    'New York',
    'Edinburgh',
    'San Francisco',
  ];

  optionsArray.forEach((option) => {
    const optionElement = document.createElement('option');

    optionElement.setAttribute('value', option);
    optionElement.textContent = option;

    select.appendChild(optionElement);
  });

  selectLabel.appendChild(select);
  form.appendChild(selectLabel);

  // adding a submit button
  const submitButton = document.createElement('button');

  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Save to table';
  form.appendChild(submitButton);
});
