/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphqlService } from './graphql.service';

describe('GraphqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphqlService]
    });
  });

  it('should ...', inject([GraphqlService], (service: GraphqlService) => {
    expect(service).toBeTruthy();
  }));
});
