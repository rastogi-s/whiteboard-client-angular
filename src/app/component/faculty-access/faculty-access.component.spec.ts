import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAccessComponent } from './faculty-access.component';

describe('FacultyAccessComponent', () => {
  let component: FacultyAccessComponent;
  let fixture: ComponentFixture<FacultyAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
