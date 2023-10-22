import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlegendComponent } from './dlegend.component';

describe('DlegendComponent', () => {
  let component: DlegendComponent;
  let fixture: ComponentFixture<DlegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlegendComponent]
    });
    fixture = TestBed.createComponent(DlegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
