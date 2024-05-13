import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {
  WorkoutServiceService,
  MuscleItem,
} from '../services/workout-service.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrl: './back.component.css',
})
export class BackComponent implements OnInit {
  back: MuscleItem[] = [];
  description: string = '';
  rounds: string = '';
  reps: string = '';
  pr: string = '';
  prev: string = '';
  modalRef: BsModalRef | undefined;

  constructor(
    private workoutService: WorkoutServiceService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.getAllBacks();
  }

  getAllBacks(): void {
    this.workoutService.getExercies('back').subscribe({
      next: (data) => {
        this.back = data;
        console.log(this.back);
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }

  createBack(): void {
    const body = {
      description: this.description,
      rounds: this.rounds,
      reps: this.reps,
      pr: this.pr,
      prev: this.prev,
    };
    this.workoutService.createExercise('back', body).subscribe({
      next: () => {
        this.getAllBacks();
        window.location.href = '/back';
      },
      error: (error) => console.error(error),
    });
  }

  updateBack(
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): void {
    this.workoutService
      .updateWorkout('back', id, description, rounds, reps, pr, prev)
      .subscribe({
        next: () => {
          window.location.href = '/back';
        },
        error: (error) => {
          console.error(error.message);
        },
      });
  }

  deleteBack(id: number): void {
    this.workoutService.deleteWorkout('back', id).subscribe({
      next: () => {
        this.getAllBacks();
        window.location.href = '/back';
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
