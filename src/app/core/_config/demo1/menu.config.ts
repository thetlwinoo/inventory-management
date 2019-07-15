export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Products',
					root: true,
					alignment: 'left',
					page: 'store-management/products',
					translate: 'MENU.PRODUCTS',				
				},
				{
					title: 'Inventory',
					root: true,
					alignment: 'left',
					page: 'store-management/inventory',
					translate: 'MENU.INVENTORY',
				},
				{
					title: 'Orders',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Purchase Orders',
							bullet: 'dot',
							icon: 'flaticon-business',
							permission: 'accessToECommerceModule',
							page: 'store-management/purchase-orders'						
						},
						{
							title: 'Sales Orders',
							bullet: 'dot',
							icon: 'flaticon-business',
							permission: 'accessToECommerceModule',
							page: 'store-management/sales-orders'							
						},
						
					]
				},
				{
					title: 'Settings',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [						
						{
							title: 'User Management',
							bullet: 'dot',
							icon: 'flaticon-user',
							submenu: [
								{
									title: 'Users',
									page: 'user-management/users'
								},
								{
									title: 'Roles',
									page: 'user-management/roles'
								}
							]
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Products',
					root: false,
					icon: 'flaticon-business',
					page: 'store-management/products',
					bullet: 'dot',
					translate: 'MENU.PRODUCTS'
				},
				{
					title: 'Inventory',
					root: false,
					icon: 'flaticon2-digital-marketing',
					page: 'store-management/inventory',
					bullet: 'dot',
					translate: 'MENU.INVENTORY'
				},
				{section: 'Orders'},
				{
					title: 'Purchase Orders',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: 'store-management/purchase-orders'					
				},
				{
					title: 'Sales Orders',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-browser-2',
					page: 'store-management/sales-orders'					
				},
				{section: 'Configurations'},
				{
					title: 'Serial Numbers',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					permission: 'accessToECommerceModule',
					page: 'store-management/serial-number'				
				},			
				{section: 'Settings'},
				{
					title: 'User Management',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Users',
							page: 'user-management/users'
						},
						{
							title: 'Roles',
							page: 'user-management/roles'
						}
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
