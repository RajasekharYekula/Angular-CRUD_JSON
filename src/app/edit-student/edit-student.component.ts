import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    country:'',
    gender: 'Male',
    age: 0,
  };

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.studentService.getById(id).subscribe((data) => {
      this.studentForm = data;
    });
  }
  update() {
    this.studentService.update(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
