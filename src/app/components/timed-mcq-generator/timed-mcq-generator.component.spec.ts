import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedMcqGeneratorComponent } from './timed-mcq-generator.component';

describe('TimedMcqGeneratorComponent', () => {
  let component: TimedMcqGeneratorComponent;
  let fixture: ComponentFixture<TimedMcqGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedMcqGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedMcqGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
