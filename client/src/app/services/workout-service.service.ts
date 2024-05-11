import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Observable} from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

interface MuscleItem {
  id: number;
  description: string;
  rounds: string;
  reps: string;
  pr: string;
  prev: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorkoutServiceService {
  constructor(private http: HttpClient) {}

  muscle: MuscleItem[] = [];
  description: string = '';
  rounds: string = '';
  reps: string = '';
  pr: string = '';
  prev: string = '';
  modalRef: BsModalRef | undefined;

  getExercies(muscleGroup: string): void {
    this.http
      .get<MuscleItem[]>(`http://localhost:9000/${muscleGroup}`)
      .subscribe({
        next: (data) => {
          this.muscle = data;
        },
        error: (error) => {
          console.error(error.message);
        },
      });
  }
}
