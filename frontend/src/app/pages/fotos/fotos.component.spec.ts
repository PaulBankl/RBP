import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosComponent } from './fotos.component';

describe('FotosComponent', () => {
  let component: FotosComponent;
  let fixture: ComponentFixture<FotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FotosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
