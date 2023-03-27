import { createTransport } from "nodemailer";
import type { Transporter } from "nodemailer";
import type { MailProvider, Message } from "@/app/providers/mail.provider";
import { environments } from "@/config/dotenv";

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  MAIL_USERNAME,
  MAIL_EMAIL,
} = environments;

export class MailProviderAdapter implements MailProvider {
  private readonly _transporter: Transporter;

  constructor() {
    this._transporter = createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });
  }

  async sendMail(message: Message): Promise<void> {
    await this._transporter.sendMail({
      from: {
        name: MAIL_USERNAME,
        address: MAIL_EMAIL,
      },
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
