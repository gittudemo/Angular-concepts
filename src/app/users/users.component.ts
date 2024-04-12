import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allowNewUser : boolean = false;
  //changeUserStatus = 'Not Created...';
  userName = '';
  isUserCreated = false;
  users = ['user1','user2'];


  constructor() {
    setTimeout(() => {
  this.allowNewUser = true
  
}, 2000);
   
  }


  onChangeUserStatus() {
    this.isUserCreated = !this.isUserCreated;
    //this.changeUserStatus = 'User Created....';
    this.users.push(this.userName);
  }

  onUpdateUSer(ev : Event) {
this.userName = (ev.target as HTMLInputElement).value;
//console.log(this.userName);

  }

}
