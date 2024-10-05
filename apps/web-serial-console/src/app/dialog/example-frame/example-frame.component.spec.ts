import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleFrameComponent } from './example-frame.component';

describe('ExampleFrameComponent', () => {
  let component: ExampleFrameComponent;
  let fixture: ComponentFixture<ExampleFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
