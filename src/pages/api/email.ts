// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getEmailContent } from '@/utils';
import { SMTPClient } from 'emailjs';




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {email, subject, body, name, mobile}=req.body;
  
  
  const client = new SMTPClient({
    user:  "support@arcompsol.com",
    password: "helloesk",
    host: 'mail.privateemail.com',
    port: 465,
    ssl:true
  });
  
  try {

    const response = await client.sendAsync({
      'content-type':  'text/html; charset=utf-8',
      text: getEmailContent(name, mobile, body),
      from: "support@arcompsol.com" || '',
      to: ["support@arcompsol.com", email],
      subject: `${subject} - Contact Form Submission`,
    });
    
    
    res.status(200).json({ message: response});
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
