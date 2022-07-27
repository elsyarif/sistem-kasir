import { Injectable, Logger } from "@nestjs/common"
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

	async findAll(userId: string) {
		return await this.menuRepository.query(
			`select m.* from users_menus um
				left join menus m on um.menu_id = m.id
				where m.is_active = true and um.user_id = ?`,
			[userId]
		)
	}

	async findOne(menuId: number) {}

	async update(id: number, updateDto: UpdateMenuDto) {}

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
}
