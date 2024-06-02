import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfBrowserSupportComponent } from './out-of-browser-support.component';

describe('OutOfBrowserSupportComponent', () => {
  let component: OutOfBrowserSupportComponent;
  let fixture: ComponentFixture<OutOfBrowserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutOfBrowserSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutOfBrowserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
