import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContainersComponent } from './editor-containers.component';

describe('EditorContainersComponent', () => {
  let component: EditorContainersComponent;
  let fixture: ComponentFixture<EditorContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorContainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
