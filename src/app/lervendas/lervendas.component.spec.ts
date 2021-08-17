import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LervendasComponent } from './lervendas.component';

describe('LervendasComponent', () => {
  let component: LervendasComponent;
  let fixture: ComponentFixture<LervendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LervendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LervendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
