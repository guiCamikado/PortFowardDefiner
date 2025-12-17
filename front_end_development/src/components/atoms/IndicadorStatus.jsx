export default function IndicadorStatus({ data }) {
  return (<>
    {/* Indicador Visual de Status */}
    < div className="mt-8 pt-6 border-t border-gray-700/50" >
      <div className="flex items-center">
        <span className="text-gray-400">Status do Protocolo UPnP</span>
        <div>
          <div className={`px-3 rounded-full text-sm font-medium ml-4 ${data.upnp_available
            ? 'bg-green-500/20 text-green-400'
            : 'bg-red-500/20 text-red-400'
            }`}>
            {data.upnp_available ? "UPnP funciona nesse dispositivo" : "UPnP não funciona nesse dispositivo"}
          </div>
        </div>
      </div>
    </div >
  </>
  )
}