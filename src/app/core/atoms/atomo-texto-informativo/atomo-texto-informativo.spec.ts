import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoTextoInformativo } from './atomo-texto-informativo';

describe('AtomoTextoInformativo', () => {
  let component: AtomoTextoInformativo;
  let fixture: ComponentFixture<AtomoTextoInformativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoTextoInformativo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoTextoInformativo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
