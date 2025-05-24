namespace Subjects {
  import { Teacher } from './Teacher';

  export class Subject {
    private _teacher: Teacher;

    get teacher(): Teacher {
      return this._teacher;
    }

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}
