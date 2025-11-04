import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoCampoFormulario } from './atomo-campo-formulario';

describe('AtomoCampoFormulario', () => {
  let component: AtomoCampoFormulario;
  let fixture: ComponentFixture<AtomoCampoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoCampoFormulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoCampoFormulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
