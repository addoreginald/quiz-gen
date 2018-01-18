import { Component, OnInit, Input } from '@angular/core';
import { editQuestionStatement, editQuestionTime } from '../../@core/store/actions/questions_actions';
import { Store } from '@ngrx/store';
import { Quiz } from '../../@core/classes/quiz';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  @Input()  question?: any;
  @Input() questionId: number;

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {

  }

  editQuestion (index: number, value: any) {
    const action = editQuestionStatement(index, value);
    this.store.dispatch(action);
  }

  set_time (index: number, time: string) {
    const action = editQuestionTime(index, Number.parseInt(time));
    this.store.dispatch(action);
  }
}
