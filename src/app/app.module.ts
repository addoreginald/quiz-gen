import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuizGeneratorComponent } from './components/quiz-generator/quiz-generator.component';
import { McqGeneratorComponent } from './components/mcq-generator/mcq-generator.component';
import { TimedMcqGeneratorComponent } from './components/timed-mcq-generator/timed-mcq-generator.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { AnswerEditorComponent } from './components/answer-editor/answer-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizGeneratorComponent,
    McqGeneratorComponent,
    TimedMcqGeneratorComponent,
    QuestionEditorComponent,
    AnswerEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
