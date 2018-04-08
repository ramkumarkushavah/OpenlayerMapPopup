import { TestBed, inject } from '@angular/core/testing';

import { SqlDatabaseService } from './sql-database.service';

describe('SqlDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlDatabaseService]
    });
  });

  it('should be created', inject([SqlDatabaseService], (service: SqlDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
