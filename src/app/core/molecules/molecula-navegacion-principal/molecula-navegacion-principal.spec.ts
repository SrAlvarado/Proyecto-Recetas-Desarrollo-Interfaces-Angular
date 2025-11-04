import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculaNavegacionPrincipal } from './molecula-navegacion-principal';

describe('MoleculaNavegacionPrincipal', () => {
  let component: MoleculaNavegacionPrincipal;
  let fixture: ComponentFixture<MoleculaNavegacionPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculaNavegacionPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculaNavegacionPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
