import {
  ClipboardList,
  Clock,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { StatCard } from '@/components/ui/stat-card';
import { mockDashboardData, mockOrdensServico, statusConfig } from '@/data/mockData';
import { StatusBadge } from '@/components/ui/status-badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Dashboard() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral da sua assistência técnica</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard
          title="OS em Andamento"
          value={mockDashboardData.osEmAndamento}
          icon={ClipboardList}
          variant="primary"
        />
        <StatCard
          title="Aguardando Autorização"
          value={mockDashboardData.osAguardandoAutorizacao}
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Concluídas Hoje"
          value={mockDashboardData.osConcluidasHoje}
          icon={CheckCircle2}
          variant="success"
        />
        <StatCard
          title="Faturamento Hoje"
          value={formatCurrency(mockDashboardData.faturamentoDia)}
          icon={DollarSign}
          variant="info"
        />
        <StatCard
          title="Faturamento Mês"
          value={formatCurrency(mockDashboardData.faturamentoMes)}
          icon={TrendingUp}
          variant="primary"
        />
        <StatCard
          title="Lucro Estimado"
          value={formatCurrency(mockDashboardData.lucroEstimado)}
          icon={Wallet}
          variant="success"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas por Dia */}
        <div className="bg-card rounded-xl border p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Vendas por Dia</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockDashboardData.vendasPorDia}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="dia" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [formatCurrency(value), 'Valor']}
                />
                <Bar dataKey="valor" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status das OS */}
        <div className="bg-card rounded-xl border p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Status das Ordens</h3>
          <div className="h-64 flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockDashboardData.statusOS}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="quantidade"
                  label={({ status, quantidade }) => `${status}: ${quantidade}`}
                  labelLine={false}
                >
                  {mockDashboardData.statusOS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Serviços mais realizados */}
        <div className="bg-card rounded-xl border p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Serviços Mais Realizados</h3>
          <div className="space-y-4">
            {mockDashboardData.servicosMaisRealizados.map((servico, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-foreground">{servico.nome}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(servico.quantidade / 45) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{servico.quantidade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Últimas OS */}
        <div className="bg-card rounded-xl border p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4">Últimas Ordens de Serviço</h3>
          <div className="space-y-3">
            {mockOrdensServico.slice(0, 5).map((os) => (
              <div
                key={os.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-primary">{os.id}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{os.cliente.nome}</p>
                    <p className="text-xs text-muted-foreground">{os.aparelho}</p>
                  </div>
                </div>
                <StatusBadge status={os.status} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
