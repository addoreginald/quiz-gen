import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecentAddedQuestionComponent } from './delete-recent-added-question.component';

describe('DeleteRecentAddedQuestionComponent', () => {
  let component: DeleteRecentAddedQuestionComponent;
  let fixture: ComponentFixture<DeleteRecentAddedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRecentAddedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecentAddedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
