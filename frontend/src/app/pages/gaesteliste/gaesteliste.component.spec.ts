import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaestelisteComponent } from './gaesteliste.component';

describe('GaestelisteComponent', () => {
  let component: GaestelisteComponent;
  let fixture: ComponentFixture<GaestelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaestelisteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GaestelisteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
