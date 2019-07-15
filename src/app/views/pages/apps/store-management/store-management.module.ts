import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PartialsModule } from '../../../partials/partials.module';
import { FakeApiService } from '../../../../core/_base/layout';
import { ModuleGuard } from '../../../../core/auth';

import {
  customersReducer,
  CustomerEffects,
  CustomersService,
  productsReducer,
  ProductEffects,
  ProductsService,
  productRemarksReducer,
  ProductRemarkEffects,
  ProductRemarksService,
  productSpecificationsReducer,
  ProductSpecificationEffects,
  ProductSpecificationsService
} from '../../../../core/e-commerce';

import {
  HttpUtilsService,
  TypesUtilsService,
  InterceptService,
  LayoutUtilsService
} from '../../../../core/_base/crud';
// Shared
import {
  ActionNotificationComponent,
  DeleteEntityDialogComponent,
  FetchEntityDialogComponent,
  UpdateStatusDialogComponent
} from '../../../partials/content/crud';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatSelectModule,
  MatMenuModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTabsModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatIconModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { environment } from '../../../../../environments/environment';
import { CoreModule } from '../../../../core/core.module';
import { NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { StoreManagementComponent } from './store-management.component';
// Products
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { RemarksListComponent } from './products/_subs/remarks/remarks-list/remarks-list.component';
import { SpecificationsListComponent } from './products/_subs/specifications/specifications-list/specifications-list.component';
import { SpecificationEditDialogComponent } from './products/_subs/specifications/specification-edit/specification-edit-dialog.component';

//Inventory
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory/inventory-edit/inventory-edit.component';

//Purchase Orders
import { PurchaseOrdersListComponent } from './purchase-orders/purchase-orders-list/purchase-orders-list.component';
import { PurchaseOrdersEditComponent } from './purchase-orders/purchase-orders-edit/purchase-orders-edit.component';

//Sales Orders
import { SalesOrdersListComponent } from './sales-orders/sales-orders-list/sales-orders-list.component';
import { SalesOrdersEditComponent } from './sales-orders/sales-orders-edit/sales-orders-edit.component';

//Serial Number
import { SerialNumberListComponent } from './serial-number/serial-number-list/serial-number-list.component';
import { SerialNumberEditComponent } from './serial-number/serial-number-edit/serial-number-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StoreManagementComponent,
    // canActivate: [ModuleGuard],
    // data: { moduleName: 'ecommerce' },
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/add',
        component: ProductEditComponent
      },
      {
        path: 'products/edit',
        component: ProductEditComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'inventory',
        component: InventoryListComponent,
      },
      {
        path: 'inventory/add',
        component: InventoryEditComponent
      },
      {
        path: 'inventory/edit',
        component: InventoryEditComponent
      },
      {
        path: 'inventory/edit/:id',
        component: InventoryEditComponent
      },
      {
        path: 'purchase-orders',
        component: PurchaseOrdersListComponent,
      },
      {
        path: 'purchase-orders/add',
        component: PurchaseOrdersEditComponent
      },
      {
        path: 'purchase-orders/edit',
        component: PurchaseOrdersEditComponent
      },
      {
        path: 'purchase-orders/edit/:id',
        component: PurchaseOrdersEditComponent
      },
      {
        path: 'sales-orders',
        component: SalesOrdersListComponent,
      },
      {
        path: 'sales-orders/add',
        component: SalesOrdersEditComponent
      },
      {
        path: 'sales-orders/edit',
        component: SalesOrdersEditComponent
      },
      {
        path: 'sales-orders/edit/:id',
        component: SalesOrdersEditComponent
      },
      {
        path: 'serial-number',
        component: SerialNumberListComponent,
      },
      {
        path: 'serial-number/add',
        component: SerialNumberEditComponent
      },
      {
        path: 'serial-number/edit',
        component: SerialNumberEditComponent
      },
      {
        path: 'serial-number/edit/:id',
        component: SerialNumberEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    HttpClientModule,
    PartialsModule,
    NgxPermissionsModule.forChild(),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    NgbProgressbarModule,
    environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forFeature(FakeApiService, {
      passThruUnknownUrl: true,
      dataEncapsulation: false
    }) : [],
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductEffects]),
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature([CustomerEffects]),
    StoreModule.forFeature('productRemarks', productRemarksReducer),
    EffectsModule.forFeature([ProductRemarkEffects]),
    StoreModule.forFeature('productSpecifications', productSpecificationsReducer),
    EffectsModule.forFeature([ProductSpecificationEffects]),
  ],
  providers: [
    ModuleGuard,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        panelClass: 'kt-mat-dialog-container__wrapper',
        height: 'auto',
        width: '900px'
      }
    },
    TypesUtilsService,
    LayoutUtilsService,
    HttpUtilsService,
    CustomersService,
    ProductRemarksService,
    ProductSpecificationsService,
    ProductsService,
    TypesUtilsService,
    LayoutUtilsService
  ],
  entryComponents: [
    ActionNotificationComponent,
    DeleteEntityDialogComponent,
    FetchEntityDialogComponent,
    UpdateStatusDialogComponent,
    SpecificationEditDialogComponent
  ],
  declarations: [
    StoreManagementComponent,
    // Products
    ProductsListComponent,
    ProductEditComponent,
    InventoryListComponent,
    InventoryEditComponent,
    PurchaseOrdersListComponent,
    PurchaseOrdersEditComponent,
    SalesOrdersListComponent,
    SalesOrdersEditComponent,
    SerialNumberListComponent,
    SerialNumberEditComponent,
    RemarksListComponent,
    SpecificationsListComponent,
    SpecificationEditDialogComponent
  ]
})
export class StoreManagementModule { }
