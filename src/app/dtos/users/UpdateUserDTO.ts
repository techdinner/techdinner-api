export interface UpdateUserDTO {
  name: string;
  email: string;
  cpf: string;
  phone: number;
  companyId: number;
  photo?: string;
  password?: string;
}
