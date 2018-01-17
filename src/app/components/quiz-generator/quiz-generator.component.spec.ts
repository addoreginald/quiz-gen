import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGeneratorComponent } from './quiz-generator.component';

describe('QuizGeneratorComponent', () => {
  let component: QuizGeneratorComponent;
  let fixture: ComponentFixture<QuizGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
