import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Smartphone, 
  Users, 
  BarChart3, 
  ShoppingCart, 
  ClipboardList,
  CheckCircle,
  Star,
  Quote,
  Moon,
  Sun,
  ArrowRight,
  Zap,
  ShieldCheck,
  Clock,
  Maximize2
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  const localImages = [
    { url: "/imagens/2.png", alt: "TechFix Dashboard" },
    { url: "/imagens/3.png", alt: "TechFix Gestão" }
  ];

  const features = [
    {
      icon: ClipboardList,
      title: "Ordens de Serviço Inteligentes",
      description: "Acompanhe o status em tempo real com notificações automáticas para seus clientes via WhatsApp."
    },
    {
      icon: Users,
      title: "CRM Especializado",
      description: "Histórico completo de cada cliente, aparelhos e serviços realizados, facilitando o retorno."
    },
    {
      icon: ShoppingCart,
      title: "PDV de Alta Performance",
      description: "Venda acessórios e serviços em segundos. Integrado com controle de estoque e financeiro."
    },
    {
      icon: BarChart3,
      title: "Dashboard de Gestão",
      description: "Visualize seus lucros, produtividade da equipe e metas em um painel intuitivo e poderoso."
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Dados",
      description: "Seus dados protegidos na nuvem com backups automáticos diários. Sua loja sempre segura."
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize processos repetitivos e ganhe até 10 horas semanais para focar no que importa."
    }
  ];

  const faqs = [
    {
      question: "O sistema é fácil de usar?",
      answer: "Sim! O TechFix foi desenhado para ser intuitivo. Em menos de 30 minutos você e sua equipe estarão dominando todas as funções básicas."
    },
    {
      question: "Preciso instalar algo no meu computador?",
      answer: "Não. O TechFix é 100% online. Você acessa pelo navegador de qualquer computador, tablet ou celular com internet."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Temos uma equipe de especialistas pronta para te ajudar via WhatsApp e Chat de segunda a sexta, das 09h às 18h."
    }
  ];

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Dono de Assistência",
      content: "O TechFix mudou o patamar da minha loja. Hoje não perco mais OS e o controle financeiro é impecável.",
      rating: 5
    },
    {
      name: "Bruna Oliveira",
      role: "Técnica Senior",
      content: "A organização das peças e serviços é sensacional. O sistema é leve e nunca me deixa na mão.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Header Moderno */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight">Tech<span className="text-primary">Fix</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-primary transition-colors">Dúvidas</a>
          </nav>

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

      {/* Hero Section Revamp */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Líder em Gestão para Assistências
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              Sua Loja em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                outro nível.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              O sistema mais completo e intuitivo do Brasil para gerenciar sua assistência técnica de celulares e eletrônicos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-bold gradient-primary shadow-xl hover:shadow-glow transition-all group" asChild>
                <a href="https://user.techfixapp.com.br/cadastro" target="_blank" rel="noopener noreferrer">
                  Começar agora grátis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl text-lg font-bold border-2" asChild>
                <a href="#demonstracao">
                  Ver demonstração
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    U{i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">+500 lojistas</span> já confiam no TechFix
              </p>
            </div>
          </div>

          <div className="relative group animate-slide-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img 
                src="/imagens/2.png" 
                alt="TechFix Interface" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            {/* Elemento flutuante de OS */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs font-bold">OS #2458 Finalizada</p>
                  <p className="text-[10px] text-muted-foreground">Cliente notificado via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Carousel Section */}
      <section id="funcionalidades" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Potencialize cada centímetro do seu negócio</h2>
            <p className="text-muted-foreground text-lg">Desenvolvemos as ferramentas exatas que uma assistência precisa para escalar com organização.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur shadow-sm hover:shadow-md">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="demonstracao" className="mt-24 max-w-5xl mx-auto scroll-mt-24">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 4000 })]}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50"
            >
              <CarouselContent>
                {localImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video relative overflow-hidden bg-muted cursor-zoom-in group/img">
                          <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100">
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                              <Maximize2 className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12 pointer-events-none">
                            <p className="text-white font-bold text-2xl">{img.alt}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden border-none bg-transparent shadow-none">
                        <img 
                          src={img.url} 
                          alt={img.alt} 
                          className="w-full h-full object-contain rounded-lg shadow-2xl animate-scale-in" 
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-6" />
              <CarouselNext className="right-6" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight">O que dizem os <br /><span className="text-primary">especialistas?</span></h2>
              <p className="text-muted-foreground">Quem vive o dia a dia da bancada sabe a diferença que uma boa ferramenta faz.</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-sm font-bold">Nota 4.9/5 em satisfação</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <Card key={i} className="bg-muted/30 border-none">
                  <CardContent className="p-8 space-y-4">
                    <Quote className="text-primary/20 w-10 h-10" />
                    <p className="italic text-muted-foreground">"{t.content}"</p>
                    <div className="pt-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-bold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-8 text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Dúvidas frequentes</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber sobre o TechFix.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Minimalista */}
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

export default Index;