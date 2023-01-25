interface Address {
  email: string;
  name: string;
}

export interface Message {
  from?: Address;
  to: Address;
  subject: string;
  body: string;
}

export interface MailProvider {
  sendMail(message: Message): Promise<void>;
}
