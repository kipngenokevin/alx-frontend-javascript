interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Kevin',
  lastName: 'Kipngeno', 
  age: 25,
  location: 'Nairobi'
};
const student2: Student = {
  firstName: 'Brian',
  lastName: 'Kipkorir',
  age: 18,
  location: 'Nairobi'
};

const studentList: Student[] = [student1, student2];

function createTable(studentList: Student[]) {
  const studentTable = document.createElement("TABLE") as HTMLTableElement;

  for (let i = 0; i < studentList.length; i = i + 1) {
    let row = studentTable.insertRow(i);
    row.insertCell(0).textContent = studentList[i].firstName;
    row.insertCell(1).textContent = studentList[i].location;
  }

  document.body.append(studentTable);
}

createTable(studentList);
