export default function HomePage() {

    const mockedData = {
        upnp_available: true,
        router_name: "tp_algumaCoisa",
        ext_ip: "70.123.90.123",
        int_ip: "192.168.0.1"
    }

    return (
        <>
            {
                /* Deve mostrar o status do UPnP (Suportado ou não suportado)
                   Roteador
                   IP Externo
                   IP Interno */
            }

            {/* Menu Base */}
            <div className="h-full bg-black text-amber-50 p-4 space-y-2">

                {/* UPnP */}
                <div>
                    <span className="font-semibold">UPnP available:</span>
                    <span
                        className={`ml-2 ${
                            mockedData.upnp_available
                                ? "text-green-500"
                                : "text-red-600"
                        }`}
                    >
                        {mockedData.upnp_available ? "Supported" : "Unavailable"}
                    </span>
                </div>

                {/* Router */}
                <div>
                    <span className="font-semibold">Router Name:</span>
                    <span
                        className={`ml-2 ${
                            mockedData.router_name
                                ? "text-green-500"
                                : "text-red-600"
                        }`}
                    >
                        {mockedData.router_name || "Unknown"}
                    </span>
                </div>

                {/* External IP */}
                <div>
                    <span className="font-semibold">External IP Address:</span>
                    <span
                        className={`ml-2 ${
                            mockedData.ext_ip
                                ? "text-green-500"
                                : "text-red-600"
                        }`}
                    >
                        {mockedData.ext_ip || "Unavailable"}
                    </span>
                </div>

                {/* Internal IP */}
                <div>
                    <span className="font-semibold">Internal IP Address:</span>
                    <span
                        className={`ml-2 ${
                            mockedData.int_ip
                                ? "text-green-500"
                                : "text-red-600"
                        }`}
                    >
                        {mockedData.int_ip || "Unavailable"}
                    </span>
                </div>

            </div>
        </>
    );
}
