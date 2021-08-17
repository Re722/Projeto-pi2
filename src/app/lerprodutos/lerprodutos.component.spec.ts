import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerprodutosComponent } from './lerprodutos.component';

describe('LerprodutosComponent', () => {
  let component: LerprodutosComponent;
  let fixture: ComponentFixture<LerprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LerprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
