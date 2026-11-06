import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmfragenComponent } from './umfragen.component';

describe('UmfragenComponent', () => {
  let component: UmfragenComponent;
  let fixture: ComponentFixture<UmfragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmfragenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UmfragenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
