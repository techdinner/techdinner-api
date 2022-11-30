export interface CreateUserDTO {
  name: string;
  email: string;
  cpf: string;
  phone: number;
  companyId: number;
  photo?: string;
}
