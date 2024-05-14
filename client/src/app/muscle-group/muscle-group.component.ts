import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {
  WorkoutServiceService,
  MuscleItem,
} from '../services/workout-service.service';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.component.html',
  styleUrl: './muscle-group.component.css',
})
export class MuscleGroupComponent implements OnInit {
  muscleGroup: string = '';
  exercises: MuscleItem[] = [];
  description: string = '';
  rounds: string = '';
  reps: string = '';
  pr: string = '';
  prev: string = '';
  modalRef: BsModalRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutServiceService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.muscleGroup = params.get('muscleGroup') || '';
      this.getAllExercises();
    });
  }

  getAllExercises(): void {
    this.workoutService.getWorkouts(this.muscleGroup).subscribe({
      next: (data) => {
        this.exercises = data;
        console.log(this.exercises);
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }

  createExercise(): void {
    const body = {
      description: this.description,
      rounds: this.rounds,
      reps: this.reps,
      pr: this.pr,
      prev: this.prev,
    };
    this.workoutService.createWorkout(this.muscleGroup, body).subscribe({
      next: () => {
        this.getAllExercises();
        window.location.href = `/exercise/${this.muscleGroup}`;
      },
      error: (error) => console.error(error),
    });
  }

  updateExercise(
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): void {
    this.workoutService
      .updateWorkout(this.muscleGroup, id, description, rounds, reps, pr, prev)
      .subscribe({
        next: () => {
          window.location.href = `/exercise/${this.muscleGroup}`;
        },
        error: (error) => {
          console.error(error.message);
        },
      });
  }

  deleteExercise(id: number): void {
    this.workoutService.deleteWorkout(this.muscleGroup, id).subscribe({
      next: () => {
        this.getAllExercises();
        window.location.href = `/exercise/${this.muscleGroup}`;
      },
      error: (error: Error) => {
        console.error((error as Error).message);
      },
    });
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
