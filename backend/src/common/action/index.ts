export enum Action{
    MANAGE = "manage",

    CATEGORY_READ= "category.read",
    CATEGORY_CREATE= "category.create",
    CATEGORY_UPDATE= "category.update",
    CATEGORY_DELETE= "category.delete",

    CUSTOMER_READ= "customer.read",
    CUSTOMER_CREATE= "customer.create",
    CUSTOMER_UPDATE= "customer.update",
    CUSTOMER_DELETE= "customer.delete",

	MENU_READ= "menu.read",
    MENU_CREATE= "menu.create",
    MENU_UPDATE= "menu.update",
    MENU_DELETE= "menu.delete",

    PERMISSIONS_READ= "permissions.read",
    PERMISSIONS_CREATE= "permissions.create",
    PERMISSIONS_UPDATE= "permissions.update",
    PERMISSIONS_DELETE= "permissions.delete",

	PRODUCT_READ= "product.read",
	PRODUCT_CREATE= "product.create",
	PRODUCT_UPDATE= "product.update",
	PRODUCT_DELETE= "product.delete",

	ROLES_READ= "roles.read",
	ROLES_CREATE= "roles.create",
	ROLES_UPDATE= "roles.update",
	ROLES_DELETE= "roles.delete",

	SUPPLIER_READ= "supplier.read",
	SUPPLIER_CREATE= "supplier.create",
	SUPPLIER_UPDATE= "supplier.update",
	SUPPLIER_DELETE= "supplier.delete",

}

export enum RolesEnum{
    ADMIN = 'Admin',
    KASIR = 'Kasir'
}
