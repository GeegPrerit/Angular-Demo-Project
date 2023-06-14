import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsuptionComponent } from './api-consuption.component';

describe('ApiConsuptionComponent', () => {
  let component: ApiConsuptionComponent;
  let fixture: ComponentFixture<ApiConsuptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiConsuptionComponent]
    });
    fixture = TestBed.createComponent(ApiConsuptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
