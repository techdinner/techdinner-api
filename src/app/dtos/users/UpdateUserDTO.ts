export interface UpdateUserDTO {
	name: string;
	email: string;
	password: string;
	active?: boolean;
	role?: number;
}
