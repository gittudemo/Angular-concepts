import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allowNewUser : boolean = false;


  constructor() {
    setTimeout(() => {
  this.allowNewUser = true
  
}, 2000);
   
  }

}
