import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class InvoiceService implements Resolve<any>
{
    invoice: any;
    invoiceOnChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.invoiceOnChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        console.log('resolvce')
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getInvoice()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get invoice
     */
    getInvoice(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {
            console.log('invoices')
            this._httpClient.get('api/invoices')
                .subscribe((timeline: any) => {
                    console.log('invoices',timeline)
                    this.invoice = timeline;
                    this.invoiceOnChanged.next(this.invoice);
                    resolve(this.invoice);
                }, reject);
        });
    }
}
