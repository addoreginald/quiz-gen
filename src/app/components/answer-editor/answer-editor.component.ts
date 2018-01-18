import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Quiz } from '../../@core/classes/quiz';
import { editAnswerStatement, setAnswer, setValidity } from '../../@core/store/actions/questions_actions';

@Component({
  selector: 'app-answer-editor',
  templateUrl: './answer-editor.component.html',
  styleUrls: ['./answer-editor.component.css']
})
export class AnswerEditorComponent implements OnInit {

  @Input() choice?: any;
  @Input() choiceId: number;
  @Input() questionId: number;

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
    this.store.subscribe(
      (state) => {

      }
    );
  }

  set_answer (index: number, choice_index: number, value: string) {
    const action = editAnswerStatement(index, choice_index, value);
    this.store.dispatch(action);
  }

  set_correct_answer (index: number, choice_index: number) {
    const action = setValidity(index, choice_index);
    this.store.dispatch(action);
  }

}
