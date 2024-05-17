import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export interface MuscleItem {
  id: number;
  description: string;
  rounds: string;
  reps: string;
  pr: string;
  prev: string;
}

interface Return {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorkoutServiceService {
  private isDemo: boolean = true;

  constructor(private http: HttpClient) {}

  private getLocalStorageKey(muscleGroup: string): string {
    return `workouts_${muscleGroup}`;
  }

  getWorkouts(muscleGroup: string): Observable<MuscleItem[]> {
    if (this.isDemo) {
      const workouts = localStorage.getItem(
        this.getLocalStorageKey(muscleGroup),
      );
      return of(workouts ? JSON.parse(workouts) : []);
    } else {
      return this.http.get<MuscleItem[]>(
        `http://localhost:9000/${muscleGroup}`,
      );
    }
  }

  createWorkout(
    muscleGroup: string,
    body: Pick<MuscleItem, 'description' | 'rounds' | 'reps' | 'pr' | 'prev'>,
  ): Observable<MuscleItem> {
    if (this.isDemo) {
      const workouts = JSON.parse(
        localStorage.getItem(this.getLocalStorageKey(muscleGroup)) || '[]',
      );
      const newWorkout: MuscleItem = {
        id: Date.now(),
        description: body.description,
        rounds: body.rounds,
        reps: body.reps,
        pr: body.pr,
        prev: body.prev,
      };
      workouts.push(newWorkout);
      localStorage.setItem(
        this.getLocalStorageKey(muscleGroup),
        JSON.stringify(workouts),
      );
      return of(newWorkout);
    } else {
      return this.http.post<MuscleItem>(
        `http://localhost:9000/${muscleGroup}`,
        body,
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
    }
  }

  updateWorkout(
    muscleGroup: string,
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): Observable<Return> {
    if (this.isDemo) {
      const workouts = JSON.parse(
        localStorage.getItem(this.getLocalStorageKey(muscleGroup)) || '[]',
      );
      const index = workouts.findIndex(
        (workout: MuscleItem) => workout.id === id,
      );
      if (index !== -1) {
        workouts[index] = {
          ...workouts[index],
          description,
          rounds,
          reps,
          pr,
          prev,
        };
        localStorage.setItem(
          this.getLocalStorageKey(muscleGroup),
          JSON.stringify(workouts),
        );
      }
      return of({message: 'Updated successfully'});
    } else {
      const body = {description, rounds, reps, pr, prev};
      return this.http.put<Return>(
        `http://localhost:9000/${muscleGroup}/${id}`,
        body,
        {
          headers: {'Content-Type': 'application/json'},
        },
      );
    }
  }

  deleteWorkout(muscleGroup: string, id: number): Observable<Return> {
    if (this.isDemo) {
      let workouts = JSON.parse(
        localStorage.getItem(this.getLocalStorageKey(muscleGroup)) || '[]',
      );
      workouts = workouts.filter((workout: MuscleItem) => workout.id !== id);
      localStorage.setItem(
        this.getLocalStorageKey(muscleGroup),
        JSON.stringify(workouts),
      );
      return of({message: 'Deleted successfully'});
    } else {
      return this.http.delete<Return>(
        `http://localhost:9000/${muscleGroup}/${id}`,
      );
    }
  }
}
