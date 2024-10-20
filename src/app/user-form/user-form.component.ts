import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  user: User = { nome: '', senha: '' };

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.createUser(this.user).subscribe((newUser) => {
      console.log('Usuário cadastrado com sucesso:', newUser);
      this.user = { nome: '', senha: '' };
    });
  }
}
