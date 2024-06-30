import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';
import { TopComponent } from './top.component';

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
