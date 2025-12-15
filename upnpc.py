import miniupnpc
help(miniupnpc.UPnP)

class UpnpcTools:
    upnp = miniupnpc.UPnP()


# WIP não da para testar isso aqui no momento! testar em casa
    @classmethod
    def upnpcDiscover(cls):
        cls.upnp.discoverdelay = 200

        try:
            n_devices = cls.upnp.discover()
            print(f"Dispositivos encontrados: {n_devices}")
        except Exception as e:
            print("Aviso do UPnP:", e)

        cls.upnp.selectigd() #Internet Gateway Device

        print("IP externo:", cls.upnp.externalipaddress())
        print("IP interno:", cls.upnp.lanaddr)

    @classmethod
    def getIp(cls):
        wan_ip = cls.upnp.externalipaddress()  # pega o IP externo correto
        print(wan_ip)
        return wan_ip
        


UpnpcTools.getIp()