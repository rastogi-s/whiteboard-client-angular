import { TestBed, inject } from '@angular/core/testing';

import { CoursePrivacyService } from './course-privacy.service';

describe('CoursePrivacyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursePrivacyService]
    });
  });

  it('should be created', inject([CoursePrivacyService], (service: CoursePrivacyService) => {
    expect(service).toBeTruthy();
  }));
});
