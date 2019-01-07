import { Injectable } from '@angular/core';
import User from '../../interfaces/user';

@Injectable()
export class DatabaseService {
  users: User[] = [
    {
      firstName: 'Noe',
      lastName: 'Olvera',
      age: 34,
      description: 'N A'
    },
    {
      firstName: 'Ramiro',
      lastName: 'X',
      age: 34,
      description: 'N A'
    },
    {
      firstName: 'Lil Peep',
      lastName: 'X',
      age: 34,
      description: 'N A'
    },
    {
      firstName: 'Swae',
      lastName: 'Lee',
      age: 34,
      description: 'N A'
    }
  ];
}
