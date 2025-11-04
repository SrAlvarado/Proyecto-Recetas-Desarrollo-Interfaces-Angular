import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaCampoReceta } from './molecula-campo-receta';

describe('MoleculaCampoReceta', () => {
  let component: MoleculaCampoReceta;
  let fixture: ComponentFixture<MoleculaCampoReceta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaCampoReceta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaCampoReceta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
