import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDinamicoFilhoComponent } from './formulario-dinamico-filho.component';

describe('FormularioDinamicoFilhoComponent', () => {
  let component: FormularioDinamicoFilhoComponent;
  let fixture: ComponentFixture<FormularioDinamicoFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioDinamicoFilhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioDinamicoFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
