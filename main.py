from tkinter import *
from tkinter import ttk
import miniupnpc
root = Tk()
frm = ttk.Frame(root, padding=10)
frm.grid()

# ln_1
ttk.Label(frm, text="Port:").grid(column=0, row=0)
ttk.Entry(frm).grid(column=1,row=0)
ttk.Button(frm, text="SetPort").grid(column=2, row=0)
# ttk.Button(frm, text="Quit", command=root.destroy).grid(column=1, row=0)

upnp = miniupnpc.UPnP()
print(upnp)


root.mainloop()