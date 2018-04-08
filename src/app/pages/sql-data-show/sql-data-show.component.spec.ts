import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataShowComponent } from './sql-data-show.component';

describe('SqlDataShowComponent', () => {
  let component: SqlDataShowComponent;
  let fixture: ComponentFixture<SqlDataShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlDataShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
