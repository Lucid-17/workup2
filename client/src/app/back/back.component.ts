import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {Observable} from 'rxjs';

interface BackItem {
  back_id: number;
  description: string;
  rounds: string;
  reps: string;
  pr: string;
  prev: string;
}

interface BackResponse {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrl: './back.component.css',
})
export class BackComponent implements OnInit {
  back: BackItem[] = [];
  description: string = '';
  rounds: string = '';
  reps: string = '';
  pr: string = '';
  prev: string = '';
  modalRef: BsModalRef | undefined;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.getAllBacks();
  }

  onSubmit(): void {
    this.createBack().subscribe({
      next: () => (window.location.href = '/back'), //redirecting to back page after submission
      error: (error) => console.error(error),
    });
  }

  onUpdate(
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): void {
    this.updateBack(id, description, rounds, reps, pr, prev).subscribe({
      next: () => {
        window.location.href = '/back'; // Redirecting to the back page after update
      },
      error: (error) => {
        console.error(error.message); // Handling errors
      },
    });
  }

  onDelete(id: number): void {
    this.deleteBack(id).subscribe({
      next: () => {
        this.back = this.back.filter((back) => back.back_id !== id);
        window.location.href = '/back'; //returning to back page to load correct description
      },
      error: (error: Error) => {
        console.error((error as Error).message);
      },
    });
  }

  // GET all Back exercises //
  getAllBacks() {
    this.http.get<BackItem[]>('http://localhost:9000/back').subscribe({
      next: (data) => {
        this.back = data;
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }

  // CREATE a Back exercise //

  createBack(): Observable<BackResponse> {
    const body = {
      description: this.description,
      rounds: this.rounds,
      reps: this.reps,
      pr: this.pr,
      prev: this.prev,
    };
    return this.http.post<BackResponse>('http://localhost:9000/back', body);
  }

  //EDIT a Back exercise //
  updateBack(
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): Observable<void> {
    const body = {description, rounds, reps, pr, prev};
    return this.http.put<void>(`http://localhost:9000/back/${id}`, body, {
      headers: {'Content-Type': 'application/json'},
    });
  }

  // DELETE a Back exercise //
  deleteBack(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:9000/back/${id}`);
  }

  // Open Modal //
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
