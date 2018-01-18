import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Quiz } from '../../@core/classes/quiz';
import { addAnswer } from '../../@core/store/actions/questions_actions';
import { AnswerFactory } from '../../@core/factories/answer_factory';
import { MultipleChoiceAnswer } from '../../@core/classes/mcq_answer';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {

  @Input() questionId: number;

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
  }

  add_answer () {
    const answerFactory = new AnswerFactory();
    const answer: MultipleChoiceAnswer = answerFactory.create_answer('mcq');
    const action = addAnswer(this.questionId, answer);
    this.store.dispatch(action);
  }

}
