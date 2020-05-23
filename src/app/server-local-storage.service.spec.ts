import { TestBed } from '@angular/core/testing';

import { ServerLocalStorageService } from './server-local-storage.service';

describe('ServerLocalStorageService', () => {
  let service: ServerLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
