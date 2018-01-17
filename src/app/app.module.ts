import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { QuizGeneratorComponent } from './components/quiz-generator/quiz-generator.component';
import { McqGeneratorComponent } from './components/mcq-generator/mcq-generator.component';
import { TimedMcqGeneratorComponent } from './components/timed-mcq-generator/timed-mcq-generator.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { AnswerEditorComponent } from './components/answer-editor/answer-editor.component';
import { appStore } from './@core/store/store';
import { DeleteRecentAddedQuestionComponent } from './components/delete-recent-added-question/delete-recent-added-question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizGeneratorComponent,
    McqGeneratorComponent,
    TimedMcqGeneratorComponent,
    QuestionEditorComponent,
    AnswerEditorComponent,
    DeleteRecentAddedQuestionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appStore)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
