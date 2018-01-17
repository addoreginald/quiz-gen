import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../../@core/classes/quiz';
import { Store } from '@ngrx/store';
import { addMcq } from '../../@core/store/actions/questions_actions';

@Component({
  selector: 'app-mcq-generator',
  templateUrl: './mcq-generator.component.html',
  styleUrls: ['./mcq-generator.component.css']
})
export class McqGeneratorComponent implements OnInit {

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
  }

  create_mcq () {
    // Dispatch action
    const action = addMcq();
    this.store.dispatch(action);
  }

}
