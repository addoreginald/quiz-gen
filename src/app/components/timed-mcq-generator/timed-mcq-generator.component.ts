import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimedMultipleChoiceQuestion } from '../../@core/classes/timed_mcq_question';
import { QuestionBuilder } from '../../@core/builders/question_builder';

@Component({
  selector: 'app-timed-mcq-generator',
  templateUrl: './timed-mcq-generator.component.html',
  styleUrls: ['./timed-mcq-generator.component.css']
})
export class TimedMcqGeneratorComponent implements OnInit {

  @Output() timedMcqCreated = new EventEmitter<TimedMultipleChoiceQuestion>();

  constructor() { }

  ngOnInit() {
  }

  create_timed_mcq () {
    const questionBuilder = new QuestionBuilder();
    const timed_mcq = questionBuilder.build_timed_mcq();
    this.timedMcqCreated.emit(timed_mcq);
  }

}
