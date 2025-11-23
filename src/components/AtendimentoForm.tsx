import React, { useState } from 'react';
import type { Atendimento } from '../types/atendimento';

type NewAtendimento = Omit<Atendimento, 'id'>;

interface AtendimentoFormProps {
  onSuccess: () => void;
}

const initialFormState: NewAtendimento = {
  clienteId: 0,
  nomeCliente: '',
  dataAtendimento: new Date().toISOString().substring(0, 10),
  tipoServico: '',
  valor: '',
  dataRetorno: '',
  statusPagamento: 'PENDENTE',
  observacoes: '',
  mensagemLembrete: null,
};

const AtendimentoForm: React.FC<AtendimentoFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<NewAtendimento>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'https://lashdesigner-api-1.onrender.com/atendimentos';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const numericClienteId = Number(formData.clienteId);
    if (numericClienteId <= 0) {
      setError('O ID do Cliente não pode ser 0 ou negativo. Por favor, insira um ID válido.');
      setLoading(false);
      return;
    }

    const valorFormatado = formData.valor.replace(',', '.');
    if (isNaN(parseFloat(valorFormatado))) {
      setError('O Valor é inválido. Use um formato numérico válido (ex: 170.00).');
      setLoading(false);
      return;
    }

    const payload = {
      ...formData,
      valor: valorFormatado,
      clienteId: numericClienteId
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Erro sem detalhes');
        console.error('Detalhes do Erro 400 do Backend:', errorText);

        throw new Error(`Falha ao registrar. Status: ${response.status} (Verifique o console para detalhes da validação)`);
      }

      alert('Cliente e Atendimento registrados com sucesso!');
      setFormData(initialFormState);
      onSuccess();

    } catch (err) {
      setError(`Erro ao registrar: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
      console.error('Erro de POST:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ Registrar Novo Atendimento</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Cliente</label>
          <input type="text" name="nomeCliente" value={formData.nomeCliente} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">ID do Cliente (ou RM)</label>
          <input type="number" name="clienteId" value={formData.clienteId} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Serviço</label>
          <input type="text" name="tipoServico" value={formData.tipoServico} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Valor (ex: 140.00)</label>
          <input type="text" name="valor" value={formData.valor} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data do Atendimento</label>
          <input type="date" name="dataAtendimento" value={formData.dataAtendimento} onChange={handleChange} required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data de Retorno</label>
          <input type="date" name="dataRetorno" value={formData.dataRetorno} onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status do Pagamento</label>
          <select name="statusPagamento" value={formData.statusPagamento} onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500">
            <option value="PAGO">PAGO</option>
            <option value="PENDENTE">PENDENTE</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Observações</label>
          <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500"></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Mensagem de Lembrete</label>
          <textarea name="mensagemLembrete" value={formData.mensagemLembrete || ''} onChange={handleChange} rows={1}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-pink-500 focus:border-pink-500"></textarea>
        </div>

        <div className="md:col-span-2">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 disabled:opacity-50">
            {loading ? 'Registrando...' : 'Salvar Novo Atendimento'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AtendimentoForm;