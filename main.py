import sys
from PySide6.QtWidgets import QApplication, QStyleFactory
from Widgets import Widget

app = QApplication(sys.argv)
app.setStyle(QStyleFactory.create("Windows"))

widget = Widget()
widget.showMaximized()   # 👈 recomendado
# widget.showFullScreen()  # se quiser fullscreen real

sys.exit(app.exec())