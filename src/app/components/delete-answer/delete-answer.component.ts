import { Component, OnInit, Input } from '@angular/core';
import { removeAnswer } from '../../@core/store/actions/questions_actions';
import { Store } from '@ngrx/store';
import { Quiz } from '../../@core/classes/quiz';

@Component({
  selector: 'app-delete-answer',
  templateUrl: './delete-answer.component.html',
  styleUrls: ['./delete-answer.component.css']
})
export class DeleteAnswerComponent implements OnInit {

  @Input() questionId: number;

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
  }

  remove_answer () {
    const action = removeAnswer(this.questionId);
    this.store.dispatch(action);
  }

}
