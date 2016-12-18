import { Injectable } from '@angular/core';
import { Performer } from './../models/performer';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PerformerService {
	performers: Observable<Performer[]>;
}
