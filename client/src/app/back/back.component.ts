import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

interface BackItem {
  back_id: number;
  description: string;
  rounds: string;
  reps: string;
  pr: string;
  prev: string;
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

  onSubmit() {
    this.createBack().subscribe({
      next: () => (window.location.href = '/back'), //redirecting to back page after submission
      error: (error) => console.error(error),
    });
  }

  // GET all Back exercises //
  async getAllBacks() {
    this.http.get<BackItem[]>('http://localhost:9000/back').subscribe(
      (data) => {
        this.back = data;
      },
      (error) => {
        console.error(error.messages);
      },
    );
  }

  // CREATE a Back exercise //

  createBack() {
    const body = {
      description: this.description,
      rounds: this.rounds,
      reps: this.reps,
      pr: this.pr,
      prev: this.prev,
    };
    return this.http.post('http://localhost:9000/back', body);
  }

  //EDIT a Back exercise //
  updateBack(
    id: number,
    description: string,
    rounds: string,
    reps: string,
    pr: string,
    prev: string,
  ): void {
    const body = {description, rounds, reps, pr, prev};
    this.http
      .put(`http://localhost:9000/back/${id}`, body, {
        headers: {'Content-Type': 'application/json'},
      })
      .subscribe(
        () => {
          window.location.href = '/back'; //returning to back page to load correct description
        },
        (error) => {
          console.error(error.message);
        },
      );
  }

  // DELETE a Back exercise //
  async deleteBack(id: number) {
    this.http.delete(`http://localhost:9000/back/${id}`).subscribe(
      () => {
        this.back = this.back.filter((back) => back.back_id !== id);
        window.location.href = '/back'; //returning to back page to load correct description
      },
      (error) => {
        console.error((error as Error).message);
      },
    );
  }

  // Open Modal //
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
