import nodemailer from 'nodemailer';

// testAccount {
//   user: 'trotq5elkankoszw@ethereal.email',
//   pass: 'gVzYGH3jmyW6QpeXxc',
//   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//   web: 'https://ethereal.email'
// }

export const sendEmail = async (
  from: string,
  to: string,
  subject: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'trotq5elkankoszw@ethereal.email',
      pass: 'gVzYGH3jmyW6QpeXxc',
    },
  });

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  console.log('Message sent: %s', info.messageId);
};
