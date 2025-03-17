import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/User/user.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { log } from 'console';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [UserService], // Add UserService here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name
})
export class LoginComponent implements OnInit {
  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private dialog: MatDialog) {}

  change() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      userGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      })
    });
  }

  openErrorDialog(message: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: { message },
      width: '300px'
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
        const userData = this.addUserForm.get('userGroup')?.value;
        this.userService.loginUser(userData).subscribe({
            next: (response) => {
                if (response.token) { // ודא שיש טוקן בתגובה
                    sessionStorage.setItem('token', response.token);
                    sessionStorage.setItem('role', response.role);
                    sessionStorage.setItem('UserId', response.userId);
                    this.router.navigate(['/navbar/home-page']);
                } else {
                    this.openErrorDialog('Login failed. Please check your credentials.');
                }
            },
            error: (err) => {
                // טיפול בשגיאות מדויק יותר
                if (err.status === 401) {
                    this.openErrorDialog('Unauthorized: Invalid credentials.');
                } else {
                    this.openErrorDialog('An error occurred. Please try again.');
                }
            }
        });
    }
}

}