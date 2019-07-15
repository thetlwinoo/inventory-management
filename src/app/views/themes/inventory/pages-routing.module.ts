// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './base/base.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
// Auth
import { AuthGuard } from '../../../core/auth';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'store-management',
				loadChildren: () => import('app/views/pages/apps/store-management/store-management.module').then(m => m.StoreManagementModule),
			},
			{
				path: 'reports',
				loadChildren: () => import('app/views/pages/apps/reporting/reporting.module').then(m => m.ReportingModule),
			},
			{
				path: 'user-management',
				loadChildren: () => import('app/views/pages/user-management/user-management.module').then(m => m.UserManagementModule)
			},
			{
				path: 'builder',
				loadChildren: () => import('app/views/themes/inventory/content/builder/builder.module').then(m => m.BuilderModule)
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
