import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDetallesProductoComponent } from './editar-detalles-producto.component';

describe('EditarDetallesProductoComponent', () => {
  let component: EditarDetallesProductoComponent;
  let fixture: ComponentFixture<EditarDetallesProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDetallesProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDetallesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
