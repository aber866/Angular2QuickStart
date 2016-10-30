import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  	selector: 'user-form',
  	styles: [`
		form {
			padding: 10px;
			background: #ECF0F1;
			border-radius: 3px;
			margin-bottom: 30px;
		}
  	`],
  	template: `
		<form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
			{{form.valid}}
			<div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
				<input type="text" class="form-control" name="name" placeholder="Name" required
					[(ngModel)]="newUser.name" #name="ngModel"
				/>
				<span class="help-block" *ngIf="name.invalid && name.touched">Name is required</span>
			</div>
			<div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
				<input type="text" class="form-control" name="username" placeholder="Username" required 
					[(ngModel)]="newUser.username" #username="ngModel"
				/>
				<span class="help-block" *ngIf="username.invalid && username.touched">Username is required</span>
			</div>
			<button type="submit" class="btn btn-lg btn-block btn-primary"
				[disabled]="form.invalid"
			>Create user</button>
		</form>
  	`
})
export class UserFormComponent {
	@Output() userCreated = new EventEmitter();
	newUser: User = new User();
	active: Boolean = true;
	onSubmit() {
		//show the event that the user was created
		this.userCreated.emit({ user: this.newUser }); //pasamos el user para arriba
		console.log(this.newUser);
		this.newUser = new User();
		this.active = false; //Para recargar el formulario cada vez y asi limpiar el invalid y el touched
		setTimeout(() => this.active = true, 0);
	}
}