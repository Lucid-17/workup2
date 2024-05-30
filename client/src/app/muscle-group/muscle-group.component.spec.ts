import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MuscleGroupComponent} from './muscle-group.component';
import {ActivatedRoute} from '@angular/router';
import {WorkoutServiceService} from '../services/workout-service.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {of} from 'rxjs';

describe('MuscleGroupComponent', () => {
  let component: MuscleGroupComponent;
  let fixture: ComponentFixture<MuscleGroupComponent>;
  let workoutServiceMock: unknown;
  let modalServiceMock: unknown;
  let activatedRouteMock: unknown;

  beforeEach(async () => {
    workoutServiceMock = {
      getWorkouts: () => of([]),
      createWorkout: () => of({}),
      updateWorkout: () => of({}),
      deleteWorkout: () => of({}),
    };
    modalServiceMock = {
      show: jasmine.createSpy('show'),
    };
    activatedRouteMock = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      paramMap: of({get: (key: string) => 'defaultMuscleGroup'}),
    };

    await TestBed.configureTestingModule({
      declarations: [MuscleGroupComponent],
      providers: [
        {provide: WorkoutServiceService, useValue: workoutServiceMock},
        {provide: BsModalService, useValue: modalServiceMock},
        {provide: ActivatedRoute, useValue: activatedRouteMock},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MuscleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
