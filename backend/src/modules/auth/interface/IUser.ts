
export interface IUser {
	id: string
	name: string
	username: string
	is_active: boolean
	role: string
	access_token?: string
}

export interface IUserLogin extends IUser {}

export interface IUserPayload extends IUser {
	permissions: any
}
