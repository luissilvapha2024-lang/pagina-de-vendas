import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import * as z from 'zod';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema for validating incoming request body
const contactFormSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  whatsapp: z.string().optional(),
  email: z.string().email("Por favor, insira um e-mail válido."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export default async function (request: VercelRequest, response: VercelResponse) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Validate the request body using Zod
    const validatedData = contactFormSchema.parse(request.body);
    const { name, whatsapp, email, message } = validatedData;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'TechFix Contato <onboarding@resend.dev>', // Replace with your verified domain
      to: 'seu-email@exemplo.com', // Replace with the recipient email address
      subject: `Nova mensagem de contato de ${name} - TechFix`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${whatsapp ? `<p><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return response.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
    }

    return response.status(200).json({ message: 'Mensagem enviada com sucesso!', data });
  } catch (error: any) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return response.status(400).json({ message: 'Dados de entrada inválidos.', errors: error.errors });
    }
    // Handle other unexpected errors
    console.error('Server error:', error);
    return response.status(500).json({ message: 'Ocorreu um erro interno no servidor.' });
  }
}