import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public usernameError = false;
  public passwordError = false;
  public errMessage = "";
  snackConfig: MatSnackBarConfig = {duration: 8000};
  formInput: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cd: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar,
  ) {
    this.formInput = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.cd.detectChanges();
    const { remote } = window.require('electron');
    remote.getCurrentWindow().setResizable(false);
  }

  login(): void {

    if (this.formInput.valid) {
      this.isLoading = true;
      const credential = {
        "username": this.formInput.value.username,
        "password": this.formInput.value.password
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };

      this.http.post(`http://localhost:8000/auth/login`, credential, httpOptions).subscribe((resp) => {
        console.log(resp)
        this.isLoading = false;
        this.errMessage = resp['Message'];
        if (resp["Status"] != "200") {
          this.usernameError = true;
          this.passwordError = true;
          this.snackBar.open(this.errMessage, 'OK', this.snackConfig)
          return
        } else {
          this.router.navigateByUrl('/dashboard');
          const { remote } = window.require('electron');
          remote.getCurrentWindow().maximize();
          remote.getCurrentWindow().setResizable(true)
          return;
        }
      })
    }

  }

}
