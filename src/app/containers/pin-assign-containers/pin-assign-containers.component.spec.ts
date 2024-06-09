import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinAssignContainersComponent } from './pin-assign-containers.component';

describe('PinAssignContainersComponent', () => {
  let component: PinAssignContainersComponent;
  let fixture: ComponentFixture<PinAssignContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinAssignContainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinAssignContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
