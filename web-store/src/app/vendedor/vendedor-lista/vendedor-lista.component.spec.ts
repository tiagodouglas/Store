import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorListaComponent } from './vendedor-lista.component';

describe('VendedorListaComponent', () => {
  let component: VendedorListaComponent;
  let fixture: ComponentFixture<VendedorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
