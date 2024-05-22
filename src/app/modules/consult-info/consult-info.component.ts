import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConexionService } from 'src/app/core/services/api-conexion.service';

@Component({
  selector: 'app-consult-info',
  templateUrl: './consult-info.component.html',
  styleUrls: ['./consult-info.component.scss']
})
export class ConsultInfoComponent implements OnInit {
  dateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiConectionService: ApiConexionService
  ) {
    this.dateForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.dateForm.valid) {
      const { startDate, endDate } = this.dateForm.value;

      console.log(startDate, endDate);

      this.apiConectionService.getInfo(startDate, endDate).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
}
