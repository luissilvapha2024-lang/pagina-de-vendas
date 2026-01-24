import { useState } from 'react';
import {
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockTransacoes } from '@/data/mockData';
import { StatCard } from '@/components/ui/stat-card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Financeiro() {
  const [transacoes, setTransacoes] = useState(mockTransacoes);
  const [filterType, setFilterType] = useState<string>('todos');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    tipo: 'entrada',
    categoria: '',
    descricao: '',
    valor: '',
    formaPagamento: '',
  });

  const entradas = transacoes.filter((t) => t.tipo === 'entrada').reduce((acc, t) => acc + t.valor, 0);
  const saidas = transacoes.filter((t) => t.tipo === 'saida').reduce((acc, t) => acc + t.valor, 0);
  const saldo = entradas - saidas;

  const filteredTransacoes = transacoes.filter((t) =>
    filterType === 'todos' ? true : t.tipo === filterType
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransacao = {
      id: String(transacoes.length + 1),
      tipo: formData.tipo as 'entrada' | 'saida',
      categoria: formData.categoria,
      descricao: formData.descricao,
      valor: parseFloat(formData.valor),
      data: new Date().toISOString().split('T')[0],
      formaPagamento: formData.formaPagamento,
    };
    setTransacoes([newTransacao, ...transacoes]);
    setFormData({ tipo: 'entrada', categoria: '', descricao: '', valor: '', formaPagamento: '' });
    setIsDialogOpen(false);
    toast({
      title: 'Lançamento registrado',
      description: `${formData.tipo === 'entrada' ? 'Entrada' : 'Saída'} de ${formatCurrency(parseFloat(formData.valor))} registrada.`,
    });
  };

  // Mock chart data
  const chartData = [
    { mes: 'Jan', entradas: 8500, saidas: 4200 },
    { mes: 'Fev', entradas: 9200, saidas: 4800 },
    { mes: 'Mar', entradas: 7800, saidas: 3900 },
    { mes: 'Abr', entradas: 10500, saidas: 5200 },
    { mes: 'Mai', entradas: 11200, saidas: 4600 },
    { mes: 'Jun', entradas: 9800, saidas: 5100 },
  ];

  const categoriasEntrada = ['Serviço', 'Venda', 'Outros'];
  const categoriasSaida = ['Peças', 'Aluguel', 'Luz', 'Água', 'Internet', 'Salários', 'Outros'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Financeiro</h1>
          <p className="text-muted-foreground">Controle de entradas e saídas</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Lançamento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Lançamento</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Tipo</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={formData.tipo === 'entrada' ? 'default' : 'outline'}
                    className={cn(formData.tipo === 'entrada' && 'bg-success hover:bg-success/90')}
                    onClick={() => setFormData({ ...formData, tipo: 'entrada', categoria: '' })}
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Entrada
                  </Button>
                  <Button
                    type="button"
                    variant={formData.tipo === 'saida' ? 'default' : 'outline'}
                    className={cn(formData.tipo === 'saida' && 'bg-destructive hover:bg-destructive/90')}
                    onClick={() => setFormData({ ...formData, tipo: 'saida', categoria: '' })}
                  >
                    <ArrowDownRight className="w-4 h-4 mr-2" />
                    Saída
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select
                  value={formData.categoria}
                  onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {(formData.tipo === 'entrada' ? categoriasEntrada : categoriasSaida).map(
                      (cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Input
                  id="descricao"
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor (R$)</Label>
                  <Input
                    id="valor"
                    type="number"
                    step="0.01"
                    value={formData.valor}
                    onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Forma de pagamento</Label>
                  <Select
                    value={formData.formaPagamento}
                    onValueChange={(value) => setFormData({ ...formData, formaPagamento: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                      <SelectItem value="PIX">PIX</SelectItem>
                      <SelectItem value="Cartão Crédito">Cartão Crédito</SelectItem>
                      <SelectItem value="Cartão Débito">Cartão Débito</SelectItem>
                      <SelectItem value="Boleto">Boleto</SelectItem>
                      <SelectItem value="Débito Automático">Débito Automático</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Entradas"
          value={formatCurrency(entradas)}
          icon={TrendingUp}
          variant="success"
        />
        <StatCard
          title="Saídas"
          value={formatCurrency(saidas)}
          icon={TrendingDown}
          variant="warning"
        />
        <StatCard
          title="Saldo"
          value={formatCurrency(saldo)}
          icon={Wallet}
          variant={saldo >= 0 ? 'primary' : 'warning'}
        />
      </div>

      {/* Chart */}
      <div className="bg-card rounded-xl border p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground mb-4">Fluxo de Caixa</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorEntradas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSaidas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => formatCurrency(value)}
              />
              <Area
                type="monotone"
                dataKey="entradas"
                stroke="hsl(var(--success))"
                fillOpacity={1}
                fill="url(#colorEntradas)"
                name="Entradas"
              />
              <Area
                type="monotone"
                dataKey="saidas"
                stroke="hsl(var(--destructive))"
                fillOpacity={1}
                fill="url(#colorSaidas)"
                name="Saídas"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-card rounded-xl border shadow-soft overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Últimas Transações</h3>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="entrada">Entradas</SelectItem>
              <SelectItem value="saida">Saídas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="divide-y">
          {filteredTransacoes.map((transacao) => (
            <div
              key={transacao.id}
              className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center',
                    transacao.tipo === 'entrada'
                      ? 'bg-success/10 text-success'
                      : 'bg-destructive/10 text-destructive'
                  )}
                >
                  {transacao.tipo === 'entrada' ? (
                    <ArrowUpRight className="w-5 h-5" />
                  ) : (
                    <ArrowDownRight className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{transacao.descricao}</p>
                  <p className="text-sm text-muted-foreground">
                    {transacao.categoria} • {transacao.formaPagamento}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={cn(
                    'font-semibold',
                    transacao.tipo === 'entrada' ? 'text-success' : 'text-destructive'
                  )}
                >
                  {transacao.tipo === 'entrada' ? '+' : '-'}
                  {formatCurrency(transacao.valor)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transacao.data).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
