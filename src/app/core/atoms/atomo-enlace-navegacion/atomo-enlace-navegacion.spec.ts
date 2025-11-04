import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoEnlaceNavegacion } from './atomo-enlace-navegacion';

describe('AtomoEnlaceNavegacion', () => {
  let component: AtomoEnlaceNavegacion;
  let fixture: ComponentFixture<AtomoEnlaceNavegacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoEnlaceNavegacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoEnlaceNavegacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
