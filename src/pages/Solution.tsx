import React, { useState } from 'react';
import AtendimentoForm from '../components/AtendimentoForm';
import AtendimentoList from '../components/AtendimentoList';

const Solution: React.FC = () => {
    const [refetchTrigger, setRefetchTrigger] = useState(0);

    const handleSuccess = () => {
        setRefetchTrigger(prev => prev + 1);
    };

    const handleRefetchComplete = () => {
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">Gerenciamento LashOrganiza</h1>
                    <p className="mt-2 text-lg text-gray-600">Registro, Consulta e Exclusão de Atendimentos de Clientes.</p>
                </header>

                <AtendimentoForm onSuccess={handleSuccess} />

                <div className="my-10 h-px bg-pink-200"></div>

                <AtendimentoList
                    shouldRefetch={refetchTrigger > 0}
                    onRefetchComplete={handleRefetchComplete}
                />

            </div>
        </div>
    );
};

export default Solution;