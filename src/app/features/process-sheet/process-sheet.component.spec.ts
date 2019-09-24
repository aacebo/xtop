import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSheetComponent } from './process-sheet.component';

describe('ProcessSheetComponent', () => {
  let component: ProcessSheetComponent;
  let fixture: ComponentFixture<ProcessSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessSheetComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
