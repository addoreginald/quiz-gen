import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MultipleChoiceQuestion } from '../../@core/classes/mcq_question';
import { QuestionBuilder } from '../../@core/builders/question_builder';

@Component({
  selector: 'app-mcq-generator',
  templateUrl: './mcq-generator.component.html',
  styleUrls: ['./mcq-generator.component.css']
})
export class McqGeneratorComponent implements OnInit {

  @Output() mcqCreated = new EventEmitter<MultipleChoiceQuestion>();

  constructor(
  ) { }

  ngOnInit() {
  }

  create_mcq () {
    const questionBuilder = new QuestionBuilder();
    const mcq = questionBuilder.build_mcq();
    this.mcqCreated.emit(mcq);
  }

}
