// task_1/js/main.ts
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Kofi',
  fullTimeEmployee: false,
  lastName: 'Wayo',
  location: 'Teshie',
  contract: false,
};

console.log(teacher3);

// task_1/js/main.ts
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Kofi',
  lastName: 'Wayo',
  location: 'Teshie',
  fullTimeEmployee: true,
  numberOfReports: 20,
};

console.log(director1);

// task_1/js/main.ts
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('', 'Wayo'));

// task_1/js/main.ts
class StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  public workOnHomework(): string {
    return 'Currently working';
  }

  public displayName(): string {
    return this._firstName;
  }
}
