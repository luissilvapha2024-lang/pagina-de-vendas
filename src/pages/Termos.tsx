import { Button } from "@/components/ui/button";
import { Smartphone, ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Termos = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight">Tech<span className="text-primary">Fix</span></span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Termos de <span className="text-primary">Uso</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o TechFix, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
                Se você não concordar com qualquer parte destes termos, não deverá usar nosso serviço.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground leading-relaxed">
                O TechFix é uma plataforma de gestão empresarial voltada para assistências técnicas de celulares e eletrônicos. 
                Nosso sistema oferece funcionalidades como:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Gestão de ordens de serviço</li>
                <li>Controle de estoque e inventário</li>
                <li>Gerenciamento de clientes (CRM)</li>
                <li>Ponto de venda (PDV)</li>
                <li>Relatórios e dashboards gerenciais</li>
                <li>Notificações automáticas via WhatsApp</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Cadastro e Conta</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para utilizar o TechFix, você deve criar uma conta fornecendo informações precisas e completas. 
                Você é responsável por manter a confidencialidade de sua senha e por todas as atividades realizadas em sua conta.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em notificar imediatamente o TechFix sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Uso Aceitável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em usar o TechFix apenas para fins legais e de acordo com estes Termos. Você não deve:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Usar o serviço de forma que viole qualquer lei ou regulamento aplicável</li>
                <li>Tentar acessar áreas não autorizadas do sistema</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Interferir ou interromper o funcionamento do serviço</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                O TechFix e todo o seu conteúdo, recursos e funcionalidades são de propriedade exclusiva da TechFix Soluções e 
                estão protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Pagamento e Assinatura</h2>
              <p className="text-muted-foreground leading-relaxed">
                Alguns recursos do TechFix podem exigir uma assinatura paga. Os preços e condições de pagamento serão 
                claramente comunicados antes da contratação. Você concorda em pagar todas as taxas aplicáveis de acordo 
                com os termos de pagamento em vigor no momento da compra.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                O TechFix é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, 
                seguro ou livre de erros. Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, 
                especiais ou consequentes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos sobre alterações significativas 
                através do email cadastrado ou por meio de aviso em nosso site. O uso continuado do serviço após as modificações 
                constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Rescisão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos suspender ou encerrar seu acesso ao TechFix a qualquer momento, sem aviso prévio, se você violar 
                estes Termos de Uso. Você pode encerrar sua conta a qualquer momento entrando em contato com nosso suporte.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Legislação Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. 
                Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo email: 
                <a href="mailto:contato@techfix.com.br" className="text-primary hover:underline ml-1">contato@techfix.com.br</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-80">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">TechFix</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 TechFix Soluções. Made for professionals.</p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Termos;
