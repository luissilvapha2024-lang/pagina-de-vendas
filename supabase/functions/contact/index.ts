import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, whatsapp, message } = await req.json()

    console.log("[contact] Nova tentativa de contato recebida:", { name, email, whatsapp });

    if (!Deno.env.get("RESEND_API_KEY")) {
      console.warn("[contact] AVISO: RESEND_API_KEY não configurada nos Secrets do Supabase.");
    }

    const data = await resend.emails.send({
      from: "TechFix <onboarding@resend.dev>",
      to: ["seu-email@exemplo.com"], // <-- MUDE PARA SEU E-MAIL AQUI PARA RECEBER O TESTE
      subject: `Novo Contato: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0d9488;">Nova mensagem de contato - TechFix</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || "Não informado"}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    console.log("[contact] Resposta do Resend:", data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("[contact] Erro fatal na função:", error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})