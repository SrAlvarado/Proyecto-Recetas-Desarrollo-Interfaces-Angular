import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoTituloFormulario } from './atomo-titulo-formulario';

describe('AtomoTituloFormulario', () => {
  let component: AtomoTituloFormulario;
  let fixture: ComponentFixture<AtomoTituloFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoTituloFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoTituloFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
