import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestion } from '../../@core/classes/mcq_question';
import { TimedMultipleChoiceQuestion } from '../../@core/classes/timed_mcq_question';

@Component({
  selector: 'app-quiz-generator',
  templateUrl: './quiz-generator.component.html',
  styleUrls: ['./quiz-generator.component.css']
})
export class QuizGeneratorComponent implements OnInit {

  // Questions holder
  questions: Array<any> = [];

  constructor(
  ) { }

  ngOnInit() {
  }

  store_mcq (mcq: MultipleChoiceQuestion) {
    this.questions.push(mcq);
    console.log(this.questions);
  }

  store_timed_mcq (timed_mcq: TimedMultipleChoiceQuestion) {
    this.questions.push(timed_mcq);
    console.log(this.questions);
  }

}
