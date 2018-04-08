import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsettingComponent } from './assetsetting.component';

describe('AssetsettingComponent', () => {
  let component: AssetsettingComponent;
  let fixture: ComponentFixture<AssetsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
