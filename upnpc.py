import miniupnpc

upnp = miniupnpc.UPnP()
upnp.discoverdelay = 200

try:
    n_devices = upnp.discover()
    print(f"Dispositivos encontrados: {n_devices}")
except Exception as e:
    print("Aviso do UPnP:", e)

upnp.selectigd()

print("IP externo:", upnp.externalipaddress())
print("IP interno:", upnp.lanaddr)