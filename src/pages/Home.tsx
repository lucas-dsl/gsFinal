import { Sparkles } from 'lucide-react';

const waitingListAvatars = [
  '#FF52A3',
  '#7A8AFB',
  '#4ADE80',
  '#FFC800',
];

const App = () => {

  const handleClicaBotao = () => {
    alert('Botão de Testar Grátis clicado! (Nenhuma funcionalidade de navegação ainda)');
  };

  return (
    <div className='min-h-screen flex flex-col items-center p-4 sm:p-8'>
      
      <div className="mt-8 mb-16 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center space-x-2">
        <Sparkles className="h-4 w-4 text-[#E94B9F]" />
        <span className="text-sm font-semibold text-gray-700">
          Automação com IA
        </span>
      </div>

      <header className="text-center max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
          Automatize seu <span className='text-[#E94B9F]'>pós-atendimento</span> e foque no que importa
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          LashOrganiza é seu agente de IA que cuida de tudo: registra clientes, gera pagamentos, emite notas fiscais e envia lembretes. Tudo automático.
        </p>
      </header>

      <div className="flex flex-col items-center">
        <button
          onClick={handleClicaBotao}
          className="bg-[#E94B9F] px-8 py-4 mb-4 text-lg font-bold text-white rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-pink-300 active:scale-[0.98]"
        >
          Testar Gratuitamente
        </button>

        <div className="flex items-center text-sm text-gray-600 mb-20 space-x-1">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          <span>Em breve disponível</span>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-3">
            Junte-se à lista de espera
          </p>

          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {waitingListAvatars.map((color, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  style={{ backgroundColor: color }}
                  title={`Usuário ${index + 1}`}
                >
                </div>
              ))}
              <div className='w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700'>
                +
              </div>
            </div>
            
            <span className="text-base font-semibold text-gray-800 ml-4">
              +50 profissionais esperando
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;