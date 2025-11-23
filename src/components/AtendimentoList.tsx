import React, { useState, useEffect } from 'react';
import type { Atendimento } from '../types/atendimento';

interface AtendimentoListProps {
    shouldRefetch: boolean;
    onRefetchComplete: () => void;
}

const API_URL = 'https://lashdesigner-api-1.onrender.com/atendimentos';

const AtendimentoList: React.FC<AtendimentoListProps> = ({ shouldRefetch, onRefetchComplete }) => {
    const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAtendimentos = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }

            const data: Atendimento[] = await response.json();
            setAtendimentos(data);
        } catch (err) {
            setError(`Falha ao buscar dados: ${err instanceof Error ? err.message : String(err)}`);
            console.error('Erro ao buscar atendimentos:', err);
        } finally {
            setLoading(false);
            onRefetchComplete();
        }
    };

    useEffect(() => {
        fetchAtendimentos();
    }, [shouldRefetch]);

    const handleDelete = async (id: number) => {
        try {
            if (!window.confirm(`Tem certeza que deseja deletar o atendimento ID ${id}?`)) {
                return;
            }

            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setAtendimentos(prev => prev.filter(atend => atend.id !== id));
                alert(`Atendimento ${id} deletado com sucesso!`);
            } else {
                throw new Error(`Falha ao deletar: ${response.status}`);
            }
        } catch (err) {
            alert(`Erro ao deletar: ${err instanceof Error ? err.message : 'Erro desconhecido'}`);
            console.error('Erro ao deletar atendimento:', err);
        }
    };

    if (loading) return <p className="text-gray-600 p-4 text-center">Carregando histórico de atendimentos...</p>;
    if (error) return <p className="text-red-500 p-4 text-center border border-red-200 bg-red-50 rounded-lg">Erro: {error}</p>;

    return (
        <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Histórico de Atendimentos</h3>

            {atendimentos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {atendimentos.map((atend) => (
                        <div key={atend.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 hover:shadow-xl">
                            <h4 className="text-xl font-bold mb-2 text-pink-600">{atend.nomeCliente}</h4>
                            <p className="text-sm text-gray-500 mb-2">ID Atendimento: {atend.id} | ID Cliente: {atend.clienteId}</p>

                            <p><strong>Serviço:</strong> {atend.tipoServico}</p>
                            <p><strong>Data:</strong> {atend.dataAtendimento}</p>
                            <p><strong>Valor:</strong> R$ {atend.valor}</p>
                            <p>
                                <strong>Pagamento:</strong>
                                <span className={`font-semibold ml-1 ${atend.statusPagamento === 'PAGO' ? 'text-green-600' : 'text-yellow-600'}`}>
                                    {atend.statusPagamento}
                                </span>
                            </p>

                            <button
                                onClick={() => handleDelete(atend.id)}
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition duration-150"
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 p-4 bg-gray-50 rounded-lg">Nenhum atendimento registrado no momento.</p>
            )}
        </div>
    );
};

export default AtendimentoList;