import sys
from PySide6.QtWidgets import QApplication, QStyleFactory
from Widgets import Widget

app = QApplication(sys.argv)
app.setStyle(QStyleFactory.create("Windows"))

widget = Widget()
widget.showMaximized()
# widget.showFullScreen()  # fullscreen real

sys.exit(app.exec())
