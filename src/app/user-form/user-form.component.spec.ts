import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { UserFormComponent } from './user-form.component';
import { UserService } from '../services/user.service';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let mockUserService: any;

  beforeEach(async () => {
    // mock do UserService
    mockUserService = jasmine.createSpyObj('UserService', ['createUser']);

    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit and createUser when the form is submitted', () => {
    // simula sucesso mocando os campos
    mockUserService.createUser.and.returnValue(of({ id: 1, nome: 'Test User', senha: '1234' }));

    // preenhce os campos
    component.user.nome = 'Test User';
    component.user.senha = '1234';

    component.onSubmit();

    // testa o chamado do método createUser
    expect(mockUserService.createUser).toHaveBeenCalledWith({ nome: 'Test User', senha: '1234' });
  });

  it('should reset the form after successful submission', () => {
    // mock
    mockUserService.createUser.and.returnValue(of({ id: 1, nome: 'Test User', senha: '1234' }));

    // preenhce os campos
    component.user.nome = 'Test User';
    component.user.senha = '1234';

    component.onSubmit();

    expect(component.user.nome).toBe('');
    expect(component.user.senha).toBe('');
  });
});
