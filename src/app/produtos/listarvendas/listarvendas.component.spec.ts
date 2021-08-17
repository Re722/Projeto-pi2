import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarvendasComponent } from './listarvendas.component';

describe('ListarvendasComponent', () => {
  let component: ListarvendasComponent;
  let fixture: ComponentFixture<ListarvendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarvendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarvendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
