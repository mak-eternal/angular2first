import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	selectedUser : User;

  	users : User[] = [
					{"id":1, "name":"Mak", "phone":1234567890}, 
					{"id":2, "name":"Vivek", "phone":1234567890}, 
					{"id":3, "name":"Kartik", "phone":1234567890}, 
					{"id":4, "name":"Kishan", "phone":1234567890}
				];
	
  	alertName(selUser : User)
	{	
		this.selectedUser = selUser;
	}
}
