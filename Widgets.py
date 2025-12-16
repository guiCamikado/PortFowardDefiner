import os
from PySide6.QtWidgets import QWidget, QVBoxLayout
from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtCore import QUrl


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Port Setter")
        self.resize(1980, 1080) #WIP Configurar isso para pegar o tamanho do monitor do usuário

        layout = QVBoxLayout(self)

        self.view = QWebEngineView() # Permite integração de html
        path = os.path.abspath("front/index.html")
        self.view.load(QUrl.fromLocalFile(path))

        layout.addWidget(self.view)