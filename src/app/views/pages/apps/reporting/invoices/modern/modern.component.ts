import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InvoiceService } from '../../invoices/invoice.service';

@Component({
    selector     : 'invoice-modern',
    templateUrl  : './modern.component.html',
    styleUrls    : ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InvoiceModernComponent implements OnInit, OnDestroy
{
    invoice: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {InvoiceService} _invoiceService
     */
    constructor(
        private _invoiceService: InvoiceService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // this._invoiceService.invoiceOnChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((invoice) => {
        //         this.invoice = invoice;
        //     });
        this.invoice = {
            'from'    : {
                'title'  : 'MM-TECH Solutions',
                'address': 'No 39, San Chaung',
                'phone'  : '+95 91234567',
                'email'  : 'hello@mail.com',
                'website': 'www.mmtech.com'
            },
            'client'  : {
                'title'  : 'U Ba Gyi',
                'address': 'No 456, Kyi Myint Taing',
                'phone'  : '+959 1234567',
                'email'  : 'ubagyi@mail.com'
            },
            'number'  : 'P9-0004',
            'date'    : 'Jul 19, 2018',
            'dueDate' : 'Aug 24, 2018',
            'services': [
                {
                    'title'    : 'Prototype & Design',
                    'detail'   : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan, quam sed eleifend imperdiet.',
                    'unit'     : 'Hour',
                    'unitPrice': '12.00',
                    'quantity' : '240',
                    'total'    : '2880'
                },
                {
                    'title'    : 'Coding',
                    'detail'   : 'Vestibulum ligula sem, rutrum et libero id, porta vehicula metus. Cras dapibus neque sit amet laoreet vestibulum.',
                    'unit'     : 'Hour',
                    'unitPrice': '10.50',
                    'quantity' : '350',
                    'total'    : '3675'
                },
                {
                    'title'    : 'Testing',
                    'detail'   : 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                    'unit'     : 'Hour',
                    'unitPrice': '4.00',
                    'quantity' : '50',
                    'total'    : '200'
                },
                {
                    'title'    : 'Documentation & Training',
                    'detail'   : 'Pellentesque luctus efficitur neque in finibus. Integer ut nunc in augue maximus porttitor id id nulla. In vitae erat.',
                    'unit'     : 'Hour',
                    'unitPrice': '6.50',
                    'quantity' : '260',
                    'total'    : '1690'
                }
            ],
            'subtotal': '8445',
            'tax'     : '675.60',
            'discount': '120.60',
            'total'   : '9000'
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
