export type Atendimento = {
    id: number;
    clienteId: number;
    nomeCliente: string;
    dataAtendimento: string;
    tipoServico: string;
    valor: string;
    dataRetorno: string;
    statusPagamento: 'PAGO' | 'PENDENTE';
    observacoes: string;
    mensagemLembrete: string | null;
};