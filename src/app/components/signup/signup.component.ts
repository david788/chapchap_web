// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { BackendService } from 'src/app/backend.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent implements OnInit {

//   constructor(  private _backendservice: BackendService) { }

//   public signUpForm = new FormGroup({
//     email: new FormControl('',  Validators.required),
//     password: new FormControl('',  Validators.required),
   
//   }); 


//   ngOnInit(): void {
//   }

//   signup(formData: FormData){
//     this._backendservice.signUp(formData["email"], formData["password"]);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  state: string = '';
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;
  savedChanges = false;
  constructor(private _backendService: BackendService, private router: Router) {
  }
  //this takes user back to login page
  routeLoginPage() {
    this.router.navigate(['/login']);
  }


 //signing up function for the new user function declared here
  onSubmit(formData) {
    this.dataLoading = true;
    this._backendService.createUser(formData).then(
      (success) => {
        this.dataLoading = false;
        this.savedChanges = true;
      },
      (error) => {
        this.error = error;
        this.dataLoading = false;
        this.savedChanges = false;
      }
    )
  }
}

