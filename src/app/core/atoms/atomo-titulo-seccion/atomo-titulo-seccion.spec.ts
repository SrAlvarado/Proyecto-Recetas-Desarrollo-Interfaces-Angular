import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoTituloSeccion } from './atomo-titulo-seccion';

describe('AtomoTituloSeccion', () => {
  let component: AtomoTituloSeccion;
  let fixture: ComponentFixture<AtomoTituloSeccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoTituloSeccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoTituloSeccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
