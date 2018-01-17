import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimedMultipleChoiceQuestion } from '../../@core/classes/timed_mcq_question';
import { QuestionBuilder } from '../../@core/builders/question_builder';
import { Quiz } from '../../@core/classes/quiz';
import { Store } from '@ngrx/store';
import { createAction } from '../../@core/factories/action_factory';
import { addTimedMcq } from '../../@core/store/actions/questions_actions';

@Component({
  selector: 'app-timed-mcq-generator',
  templateUrl: './timed-mcq-generator.component.html',
  styleUrls: ['./timed-mcq-generator.component.css']
})
export class TimedMcqGeneratorComponent implements OnInit {

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
  }

  create_timed_mcq () {
    const action = addTimedMcq();
    this.store.dispatch(action);
  }

}
