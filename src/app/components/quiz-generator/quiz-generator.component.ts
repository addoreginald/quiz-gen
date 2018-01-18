import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestion } from '../../@core/classes/mcq_question';
import { TimedMultipleChoiceQuestion } from '../../@core/classes/timed_mcq_question';
import { Quiz } from '../../@core/classes/quiz';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.css']
})
export class QuizGeneratorComponent implements OnInit {

  // Questions holder
  questions: Array<any> = [];

  constructor(
    private store: Store<Quiz>
  ) { }

  ngOnInit() {
    this.store.subscribe(
      (state) => {
        // update questions
        this.questions = state.questions;
      }
    );
  }
}
