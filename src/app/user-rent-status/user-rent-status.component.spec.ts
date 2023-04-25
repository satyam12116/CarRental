import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentStatusComponent } from './user-rent-status.component';

describe('UserRentStatusComponent', () => {
  let component: UserRentStatusComponent;
  let fixture: ComponentFixture<UserRentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
