export enum Action{
    MANAGE = "manage",
    PRODUCT_READ= "product.read",  
    PRODUCT_CREATE= "product.create",
    PRODUCT_UPDATE= "product.update",
    PRODUCT_DELETE= "product.delete",

    CATEGORY_READ= "category.read",  
    CATEGORY_CREATE= "category.create",
    CATEGORY_UPDATE= "category.update",
    CATEGORY_DELETE= "category.delete",

    CUSTOMER_READ= "customer.read",  
    CUSTOMER_CREATE= "customer.create",
    CUSTOMER_UPDATE= "customer.update",
    CUSTOMER_DELETE= "customer.delete",

    SUPPLEIER_READ= "supplier.read",  
    SUPPLEIER_CREATE= "supplier.create",
    SUPPLEIER_UPDATE= "supplier.update",
    SUPPLEIER_DELETE= "supplier.delete",
    
    ROLES_READ= "roles.read",  
    ROLES_CREATE= "roles.create",
    ROLES_UPDATE= "roles.update",
    ROLES_DELETE= "roles.delete",
    
    PERMISSIONS_READ= "permissions.read",  
    PERMISSIONS_CREATE= "permissions.create",
    PERMISSIONS_UPDATE= "permissions.update",
    PERMISSIONS_DELETE= "permissions.delete",
}

export enum RolesEnum{
    ADMIN = 'Admin',
    KASIR = 'Kasir'
}