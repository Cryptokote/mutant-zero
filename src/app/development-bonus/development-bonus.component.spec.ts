import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentBonusComponent } from './development-bonus.component';

describe('DevelopmentBonusComponent', () => {
  let component: DevelopmentBonusComponent;
  let fixture: ComponentFixture<DevelopmentBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
