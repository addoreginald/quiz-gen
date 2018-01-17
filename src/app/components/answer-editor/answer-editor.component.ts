import { Component, OnInit, Input } from '@angular/core';
import { MultipleChoiceQuestion } from '../../@core/classes/mcq_question';

@Component({
  selector: 'app-answer-editor',
  templateUrl: './answer-editor.component.html',
  styleUrls: ['./answer-editor.component.css']
})
export class AnswerEditorComponent implements OnInit {

  @Input() choice?: any;

  constructor() { }

  ngOnInit() {
  }

}
