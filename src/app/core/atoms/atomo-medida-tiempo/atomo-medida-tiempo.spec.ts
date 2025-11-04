import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomoMedidaTiempo } from './atomo-medida-tiempo';

describe('AtomoMedidaTiempo', () => {
  let component: AtomoMedidaTiempo;
  let fixture: ComponentFixture<AtomoMedidaTiempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomoMedidaTiempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomoMedidaTiempo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
