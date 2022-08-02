INSERT INTO `menus` 
(`id`, `parent_id`, `title`, `meta_title`, `icon`, `link`, `sort`, `is_active`) 
VALUES
(1, 0, 'Dashboard', 'dashboard', 'dashboard', '/', 1, 1),
(2, 0, 'Katalog', 'catalog', 'catalog', '/', 2, 1),
	(3, 2, 'Katagori', 'categories', 'categories', '/catalog/categories', 1, 1),
	(4, 2, 'Produk', 'product', 'product', '/catalog/product', 2, 1)
(5, 0, 'Penjualan', 'sale', 'cart', '/sale', 3, 1),
(6, 0, 'Pembelian', 'purchase', 'cart', '/purchase', 4, 1),
(7, 0, 'Management Stok', 'management-stock', 'management-stock', '/', 5, 1),
	(8, 7, 'Stok barang', 'inventory', 'inventory', 'management-stock/inventory', 1, 1),
	(9, 7, 'Stok opname', 'stock-opname', 'stock-opname', '/management-stock/stock-opname', 2, 1),
(10, 0, 'Diskon & Pajak', 'ddp', 'ddp', '/ddp', 6, 1),
	(11, 10, 'discount', 'discount', 'discount', 'ddp/discount', 1, 1),
	(12, 10, 'Pajak', 'pajak', 'pajak', 'ddp/pajak', 2, 1),
(13, 0, 'Laporan', 'report', 'report', '/report', 7, 1),
(14, 0, 'Setting', 'setting', 'gear', '/', 8, 1),
	(15, 14, 'Menus', 'menus', 'menu', '/setting/menus', 1, 1),
(16, 0, 'Users Management', 'users', 'users', '/', 9, 1),
	(17, 16, 'Users', 'user-management', 'user-management', '/user-management/users', 1, 1),
	(18, 16, 'Roles', 'roles', 'role', '/user-management/roles', 2, 1),
	(19, 16, 'Permissions', 'permissions', 'permissions', '/user-management/permissions', 3, 1),
(20, 0, 'Pelanggan', 'customer', 'customer', '/customer', 10, 1),
(21, 0, 'Supplier', 'supplier', 'customer', '/supplier', 11, 1)
(22, 0, 'Tentang', 'about', 'about', '/about', 99, 1);


INSERT INTO `permissions` (`id`, `name`, `description`, `create_at`, `update_at`) VALUES
('2742cd0f-a508-4e64-9bf8-20280e4bc2e9', 'read', 'read a data', '2022-07-28 08:15:05.329621', '2022-07-28 08:15:05.329621'),
('294a21b1-850f-4dd6-bb1d-adf4570d6e6e', 'create', 'Create a new', '2022-07-28 08:14:35.424130', '2022-07-28 08:14:35.424130'),
('30f9f053-6e2d-4700-a6d9-bf8b7307672c', 'update', 'update a data', '2022-07-28 08:14:51.481120', '2022-07-28 08:14:51.481120'),
('4f31e009-4b71-4297-88b7-14796eb20f6e', 'manage', 'Manage all Resource', '2022-07-28 08:14:11.980135', '2022-07-28 08:14:11.980135'),
('54eebc8d-c4ac-4aa0-8d26-aac9fc3c1c99', 'delete', 'delete a data', '2022-07-28 08:14:59.174809', '2022-07-28 08:14:59.174809');
