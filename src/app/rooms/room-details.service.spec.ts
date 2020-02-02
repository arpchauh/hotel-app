import { TestBed } from '@angular/core/testing';

import { RoomDetailsService } from './room-details.service';

describe('RoomDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomDetailsService = TestBed.get(RoomDetailsService);
    expect(service).toBeTruthy();
  });
});
