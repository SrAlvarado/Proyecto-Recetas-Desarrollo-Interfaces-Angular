import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoEtiquetaIngrediente } from './atomo-etiqueta-ingrediente';

describe('AtomoEtiquetaIngrediente', () => {
  let component: AtomoEtiquetaIngrediente;
  let fixture: ComponentFixture<AtomoEtiquetaIngrediente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoEtiquetaIngrediente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoEtiquetaIngrediente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
