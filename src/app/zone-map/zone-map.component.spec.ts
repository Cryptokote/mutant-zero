import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMapComponent } from './zone-map.component';

describe('ZoneMapComponent', () => {
  let component: ZoneMapComponent;
  let fixture: ComponentFixture<ZoneMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
