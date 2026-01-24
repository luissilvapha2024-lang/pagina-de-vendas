import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Clock, DollarSign, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockServicos } from '@/data/mockData';
import { Switch } from '@/components/ui/switch';
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
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function Servicos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [servicos, setServicos] = useState(mockServicos);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nome: '',
    valor: '',
    tempoMedio: '',
    categoria: 'Reparo',
  });

  const filteredServicos = servicos.filter(
    (servico) =>
      servico.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      servico.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newServico = {
      ...formData,
      id: String(servicos.length + 1),
      valor: parseFloat(formData.valor),
      ativo: true,
    };
    setServicos([...servicos, newServico]);
    setFormData({ nome: '', valor: '', tempoMedio: '', categoria: 'Reparo' });
    setIsDialogOpen(false);
    toast({
      title: 'Serviço cadastrado',
      description: `${formData.nome} foi adicionado com sucesso.`,
    });
  };

  const toggleAtivo = (id: string) => {
    setServicos(
      servicos.map((s) => (s.id === id ? { ...s, ativo: !s.ativo } : s))
    );
  };

  const handleDelete = (id: string) => {
    setServicos(servicos.filter((s) => s.id !== id));
    toast({
      title: 'Serviço removido',
      description: 'O serviço foi removido com sucesso.',
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const categorias = ['Reparo', 'Manutenção', 'Software'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Serviços</h1>
          <p className="text-muted-foreground">Gerencie os serviços oferecidos</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Serviço
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Serviço</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome do serviço</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
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
                  <Label htmlFor="tempoMedio">Tempo médio</Label>
                  <Input
                    id="tempoMedio"
                    value={formData.tempoMedio}
                    onChange={(e) => setFormData({ ...formData, tempoMedio: e.target.value })}
                    placeholder="2h"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Categoria</Label>
                <div className="flex gap-2">
                  {categorias.map((cat) => (
                    <Button
                      key={cat}
                      type="button"
                      variant={formData.categoria === cat ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFormData({ ...formData, categoria: cat })}
                    >
                      {cat}
                    </Button>
                  ))}
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

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nome ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Services Table */}
      <div className="bg-card rounded-xl border shadow-soft overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                Serviço
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                Categoria
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                Valor
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                Tempo
              </th>
              <th className="text-center py-4 px-6 text-sm font-medium text-muted-foreground">
                Ativo
              </th>
              <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredServicos.map((servico) => (
              <tr
                key={servico.id}
                className={cn(
                  'border-b last:border-0 hover:bg-muted/30 transition-colors',
                  !servico.ativo && 'opacity-50'
                )}
              >
                <td className="py-4 px-6">
                  <span className="font-medium text-foreground">{servico.nome}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {servico.categoria}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1 text-foreground">
                    <DollarSign className="w-4 h-4 text-success" />
                    {formatCurrency(servico.valor)}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {servico.tempoMedio}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex justify-center">
                    <Switch
                      checked={servico.ativo}
                      onCheckedChange={() => toggleAtivo(servico.id)}
                    />
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Edit className="w-4 h-4" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="gap-2 text-destructive"
                          onClick={() => handleDelete(servico.id)}
                        >
                          <Trash2 className="w-4 h-4" /> Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
