import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoFormularioReceta } from './organismo-formulario-receta';

describe('OrganismoFormularioReceta', () => {
  let component: OrganismoFormularioReceta;
  let fixture: ComponentFixture<OrganismoFormularioReceta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoFormularioReceta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoFormularioReceta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
