import os
from PySide6.QtWidgets import QWidget, QVBoxLayout
from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtCore import QUrl, Qt


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("UPLink")
        self.resize(1980, 1080) #WIP Configurar isso para pegar o tamanho do monitor do usuário
        # self.setWindowFlags(Qt.FramelessWindowHint | Qt.Window) # Remove a barra - [] X
        
        layout = QVBoxLayout(self)

        self.view = QWebEngineView() # Permite integração de html
        path = os.path.abspath("front/index.html")
        self.view.load(QUrl.fromLocalFile(path))

        layout.addWidget(self.view)

        self.is_fullscreen = False  # 👈 controla o estado

        layout = QVBoxLayout(self)

        self.view = QWebEngineView()
        path = os.path.abspath("front/index.html")
        self.view.load(QUrl.fromLocalFile(path))

        layout.addWidget(self.view)

    def keyPressEvent(self, event):
        if event.key() == Qt.Key_F11:
            if self.is_fullscreen:
                self.showMaximized()   # ou showNormal()
            else:
                self.showFullScreen()

            self.is_fullscreen = not self.is_fullscreen
        else:
            super().keyPressEvent(event)