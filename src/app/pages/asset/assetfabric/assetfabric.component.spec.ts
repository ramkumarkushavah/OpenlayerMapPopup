import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetfabricComponent } from './assetfabric.component';

describe('AssetfabricComponent', () => {
  let component: AssetfabricComponent;
  let fixture: ComponentFixture<AssetfabricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetfabricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetfabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
