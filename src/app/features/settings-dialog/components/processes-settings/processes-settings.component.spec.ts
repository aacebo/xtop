import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesSettingsComponent } from './processes-settings.component';

describe('ProcessesSettingsComponent', () => {
  let component: ProcessesSettingsComponent;
  let fixture: ComponentFixture<ProcessesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessesSettingsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
