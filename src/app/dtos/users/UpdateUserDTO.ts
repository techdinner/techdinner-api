export interface UpdateUserDTO {
	name: string;
	email: string;
	cpf: string;
	phone: number;
	company_id: number;
	photo?: string;
	password?: string;
}
