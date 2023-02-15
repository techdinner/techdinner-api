export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  companyId: string;
  role: string;
  photo?: string;
  verified?: boolean;
}
