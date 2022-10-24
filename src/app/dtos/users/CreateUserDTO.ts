export interface CreateUserDTO {
	name: string;
	email: string;
	cpf: string;
	phone: number;
	company_id: number;
	photo?: string;
}
