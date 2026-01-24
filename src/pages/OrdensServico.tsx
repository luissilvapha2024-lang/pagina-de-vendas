import { useState } from 'react';
import { Plus, Search, MessageCircle, Eye, Edit, Trash2, MoreHorizontal, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockOrdensServico, mockClientes, mockServicos, StatusOS, statusConfig } from '@/data/mockData';
import { StatusBadge } from '@/components/ui/status-badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function OrdensServico() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [ordens, setOrdens] = useState(mockOrdensServico);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOS, setSelectedOS] = useState<typeof mockOrdensServico[0] | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    clienteId: '',
    aparelho: '',
    imei: '',
    defeitoRelatado: '',
    observacoes: '',
    servicoIds: [] as string[],
  });

  const filteredOrdens = ordens.filter((os) => {
    const matchesSearch =
      os.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      os.cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      os.aparelho.toLowerCase().includes(searchTerm.toLowerCase()) ||
      os.imei?.includes(searchTerm);
    const matchesStatus = statusFilter === 'todos' || os.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const generateWhatsAppMessage = (os: typeof mockOrdensServico[0]) => {
    const statusLabel = statusConfig[os.status].label;
    const message = `Olá, ${os.cliente.nome}! 👋\nSeu aparelho ${os.aparelho} está com o status: *${statusLabel}*.\nQualquer dúvida estamos à disposição!`;
    return `https://wa.me/55${os.cliente.telefone}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cliente = mockClientes.find((c) => c.id === formData.clienteId);
    const servicos = mockServicos.filter((s) => formData.servicoIds.includes(s.id));
    const valorEstimado = servicos.reduce((acc, s) => acc + s.valor, 0);

    const newOS = {
      id: `OS-${String(ordens.length + 1).padStart(3, '0')}`,
      cliente: cliente!,
      aparelho: formData.aparelho,
      imei: formData.imei,
      defeitoRelatado: formData.defeitoRelatado,
      observacoes: formData.observacoes,
      servicos: servicos,
      valorEstimado,
      valorFinal: valorEstimado,
      status: 'analise' as StatusOS,
      tecnico: 'Não atribuído',
      dataCriacao: new Date().toISOString().split('T')[0],
      dataAtualizacao: new Date().toISOString().split('T')[0],
      historico: [
        {
          data: new Date().toISOString(),
          usuario: 'Sistema',
          acao: 'OS criada',
          status: 'analise',
        },
      ],
    };

    setOrdens([newOS, ...ordens]);
    setFormData({
      clienteId: '',
      aparelho: '',
      imei: '',
      defeitoRelatado: '',
      observacoes: '',
      servicoIds: [],
    });
    setIsDialogOpen(false);
    toast({
      title: 'OS criada',
      description: `Ordem de serviço ${newOS.id} criada com sucesso.`,
    });
  };

  const updateStatus = (id: string, newStatus: StatusOS) => {
    setOrdens(
      ordens.map((os) =>
        os.id === id
          ? {
              ...os,
              status: newStatus,
              dataAtualizacao: new Date().toISOString().split('T')[0],
            }
          : os
      )
    );
    toast({
      title: 'Status atualizado',
      description: `A ordem foi atualizada para ${statusConfig[newStatus].label}.`,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Ordens de Serviço</h1>
          <p className="text-muted-foreground">Gerencie as ordens de serviço</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nova OS
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nova Ordem de Serviço</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Cliente</Label>
                  <Select
                    value={formData.clienteId}
                    onValueChange={(value) => setFormData({ ...formData, clienteId: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockClientes.map((cliente) => (
                        <SelectItem key={cliente.id} value={cliente.id}>
                          {cliente.nome} - {cliente.telefone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aparelho">Aparelho</Label>
                  <Input
                    id="aparelho"
                    value={formData.aparelho}
                    onChange={(e) => setFormData({ ...formData, aparelho: e.target.value })}
                    placeholder="iPhone 13 Pro"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="imei">IMEI (opcional)</Label>
                <Input
                  id="imei"
                  value={formData.imei}
                  onChange={(e) => setFormData({ ...formData, imei: e.target.value })}
                  placeholder="123456789012345"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="defeito">Defeito relatado</Label>
                <Textarea
                  id="defeito"
                  value={formData.defeitoRelatado}
                  onChange={(e) => setFormData({ ...formData, defeitoRelatado: e.target.value })}
                  placeholder="Descreva o problema reportado pelo cliente..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Serviços</Label>
                <div className="grid grid-cols-2 gap-2">
                  {mockServicos.filter((s) => s.ativo).map((servico) => (
                    <label
                      key={servico.id}
                      className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.servicoIds.includes(servico.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              servicoIds: [...formData.servicoIds, servico.id],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              servicoIds: formData.servicoIds.filter((id) => id !== servico.id),
                            });
                          }
                        }}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium">{servico.nome}</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          {formatCurrency(servico.valor)}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                  placeholder="Observações adicionais..."
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Criar OS</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por OS, cliente, aparelho ou IMEI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os status</SelectItem>
            {Object.entries(statusConfig).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* OS List */}
      <div className="space-y-4">
        {filteredOrdens.map((os) => (
          <div
            key={os.id}
            className="bg-card rounded-xl border p-5 shadow-soft hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="text-center">
                  <span className="text-lg font-bold text-primary">{os.id}</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(os.dataCriacao).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="border-l border-border pl-4">
                  <h3 className="font-semibold text-foreground">{os.cliente.nome}</h3>
                  <p className="text-sm text-muted-foreground">{os.aparelho}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {os.defeitoRelatado}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <StatusBadge status={os.status} />

                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">
                    {formatCurrency(os.valorEstimado)}
                  </p>
                  <p className="text-xs text-muted-foreground">{os.tecnico}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    asChild
                  >
                    <a
                      href={generateWhatsAppMessage(os)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enviar mensagem no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-success" />
                    </a>
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem
                        className="gap-2"
                        onClick={() => setSelectedOS(os)}
                      >
                        <Eye className="w-4 h-4" /> Ver detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="w-4 h-4" /> Editar
                      </DropdownMenuItem>
                      <div className="px-2 py-1.5">
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                          Alterar status
                        </p>
                        {Object.entries(statusConfig).map(([key, value]) => (
                          <button
                            key={key}
                            className="w-full text-left px-2 py-1 text-sm rounded hover:bg-muted transition-colors"
                            onClick={() => updateStatus(os.id, key as StatusOS)}
                          >
                            {value.label}
                          </button>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedOS} onOpenChange={() => setSelectedOS(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes da {selectedOS?.id}</DialogTitle>
          </DialogHeader>
          {selectedOS && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Cliente</Label>
                  <p className="font-medium">{selectedOS.cliente.nome}</p>
                  <p className="text-sm text-muted-foreground">{selectedOS.cliente.telefone}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Aparelho</Label>
                  <p className="font-medium">{selectedOS.aparelho}</p>
                  {selectedOS.imei && (
                    <p className="text-sm text-muted-foreground">IMEI: {selectedOS.imei}</p>
                  )}
                </div>
              </div>

              <div>
                <Label className="text-muted-foreground">Defeito Relatado</Label>
                <p>{selectedOS.defeitoRelatado}</p>
              </div>

              {selectedOS.observacoes && (
                <div>
                  <Label className="text-muted-foreground">Observações</Label>
                  <p>{selectedOS.observacoes}</p>
                </div>
              )}

              <div>
                <Label className="text-muted-foreground">Serviços</Label>
                <ul className="mt-1 space-y-1">
                  {selectedOS.servicos.map((s) => (
                    <li key={s.id} className="flex justify-between text-sm">
                      <span>{s.nome}</span>
                      <span>{formatCurrency(s.valor)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Label className="text-muted-foreground">Histórico</Label>
                <ul className="mt-2 space-y-2">
                  {selectedOS.historico.map((h, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-muted-foreground">
                        {new Date(h.data).toLocaleString('pt-BR')}
                      </span>
                      <span>-</span>
                      <span>{h.acao}</span>
                      <span className="text-muted-foreground">({h.usuario})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
