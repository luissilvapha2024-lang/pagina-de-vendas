import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Wrench, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  ClipboardList,
  CheckCircle,
  ArrowRight,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  const features = [
    {
      icon: ClipboardList,
      title: "Ordens de Serviço",
      description: "Gerencie todas as OS com histórico completo e integração WhatsApp"
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de serviços e compras"
    },
    {
      icon: ShoppingCart,
      title: "PDV Integrado",
      description: "Venda produtos e serviços com múltiplas formas de pagamento"
    },
    {
      icon: Wrench,
      title: "Catálogo de Serviços",
      description: "Organize seus serviços com preços e tempo de execução"
    },
    {
      icon: BarChart3,
      title: "Relatórios Completos",
      description: "Acompanhe vendas, lucros e produtividade da equipe"
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Acesse de qualquer dispositivo, em qualquer lugar"
    }
  ];

  const benefits = [
    "Controle total das ordens de serviço",
    "Notificação automática via WhatsApp",
    "Gestão financeira simplificada",
    "Relatórios em tempo real",
    "Múltiplos usuários e permissões",
    "Suporte técnico especializado"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">TechFix</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>
            <Button variant="outline">Entrar</Button>
            <Button>Começar Grátis</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Wrench className="w-4 h-4" />
            Sistema completo para assistência técnica
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Gerencie sua assistência técnica de 
            <span className="text-primary"> celulares</span> com facilidade
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistema completo para controle de ordens de serviço, clientes, vendas e financeiro. 
            Tudo em um só lugar, simples e profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa em um só sistema
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades pensadas especialmente para assistências técnicas de celulares
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher o TechFix?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Desenvolvido por quem entende do ramo, o TechFix oferece todas as ferramentas 
                necessárias para você focar no que realmente importa: atender bem seus clientes.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Preview do Sistema</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar sua assistência?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Comece agora mesmo e veja como é fácil gerenciar seu negócio
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Criar Conta Grátis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">TechFix</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TechFix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
