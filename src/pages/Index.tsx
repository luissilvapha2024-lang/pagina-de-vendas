import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Smartphone, 
  Wrench, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  ClipboardList,
  CheckCircle,
  Star,
  Quote,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Autoplay from "embla-carousel-autoplay";
import ContactForm from "@/components/ContactForm"; // Import the new ContactForm component

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  // Calendly logic removed as it's replaced by the contact form

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

  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      city: "São Paulo, SP",
      content: "Antes do TechFix, eu perdia muito tempo procurando papéis e anotações. Agora tenho tudo organizado e meus clientes recebem atualizações automáticas pelo WhatsApp. Minha produtividade aumentou demais!",
      rating: 5
    },
    {
      name: "Amanda Rodrigues",
      city: "Belo Horizonte, MG",
      content: "O sistema é muito intuitivo. Em uma semana toda minha equipe já estava usando sem dificuldades. Os relatórios me ajudam a entender melhor o desempenho da loja.",
      rating: 5
    },
    {
      name: "Roberto Nascimento",
      city: "Curitiba, PR",
      content: "Trabalho sozinho e o TechFix me ajuda a manter tudo sob controle. O PDV integrado facilita muito na hora de vender acessórios junto com o serviço.",
      rating: 5
    },
    {
      name: "Fernanda Costa",
      city: "Recife, PE",
      content: "Temos 3 lojas e o controle financeiro era um pesadelo. Com o TechFix conseguimos ver tudo em tempo real. O suporte também é excelente, sempre respondem rápido.",
      rating: 5
    },
    {
      name: "Marcelo Almeida",
      city: "Porto Alegre, RS",
      content: "Já testei outros sistemas, mas o TechFix é de longe o mais completo para assistência técnica. A integração com WhatsApp é um diferencial enorme.",
      rating: 5
    },
    {
      name: "Juliana Pereira",
      city: "Goiânia, GO",
      content: "Nossos clientes elogiam muito as notificações automáticas. Eles se sentem mais seguros sabendo exatamente como está o reparo do aparelho.",
      rating: 4
    }
  ];

  const faqs = [
    {
      question: "O TechFix funciona offline?",
      answer: "O TechFix é um sistema web e requer conexão com a internet para funcionar. Porém, estamos desenvolvendo um modo offline para consultas básicas que será lançado em breve."
    },
    {
      question: "Posso usar em mais de um computador?",
      answer: "Sim! O TechFix é 100% na nuvem, então você pode acessar de qualquer dispositivo com internet. Basta fazer login com sua conta e seus dados estarão lá."
    },
    {
      question: "Como funciona a integração com WhatsApp?",
      answer: "O sistema gera links automáticos para enviar mensagens aos clientes sobre o status da OS. Basta clicar no botão de WhatsApp e a mensagem já vai preenchida com as informações do serviço."
    },
    {
      question: "Existe limite de ordens de serviço?",
      answer: "Não há limite! Você pode cadastrar quantas ordens de serviço precisar, independente do plano escolhido."
    },
    {
      question: "Posso cadastrar mais de um usuário?",
      answer: "Sim, você pode adicionar técnicos, atendentes e outros colaboradores com permissões personalizadas para cada função."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte via chat e e-mail em horário comercial. Clientes do plano Pro têm acesso a suporte prioritário com resposta em até 2 horas."
    },
    {
      question: "Posso importar dados de outro sistema?",
      answer: "Sim! Nossa equipe pode ajudar na migração dos seus dados de clientes e histórico de serviços. Entre em contato conosco para saber mais."
    },
    {
      question: "O sistema emite nota fiscal?",
      answer: "Atualmente o TechFix não emite nota fiscal diretamente, mas você pode exportar os dados de vendas para integrar com seu sistema de emissão de NF."
    }
  ];

  const screenshots = [
    { src: "/screenshot-dashboard.png", alt: "Dashboard do sistema TechFix com visão geral" },
    { src: "/screenshot-orders.png", alt: "Tela de Ordens de Serviço do sistema TechFix" },
    { src: "/screenshot-pdv.png", alt: "Tela de Checkout PDV do sistema TechFix" },
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
          
          <Button size="lg" className="gradient-primary shadow-lg hover:shadow-glow transition-all duration-300">
            Começar Agora
          </Button>
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
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full rounded-2xl overflow-hidden border border-border/50 shadow-lg"
              >
                <CarouselContent>
                  {screenshots.map((screenshot, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-auto object-cover rounded-2xl"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Preencha o formulário abaixo e nossa equipe entrará em contato para tirar suas dúvidas e ajudar você a começar!
          </p>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mais de 500 assistências técnicas já transformaram seus negócios com o TechFix
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      
                      <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating 
                                ? "text-yellow-500 fill-yellow-500" 
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          📍 {testimonial.city}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o TechFix
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para transformar sua assistência?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo a organizar seu negócio com o TechFix!
          </p>
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