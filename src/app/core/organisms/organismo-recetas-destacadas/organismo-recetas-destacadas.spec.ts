import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoRecetasDestacadas } from './organismo-recetas-destacadas';

describe('OrganismoRecetasDestacadas', () => {
  let component: OrganismoRecetasDestacadas;
  let fixture: ComponentFixture<OrganismoRecetasDestacadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoRecetasDestacadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoRecetasDestacadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
