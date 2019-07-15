import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from '../../invoices/invoice.service';
import { InvoiceModernComponent } from '../../invoices/modern/modern.component';

const routes = [
    {
        path     : 'orders-report',
        component: InvoiceModernComponent,
        // resolve  : {
        //     search: InvoiceService
        // }
    },
    {
        path     : 'products-report',
        component: InvoiceModernComponent,
        // resolve  : {
        //     search: InvoiceService
        // }
    },
    {
        path     : 'suppliers-report',
        component: InvoiceModernComponent,
        // resolve  : {
        //     search: InvoiceService
        // }
    }
];

@NgModule({
    declarations: [
        InvoiceModernComponent
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
export class InvoiceModernModule
{
}
