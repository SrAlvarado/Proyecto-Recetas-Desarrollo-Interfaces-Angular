import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaTarjetaReceta } from './molecula-tarjeta-receta';

describe('MoleculaTarjetaReceta', () => {
  let component: MoleculaTarjetaReceta;
  let fixture: ComponentFixture<MoleculaTarjetaReceta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaTarjetaReceta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaTarjetaReceta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
