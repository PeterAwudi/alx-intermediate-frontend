interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Peter',
  lastName: 'Awudi',
  age: 29,
  location: 'Ghana'
};

const student2: Student = {
  firstName: 'Judith',
  lastName: 'Ogueri',
  age: 27,
  location: 'Nigeria'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

thead.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
`;

table.appendChild(thead);
table.appendChild(tbody);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  tbody.appendChild(row);
});

document.body.appendChild(table);