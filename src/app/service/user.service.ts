import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock/mock-user';
import { User } from '../model/User';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessagesService) { }

  getUsers(): Observable<User[]>{
    const users = of(USERS)
    this.messageService.add('Get user success')
    return users
  }
}
