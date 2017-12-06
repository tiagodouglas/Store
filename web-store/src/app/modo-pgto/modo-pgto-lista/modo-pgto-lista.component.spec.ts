import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoPgtoListaComponent } from './modo-pgto-lista.component';

describe('ModoPgtoListaComponent', () => {
  let component: ModoPgtoListaComponent;
  let fixture: ComponentFixture<ModoPgtoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoPgtoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoPgtoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
