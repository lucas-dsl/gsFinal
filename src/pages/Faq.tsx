import { useState } from "react";
import Seta from "../assets/icons/seta-para-baixo.png";

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "O que é o LashOrganiza?",
        answer:
            "O LashOrganiza é uma plataforma que automatiza processos do dia a dia da lash designer, como registro de clientes, pagamentos, lembretes e emissão de notas, para você focar no atendimento.",
    },
    {
        question: "O LashOrganiza serve apenas para lash designers?",
        answer:
            "Ele foi pensado especialmente para lash designers, mas pode ser usado por qualquer profissional de beleza que trabalhe com agendamento e atendimento de clientes.",
    },
    {
        question: "Como funciona o registro automático de clientes?",
        answer:
            "Cada atendimento que você registra no sistema adiciona automaticamente a cliente ao seu histórico, sem precisar preencher tudo manualmente.",
    },
    {
        question: "O LashOrganiza envia lembretes para minhas clientes?",
        answer:
            "Sim! Ele envia lembretes automáticos de agendamento, confirmação e até manutenção para manter sua agenda organizada.",
    },
    {
        question: "Consigo procurar clientes antigas?",
        answer:
            "Sim! Você pode pesquisar clientes por nome, data, serviço ou qualquer outro dado registrado.",
    },
    {
        question: "O sistema é complicado de usar?",
        answer:
            "Não! Ele foi feito para ser simples e direto, mesmo para quem nunca usou um sistema de gestão.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            <section
                id="perguntas-frequentes"
                className="py-8"
                aria-labelledby="faq-title"
            >
                <h2
                    id="faq-title"
                    className="text-3xl font-bold text-center mb-2 mx-6"
                >
                    Perguntas Frequentes
                </h2>
                <p className="text-lg text-center text-gray-600 mb-8 mx-4">
                    Respostas para as dúvidas mais comuns sobre nosso chatbot de
                    teleconsultas
                </p>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <article
                                key={index}
                                className="faq-item mb-4 mx-6"
                            >
                                <button
                                    onClick={() => toggleAnswer(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-pink-300"
                                >
                                    <span className="text-lg font-semibold text-gray-800">
                                        {faq.question}
                                    </span>
                                    <img
                                        src={Seta}
                                        alt={isOpen ? "Recolher resposta" : "Expandir resposta"}
                                        className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        className="p-4 bg-gray-50 text-gray-700 rounded-b-lg"
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Faq;
