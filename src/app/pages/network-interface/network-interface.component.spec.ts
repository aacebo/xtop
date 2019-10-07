import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInterfaceComponent } from './network-interface.component';

describe('NetworkInterfaceComponent', () => {
  let component: NetworkInterfaceComponent;
  let fixture: ComponentFixture<NetworkInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkInterfaceComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
