import { Button } from "@/components/ui/button";
import { Smartphone, ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

const Privacidade = () => {
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
            Política de <span className="text-primary">Privacidade</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A TechFix Soluções está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                quando você utiliza nossa plataforma.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e 
                demais legislações aplicáveis.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Dados que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Coletamos diferentes tipos de informações para fornecer e melhorar nosso serviço:
              </p>
              
              <h3 className="text-xl font-semibold mt-6">2.1 Dados Pessoais</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Número de telefone</li>
                <li>CPF/CNPJ</li>
                <li>Endereço comercial</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">2.2 Dados de Uso</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Informações sobre como você usa nossa plataforma</li>
                <li>Histórico de transações e ordens de serviço</li>
                <li>Dados de clientes cadastrados em sua conta</li>
                <li>Registros de acesso e logs do sistema</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">2.3 Dados Técnicos</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Sistema operacional</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Como Usamos seus Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar transações e enviar notificações relacionadas</li>
                <li>Enviar comunicações sobre atualizações e novidades</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou comercializamos seus dados pessoais. Podemos compartilhar suas informações apenas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Com prestadores de serviços:</strong> empresas que nos auxiliam na operação (hospedagem, processamento de pagamentos)</li>
                <li><strong>Por obrigação legal:</strong> quando exigido por lei, ordem judicial ou autoridade competente</li>
                <li><strong>Com seu consentimento:</strong> quando você autoriza expressamente o compartilhamento</li>
                <li><strong>Proteção de direitos:</strong> para proteger os direitos, propriedade ou segurança do TechFix e seus usuários</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Armazenamento e Segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são armazenados em servidores seguros na nuvem, com criptografia de ponta a ponta. 
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Backups automáticos diários</li>
                <li>Controle de acesso baseado em funções</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Autenticação segura e senhas criptografadas</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed">
                De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Confirmação e acesso:</strong> confirmar a existência e acessar seus dados</li>
                <li><strong>Correção:</strong> solicitar a correção de dados incompletos ou desatualizados</li>
                <li><strong>Anonimização ou exclusão:</strong> solicitar a anonimização ou exclusão de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados para outro fornecedor</li>
                <li><strong>Revogação:</strong> revogar o consentimento a qualquer momento</li>
                <li><strong>Informação:</strong> ser informado sobre com quem seus dados foram compartilhados</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através do email: 
                <a href="mailto:privacidade@techfix.com.br" className="text-primary hover:underline ml-1">privacidade@techfix.com.br</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento do site</li>
                <li><strong>Cookies de preferências:</strong> lembram suas configurações e preferências</li>
                <li><strong>Cookies analíticos:</strong> nos ajudam a entender como você usa a plataforma</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, 
                incluindo obrigações legais, contábeis ou de relatório. Após o término da relação contratual, 
                os dados podem ser mantidos por até 5 anos para fins fiscais e legais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Menores de Idade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados pessoais 
                de menores. Se você é pai ou responsável e acredita que seu filho nos forneceu dados pessoais, 
                entre em contato conosco imediatamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">10. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações 
                significativas através do email cadastrado ou por meio de aviso em nossa plataforma. 
                Recomendamos revisar esta política regularmente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">11. Contato e Encarregado de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
              </p>
              <div className="bg-muted/30 p-6 rounded-2xl mt-4 space-y-2">
                <p className="text-muted-foreground"><strong>Email:</strong> <a href="mailto:privacidade@techfix.com.br" className="text-primary hover:underline">privacidade@techfix.com.br</a></p>
                <p className="text-muted-foreground"><strong>Encarregado de Dados (DPO):</strong> dpo@techfix.com.br</p>
                <p className="text-muted-foreground"><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
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

export default Privacidade;
