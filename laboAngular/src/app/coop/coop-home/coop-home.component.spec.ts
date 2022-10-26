import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopHomeComponent } from './coop-home.component';

describe('CoopHomeComponent', () => {
  let component: CoopHomeComponent;
  let fixture: ComponentFixture<CoopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
