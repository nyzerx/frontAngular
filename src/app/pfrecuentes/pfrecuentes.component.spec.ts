import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFrecuentesComponent } from './pfrecuentes.component';

describe('PFrecuentesComponent', () => {
  let component: PFrecuentesComponent;
  let fixture: ComponentFixture<PFrecuentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFrecuentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
