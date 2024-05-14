import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  constructor(private http: HttpClient) {}

  getWorkouts(muscleGroup: string): Observable<MuscleItem[]> {
    return this.http.get<MuscleItem[]>(`http://localhost:9000/${muscleGroup}`);
  }

  createWorkout(muscleGroup: string, body: object): Observable<MuscleItem> {
    return this.http.post<MuscleItem>(
      `http://localhost:9000/${muscleGroup}`,
      body,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );
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
    const body = {description, rounds, reps, pr, prev};
    return this.http.put<Return>(
      `http://localhost:9000/${muscleGroup}/${id}`,
      body,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );
  }

  deleteWorkout(muscleGroup: string, id: number): Observable<Return> {
    return this.http.delete<Return>(
      `http://localhost:9000/${muscleGroup}/${id}`,
    );
  }
}
