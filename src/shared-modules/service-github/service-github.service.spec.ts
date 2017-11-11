import { TestBed, inject } from '@angular/core/testing';

import { ServiceGithubService } from './service-github.service';

describe('ServiceGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceGithubService]
    });
  });

  it('should be created', inject([ServiceGithubService], (service: ServiceGithubService) => {
    expect(service).toBeTruthy();
  }));
});
