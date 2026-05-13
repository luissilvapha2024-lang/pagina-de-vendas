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
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

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
    },
    {
      question: "O TechFix é seguro para os dados dos meus clientes?",
      answer: "Sim. Todos os dados ficam armazenados na nuvem com backup automático diário. Você não perde nada se o computador pifar."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, sem multa e sem burocracia. Você fica porque quer, não porque é obrigado."
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
            <Button variant="ghost" className="rounded-full font-semibold" asChild>
              <a href="https://user.techfixapp.com.br/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
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
          <motion.div
            className="text-left space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideRight}
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Líder em Gestão para Assistências
            </motion.div>
            
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              Sua Assistência Técnica em <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                outro nível.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} custom={2} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              O sistema mais completo e intuitivo para gerenciar ordens de serviço, estoque, financeiro e atendimento, tudo em um lugar só. Direto no navegador, sem instalação.
            </motion.p>
            
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-bold gradient-primary shadow-xl hover:shadow-glow transition-all group" asChild>
                <a href="https://user.techfixapp.com.br/cadastro" target="_blank" rel="noopener noreferrer">
                  Começar grátis agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl text-lg font-bold border-2" asChild>
                <a href="#como-funciona">
                  Ver como funciona ↓
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeUp} custom={4} className="flex items-center gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-sm">
                <span>🚀</span>
                <p className="text-foreground/90">
                  <span className="font-bold">Vagas abertas para acesso antecipado gratuito.</span>{" "}
                  <span className="text-muted-foreground">Sem cartão de crédito.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img 
                src="/imagens/2.png" 
                alt="TechFix Interface" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            {/* Elemento flutuante de OS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs font-bold">OS #2458 Finalizada</p>
                  <p className="text-[10px] text-muted-foreground">Cliente notificado via WhatsApp</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Veja o TechFix funcionando na prática</h2>
            <p className="text-muted-foreground text-lg">
              Em poucos minutos você entende como organizar sua assistência técnica, controlar ordens de serviço e acompanhar seu faturamento.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleUp}
            className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card aspect-video"
          >
            <img
              src="/imagens/2.png"
              alt="Demonstração do TechFix"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Carousel Section */}
      <section id="funcionalidades" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Potencialize cada centímetro do seu negócio</h2>
            <p className="text-muted-foreground text-lg">Desenvolvemos as ferramentas exatas que uma assistência precisa para escalar com organização.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleUp}
                custom={index}
              >
                <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur shadow-sm hover:shadow-md h-full">
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
              </motion.div>
            ))}
          </div>

          <motion.div
            id="demonstracao"
            className="mt-24 max-w-5xl mx-auto scroll-mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Feito para quem vive na <span className="text-primary">bancada</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O TechFix foi criado por quem entende o dia a dia de uma assistência técnica. Cada funcionalidade resolve um problema real: OS perdida, peça sem controle, cliente sem atualização do aparelho e caixa fechado sem saber se realmente teve lucro.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-left">
              {[
                { icon: ClipboardList, label: "Nenhuma OS perdida" },
                { icon: ShoppingCart, label: "Estoque sob controle" },
                { icon: Users, label: "Cliente sempre informado" },
                { icon: BarChart3, label: "Lucro real na palma da mão" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={scaleUp}
                  custom={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground pt-4">
              Você não precisa confiar na nossa palavra. Teste grátis e veja por conta própria.
            </p>

            <div className="pt-2">
              <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-bold gradient-primary shadow-xl hover:shadow-glow transition-all group" asChild>
                <a href="https://user.techfixapp.com.br/cadastro" target="_blank" rel="noopener noreferrer">
                  Começar grátis agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            className="space-y-8 text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-extrabold tracking-tight">Dúvidas frequentes</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber sobre o TechFix.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <motion.footer
        className="py-12 border-t border-border/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-80">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">TechFix</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 TechFix Soluções. Made for professionals.</p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
