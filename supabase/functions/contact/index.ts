import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, whatsapp, message } = await req.json()

    console.log("[contact] Recebendo nova mensagem:", { name, email })

    const data = await resend.emails.send({
      from: "TechFix <onboarding@resend.dev>", // Altere para seu e-mail verificado depois
      to: ["seu-email@exemplo.com"], // Coloque o e-mail onde quer receber os dados
      subject: `Novo Contato: ${name}`,
      html: `
        <h2>Nova mensagem de contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("[contact] Erro ao enviar e-mail:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})