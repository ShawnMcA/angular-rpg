import { TestBed } from '@angular/core/testing';

import { ScreenStateService } from './screen-state.service';

describe('ScreenStateService', () => {
  let service: ScreenStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
