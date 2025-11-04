import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoContenedorFormulario } from './atomo-contenedor-formulario';

describe('AtomoContenedorFormulario', () => {
  let component: AtomoContenedorFormulario;
  let fixture: ComponentFixture<AtomoContenedorFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoContenedorFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoContenedorFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
