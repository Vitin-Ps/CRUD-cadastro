import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDinamicoPaiComponent } from './formulario-dinamico-pai.component';

describe('FormularioDinamicoPaiComponent', () => {
  let component: FormularioDinamicoPaiComponent;
  let fixture: ComponentFixture<FormularioDinamicoPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioDinamicoPaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioDinamicoPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
