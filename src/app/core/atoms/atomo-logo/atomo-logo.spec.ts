import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoLogo } from './atomo-logo';

describe('AtomoLogo', () => {
  let component: AtomoLogo;
  let fixture: ComponentFixture<AtomoLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
