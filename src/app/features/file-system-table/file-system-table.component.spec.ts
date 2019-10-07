import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemTableComponent } from './file-system-table.component';

describe('FileSystemTableComponent', () => {
  let component: FileSystemTableComponent;
  let fixture: ComponentFixture<FileSystemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemTableComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
