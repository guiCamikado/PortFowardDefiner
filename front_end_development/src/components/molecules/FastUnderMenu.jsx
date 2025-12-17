import { Wifi, Globe, Shield } from "lucide-react";
import ActionButton from "../atoms/Buttons";

function FastUnderMenu() {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ActionButton
                    title="Testar Conexão"
                    description="Verificar estabilidade da rede"
                    icon={Wifi}
                    variant="primary"
                />

                <ActionButton
                    title="Configurar Portas"
                    description="Gerenciar redirecionamentos"
                    icon={Globe}
                    variant="primary"
                />

                <ActionButton
                    title="Logs do Sistema"
                    description="Visualizar histórico de conexões"
                    icon={Shield}
                />
            </div>
        </>
    )
}

export default FastUnderMenu;