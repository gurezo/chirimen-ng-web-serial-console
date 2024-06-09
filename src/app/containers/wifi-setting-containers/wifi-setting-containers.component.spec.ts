import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiSettingContainersComponent } from './wifi-setting-containers.component';

describe('WifiSettingContainersComponent', () => {
  let component: WifiSettingContainersComponent;
  let fixture: ComponentFixture<WifiSettingContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiSettingContainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiSettingContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
