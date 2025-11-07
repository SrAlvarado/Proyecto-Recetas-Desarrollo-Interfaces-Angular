import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismoModalReceta } from './organismo-modal-receta';

describe('OrganismoModalReceta', () => {
  let component: OrganismoModalReceta;
  let fixture: ComponentFixture<OrganismoModalReceta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismoModalReceta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismoModalReceta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
