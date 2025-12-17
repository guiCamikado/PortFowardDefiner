import { Wifi, Globe, Home, Shield, CheckCircle, XCircle } from 'lucide-react';

// Atoms
import Cabecalho from '../atoms/Cabecalho';
import IndicadorStatus from '../atoms/IndicadorStatus';
import FastUnderMenu from '../molecules/FastUnderMenu';

export default function HomePage() {
  // WIP dados mockados, aqui deverá vir a requisição para o app
  const data = {
    upnp_available: true,
    router_name: "TP-Link Archer C7",
    ext_ip: "70.123.90.123",
    int_ip: "192.168.0.1"
  };
  const statusItems = [
    {
      label: "Status UPnP",
      value: data.upnp_available ? "Ativo" : "Inativo",
      icon: Shield,
      status: data.upnp_available,
      description: "Protocolo de redirecionamento de portas"
    },
    {
      label: "Roteador",
      value: data.router_name || "Não detectado",
      icon: Wifi,
      status: !!data.router_name,
      description: "Nome do dispositivo de rede"
    },
    {
      label: "IP Externo",
      value: data.ext_ip || "Não disponível",
      icon: Globe,
      status: !!data.ext_ip,
      description: "Endereço IP público"
    },
    {
      label: "IP Interno",
      value: data.int_ip || "Não disponível",
      icon: Home,
      status: !!data.int_ip,
      description: "Endereço IP local"
    }
  ];

  return (
    <>
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
                    <item.icon className={`w-5 h-5 ${item.status ? 'text-blue-400' : 'text-gray-500'
                      }`} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.status
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

          <IndicadorStatus data={data} />
        </div>
        <FastUnderMenu />
      </div>
    </>
  );
}