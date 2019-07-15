import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import { InvoiceModernModule } from './invoices/modern/modern.module';
import { InvoiceCompactModule } from './invoices/compact/compact.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportingComponent],
  imports: [
    RouterModule,
    CommonModule,
    InvoiceModernModule,
    InvoiceCompactModule
  ]
})
export class ReportingModule { }
