import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../@core/classes/quiz';
import { deleteRecent } from '../../@core/store/actions/questions_actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-delete-recent-added-question',
  templateUrl: './delete-recent-added-question.component.html',
  styleUrls: ['./delete-recent-added-question.component.css']
})
export class DeleteRecentAddedQuestionComponent implements OnInit {

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
  }

  delete_recent_question() {
    const action = deleteRecent();
    this.store.dispatch(action);
  }
}
