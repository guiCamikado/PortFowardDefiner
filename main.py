import sys
from PySide6.QtWidgets import QApplication
from Widgets import Widget

app = QApplication(sys.argv)

widget = Widget() # Não confundir com QWidget isso é da classe feita por mim
widget.show()

sys.exit(app.exec())