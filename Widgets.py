import os
from PySide6.QtWidgets import QWidget, QVBoxLayout
from PySide6.QtWebEngineWidgets import QWebEngineView
from PySide6.QtCore import QUrl


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Port Setter")
        self.resize(900, 600)

        layout = QVBoxLayout(self)

        self.view = QWebEngineView()
        path = os.path.abspath("front/index.html")
        self.view.load(QUrl.fromLocalFile(path))

        layout.addWidget(self.view)