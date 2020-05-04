import { TestBed } from '@angular/core/testing';

import { CategoriesFacadeService } from './categories-facade.service';

describe('CategoriesFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriesFacadeService = TestBed.get(CategoriesFacadeService);
    expect(service).toBeTruthy();
  });
});
