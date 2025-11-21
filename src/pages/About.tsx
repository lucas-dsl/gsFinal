import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Users, CreditCard, FileText, Bell } from 'lucide-react';
import type { Feature } from '../types/feature';

const features: Feature[] = [
    {
        icon: Users,
        iconColorClass: `text-[#E94B9F]`,
        iconBgClass: `bg-[#E94B9F]/20`,
        title: 'Registro Automático',
        description: 'Seus clientes são registrados automaticamente no sistema após cada atendimento',
    },
    {
        icon: CreditCard,
        iconColorClass: `text-[#FFC857]`,
        iconBgClass: `bg-[#FFC857]/20`,
        title: 'Link de Pagamento',
        description: 'Com um clique, gere e envie links de pagamento automaticamente para suas clientes',
    },
    {
        icon: FileText,
        iconColorClass: `text-[#E94B9F]`,
        iconBgClass: `bg-[#E94B9F]/20`,
        title: 'Nota Fiscal',
        description: 'Emissão automática de notas fiscais com apenas um clique após cada atendimento',
    },
    {
        icon: Bell,
        iconColorClass: `text-[#FFC857]`,
        iconBgClass: `bg-[#FFC857]/20`,
        title: 'Lembretes Inteligentes',
        description: 'Mensagens automáticas para manter seus clientes engajados e informados',
    },
];


const About: React.FC = () => {
    return (
        <div className={`min-h-screen flex flex-col items-center p-4 sm:p-12 font-['Inter',sans-serif]`}>


            <header className="text-center max-w-3xl mb-16 mt-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug text-gray-900 mb-4">
                    Tudo que você precisa,
                    <span className={`inline-block text-[#E94B9F]`}> automaticamente</span>
                </h1>


                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    Deixe a tecnologia cuidar da burocracia enquanto você foca em fazer suas clientes ficarem ainda mais lindas
                </p>
            </header>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
                {features.map((feature, index) => (
                    <FeatureCard feature={feature} key={index} />
                ))}
            </div>


        </div>
    );
};


export default About;