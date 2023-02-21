import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html', 
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    country:'',
    gender: '',
    age: 0,
  };
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
 
  create() {
    this.studentService.create(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
      
    });
  }
}
