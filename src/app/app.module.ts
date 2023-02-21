import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllStudentsComponent } from './all-students/all-students.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {MatIconModule} from '@angular/material/icon';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    AllStudentsComponent,
    AddStudentComponent,
    EditStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,MatIconModule,A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
