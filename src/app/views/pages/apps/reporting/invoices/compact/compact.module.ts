import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from '../../invoices/invoice.service';
import { InvoiceCompactComponent } from '../../invoices/compact/compact.component';
import { CommonModule } from '@angular/common';
const routes = [
    {
        path     : 'compact',
        component: InvoiceCompactComponent,
        // resolve  : {
        //     search: InvoiceService
        // }
    }
];

@NgModule({
    declarations: [
        InvoiceCompactComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        CommonModule
        // FuseSharedModule
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceCompactModule
{
}
