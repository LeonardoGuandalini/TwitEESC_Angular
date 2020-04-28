import { TestBed } from '@angular/core/testing';

import { ToolbarControlService } from './toolbar-control.service';

describe('ToolbarControlService', () => {
  let service: ToolbarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
