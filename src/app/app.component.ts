import { Component } from '@angular/core';
import { QuestionFactory } from './@core/factories/question_factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  question_mcq (value) {
    const question = new QuestionFactory();
    const mcq = question.create_question('mcq');
    mcq.answer = '';
    mcq.statement = '';
    mcq.time = 0;
    mcq.choices = [];
    console.log(mcq);
  }
}
