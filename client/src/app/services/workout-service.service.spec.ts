import {TestBed} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {WorkoutServiceService} from './workout-service.service';

describe('WorkoutServiceService', () => {
  let service: WorkoutServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorkoutServiceService],
    });
    service = TestBed.inject(WorkoutServiceService);
    httpMock = TestBed.inject(HttpTestingController);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    spyOn(localStorage, 'getItem').and.callFake((key) => {
      return '{"id":1,"description":"test","rounds":"3","reps":"12","pr":"100kg","prev":"95kg"}';
    });
    spyOn(localStorage, 'setItem');
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
