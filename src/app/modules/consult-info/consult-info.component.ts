import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from 'src/app/core/models/invoiceModel';
import { ApiConexionService } from 'src/app/core/services/api-conexion.service';

@Component({
  selector: 'app-consult-info',
  templateUrl: './consult-info.component.html',
  styleUrls: ['./consult-info.component.scss']
})
export class ConsultInfoComponent implements OnInit {
  dateForm: FormGroup;
  invoices: Invoice[] = [];

  currentPage = 1;
  itemsPerPage = 15;
  pagedInvoices: Invoice[] = [];
  totalPages!: number;

  filters = {
    id: ''
  };

  constructor(
    private fb: FormBuilder,
    private apiConectionService: ApiConexionService
  ) {
    this.dateForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, { validator: this.dateValidator });

    this.setPage(1);
  }

  ngOnInit(): void {
  }

  //HTTP Request Function
  onSubmit() {
    if (this.dateForm.valid) {
      const { startDate, endDate } = this.dateForm.value;
      this.apiConectionService.getInfo(startDate, endDate).subscribe({
        next: response => {
          this.invoices = response;
          this.setPage(1);
        },
        error: error => {
          window.alert("No hay información para mostrar en ese rango de fechas.");
        }
      });
    }else {
      this.dateForm.markAllAsTouched();
    }
  }

  //Pagination Functions
  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.invoices.length);
  
    let filteredInvoices = this.invoices.filter(invoice =>
      invoice.id.toString().includes(this.filters.id)
    );
  
    this.pagedInvoices = filteredInvoices.slice(startIndex, endIndex);
  
    this.totalPages = Math.ceil(filteredInvoices.length / this.itemsPerPage);
  }

  //Validation Functions
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;
  
    if (startDate && endDate && startDate > endDate) {
      return { 'invalidDateRange': true };
    }
  
    return null;
  }

}
