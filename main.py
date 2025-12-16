import sys
from PySide6.QtWidgets import QApplication
from Widgets import Widget

app = QApplication(sys.argv)

widget = Widget()
widget.show()

sys.exit(app.exec())