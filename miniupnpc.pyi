# miniupnpc.pyi
from typing import Tuple, Optional

class UPnP:
    # --- atributos ---
    discoverdelay: int
    lanaddr: str
    wanaddr: str
    localport: int
    minissdpdsocket: Optional[str]
    multicastif: Optional[str]

    def __init__(self, *args, **kwargs) -> None: ...

    # --- discovery ---
    def discover(self) -> int: ...
    def selectigd(self) -> None: ...

    # --- info ---
    def externalipaddress(self) -> str: ...
    def connectiontype(self) -> str: ...
    def statusinfo(self) -> Tuple[str, int]

    # --- port mapping ---
    def addportmapping(
        self,
        external_port: int,
        protocol: str,
        internal_host: str,
        internal_port: int,
        description: str,
        remote_host: str = ...
    ) -> bool: ...

    def addanyportmapping(
        self,
        protocol: str,
        internal_host: str,
        internal_port: int,
        description: str,
        remote_host: str = ...
    ) -> Tuple[int, bool]

    def deleteportmapping(
        self,
        external_port: int,
        protocol: str,
        remote_host: str = ...
    ) -> bool: ...

    def deleteportmappingrange(
        self,
        start_port: int,
        end_port: int,
        protocol: str,
        remote_host: str = ...
    ) -> bool: ...

    def getspecificportmapping(
        self,
        external_port: int,
        protocol: str,
        remote_host: str = ...
    ) -> Tuple[str, int, str, bool, str]

    def getgenericportmapping(
        self,
        index: int
    ) -> Tuple[int, str, int, str, bool, str]

    def getportmappingnumberofentries(self) -> int: ...

    # --- stats ---
    def totalbytesent(self) -> int: ...
    def totalbytereceived(self) -> int: ...
    def totalpacketsent(self) -> int: ...
    def totalpacketreceived(self) -> int: ...
