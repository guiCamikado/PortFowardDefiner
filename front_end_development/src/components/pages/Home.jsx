import { Wifi, Globe, Home, Shield, CheckCircle, XCircle } from 'lucide-react';

// Atoms
import Cabecalho from '../atoms/Cabecalho';
import IndicadorStatus from '../atoms/IndicadorStatus';
export default function HomePage() {
  const mockedData = {
    upnp_available: true,
    router_name: "TP-Link Archer C7",
    ext_ip: "70.123.90.123",
    int_ip: "192.168.0.1"
  };

  const statusItems = [
    {
      label: "Status UPnP",
      value: mockedData.upnp_available ? "Ativo" : "Inativo",
      icon: Shield,
      status: mockedData.upnp_available,
      description: "Protocolo de redirecionamento de portas"
    },
    {
      label: "Roteador",
      value: mockedData.router_name || "Não detectado",
      icon: Wifi,
      status: !!mockedData.router_name,
      description: "Nome do dispositivo de rede"
    },
    {
      label: "IP Externo",
      value: mockedData.ext_ip || "Não disponível",
      icon: Globe,
      status: !!mockedData.ext_ip,
      description: "Endereço IP público"
    },
    {
      label: "IP Interno",
      value: mockedData.int_ip || "Não disponível",
      icon: Home,
      status: !!mockedData.int_ip,
      description: "Endereço IP local"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-6">
      <Cabecalho />

      {/* Cartão de Status Principal */}
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-6 mb-6 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          
          {/* Badge de Status Geral */}

        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusItems.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <item.icon className={`w-5 h-5 ${
                    item.status ? 'text-blue-400' : 'text-gray-500'
                  }`} />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.status ? 'Online' : 'Offline'}
                </div>
              </div>
              
              <h3 className="text-gray-400 text-sm font-medium mb-1">
                {item.label}
              </h3>
              <p className="text-white font-semibold text-lg mb-2 truncate">
                {item.value}
              </p>
              <p className="text-gray-500 text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <IndicadorStatus data={mockedData}/>
      </div>

      {/* Ações Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Testar Conexão</span>
            <div className="p-2 bg-white/20 rounded-lg">
              <Wifi className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-blue-200 mt-2 text-left">
            Verificar estabilidade da rede
          </p>
        </button>
        
        <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Configurar Portas</span>
            <div className="p-2 bg-white/20 rounded-lg">
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-left">
            Gerenciar redirecionamentos
          </p>
        </button>
        
        <button className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Logs do Sistema</span>
            <div className="p-2 bg-white/20 rounded-lg">
              <Shield className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-left">
            Visualizar histórico de conexões
          </p>
        </button>
      </div>
    </div>
  );
}