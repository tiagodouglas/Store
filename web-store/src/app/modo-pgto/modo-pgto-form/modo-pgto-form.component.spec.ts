import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoPgtoFormComponent } from './modo-pgto-form.component';

describe('ModoPgtoFormComponent', () => {
  let component: ModoPgtoFormComponent;
  let fixture: ComponentFixture<ModoPgtoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModoPgtoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoPgtoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
