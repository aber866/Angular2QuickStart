import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  	selector: 'my-app',
  	templateUrl: './app/app.component.html',
  	styleUrls: ['./app/app.component.css']
})
export class AppComponent {
	//Creamos data dentro de la clase y accedemos a ello en la vista, template
	message: string = "Hello";
	users: User[] = [
		{ id: 1, name: "Alberto", username: "aber866" },
		{ id: 2, name: "Ruben", username: "sobrino" },
		{ id: 3, name: "Sergio", username: "leon" }
	];
	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

	onUserCreated(event) {
		console.log(event);
		this.users.push(event.user);
	}
}