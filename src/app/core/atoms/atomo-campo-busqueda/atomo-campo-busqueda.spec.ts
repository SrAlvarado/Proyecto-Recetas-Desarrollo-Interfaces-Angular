import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoCampoBusqueda } from './atomo-campo-busqueda';

describe('AtomoCampoBusqueda', () => {
  let component: AtomoCampoBusqueda;
  let fixture: ComponentFixture<AtomoCampoBusqueda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoCampoBusqueda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoCampoBusqueda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
