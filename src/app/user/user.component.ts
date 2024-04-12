import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId : number = 10;
  status : string | undefined;

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
  
  getuserStatus() {
    return this.status;
  }

  getColor() {
    if(this.status === 'online') {
return 'green';
    }
    return 'red';

  }

}
