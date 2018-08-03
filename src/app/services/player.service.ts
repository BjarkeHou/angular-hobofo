import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { PLAYERS } from '../mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
  	this.messageService.add("PlayerService: Loading players...");
  	return of(PLAYERS);
  }
}
