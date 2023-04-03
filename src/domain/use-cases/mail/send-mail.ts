import { type SendMailDTO } from "@/app/dtos/mail/send-mail.dto";

export interface SendMail {
  execute(data: SendMailDTO): Promise<void>;
}
