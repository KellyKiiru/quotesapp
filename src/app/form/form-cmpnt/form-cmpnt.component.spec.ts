import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCmpntComponent } from './form-cmpnt.component';

describe('FormCmpntComponent', () => {
  let component: FormCmpntComponent;
  let fixture: ComponentFixture<FormCmpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCmpntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
