import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId : number = 10;
  status : string = 'offline';
  
  getuserStatus() {
    return this.status;
  }

}
