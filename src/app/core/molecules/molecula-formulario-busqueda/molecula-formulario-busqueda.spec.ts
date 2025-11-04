import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaFormularioBusqueda } from './molecula-formulario-busqueda';

describe('MoleculaFormularioBusqueda', () => {
  let component: MoleculaFormularioBusqueda;
  let fixture: ComponentFixture<MoleculaFormularioBusqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaFormularioBusqueda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaFormularioBusqueda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
