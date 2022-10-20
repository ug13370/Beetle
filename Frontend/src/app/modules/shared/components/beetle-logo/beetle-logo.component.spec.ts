import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetleLogoComponent } from './beetle-logo.component';

describe('BeetleLogoComponent', () => {
  let component: BeetleLogoComponent;
  let fixture: ComponentFixture<BeetleLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeetleLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeetleLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
