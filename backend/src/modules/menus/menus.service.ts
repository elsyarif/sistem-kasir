import { Injectable, Logger, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Menus } from "@entities/menus.entity"
import { Repository } from "typeorm"
import { CreateMenusDto } from "@modules/menus/dto/create-menu.dto"
import { UpdateMenuDto } from "@modules/menus/dto/update-menu.dto"

@Injectable()
export class MenusService {
	private readonly logger = new Logger(MenusService.name)

	constructor(
		@InjectRepository(Menus)
		private menuRepository: Repository<Menus>
	) {}

	async create(createDto: CreateMenusDto) {
		const menu = new Menus()
		menu.parent_id = createDto.parent_id
		menu.title = createDto.title
		menu.icon = createDto.icon
		menu.link = createDto.link
		menu.is_active = createDto.is_active
		menu.sort = createDto.sort
		menu.assignMetaTitle()

		return await this.menuRepository.save(menu)
	}

	async findAll() {
		return await this.menuRepository.find()
	}

	async findOne(menuId: number) {
		const menu = await this.menuRepository.findOne({
			where: {
				id: menuId
			}
		})

		if (!menu) {
			throw new NotFoundException("menu not found")
		}

		return menu
	}

	async update(id: number, updateDto: UpdateMenuDto) {
		const menu = await this.menuRepository.findOneBy({
			id: id
		})

		this.logger.warn(updateDto.is_active)

		menu.title = updateDto.title || menu.title
		menu.icon = updateDto.icon || menu.icon
		menu.link = updateDto.link || menu.link
		menu.is_active =
			updateDto.is_active !== undefined
				? updateDto.is_active
				: menu.is_active
		menu.sort = updateDto.sort || menu.sort
		menu.assignMetaTitle()

		return await this.menuRepository.save(menu)
	}

	async remove(id: string) {}

	async lastSort(id: number) {
		const sort = await this.menuRepository.query(
			`select coalesce(max(sort) + 1, 1)  as n from menus m where m.parent_id = ?`,
			[id]
		)
		console.log(sort)
		this.logger.verbose(sort.n)
		return sort.n
	}

	async findMenuByUser(userId: string) {
		try {
			const userMenu = await this.menuRepository.query(
				`SELECT m.id, m.parent_id , m.title, m.meta_title, m.icon, m.link, m.sort
					FROM users_menus um
				left Join menus m ON um.menu_id = m.id
				WHERE m.is_active = TRUE
				AND um.user_id = ?
				ORDER BY m.sort`,
				[userId]
			)

			const mainMenu = []
			for (let i = 0; i < userMenu.length; i++) {
				mainMenu[userMenu[i].id] = {
					id: userMenu[i].id,
					parent_id: userMenu[i].parent_id,
					title: userMenu[i].title,
					meta_title: userMenu[i].meta_title,
					icon: userMenu[i].icon,
					link: userMenu[i].link,
					sort: userMenu[i].sort
				}
			}

			return this.menuNode(mainMenu, 0)
		} catch (error) {
			this.logger.error(`findMenuByUser: ${error.message}`)
		}
	}

	async roleMenus(roleId: string) {
		try {
			const userMenus = await this.menuRepository.query(
				`SELECT m.* FROM roles_menus rm
						INNER JOIN menus m on rm.menu_id = m.id
						WHERE m.is_active = TRUE
						 AND rm.role_id = ?
						ORDER BY m.sort `,
				[roleId]
			)

			let mainMenu = []
			for (let i = 0; i < userMenus.length; i++) {
				mainMenu[userMenus[i].id] = {
					id: userMenus[i].id,
					parent_id: userMenus[i].parent_id,
					title: userMenus[i].title,
					meta_title: userMenus[i].meta_title,
					icon: userMenus[i].icon,
					link: userMenus[i].link,
					sort: userMenus[i].sort
				}
			}

			return this.menuNode(mainMenu, 0)
		} catch (error) {
			this.logger.error(`roleMenus: ${error.message}`)
		}
	}

	//TODO: Maping menu berdasarkan parent id dan menjadikan object
	menuNode(menu: any[], parent: number) {
		const mainMenu = []

		for (let i = 1; i < menu.length; i++) {
			if (menu[i] == undefined) {
				i++
			}

			if (menu[i] != undefined && menu[i].parent_id === parent) {
				mainMenu.push({
					id: menu[i].id,
					parent_id: menu[i].parent_id,
					title: menu[i].title,
					meta_title: menu[i].meta_title,
					icon: menu[i].icon,
					link: menu[i].link,
					sort: menu[i].sort,
					sub_menu: this.menuNode(menu, i)
				})
			}
		}

		return mainMenu
	}
}
