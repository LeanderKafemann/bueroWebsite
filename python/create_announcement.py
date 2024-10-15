from tkinter import *

def export():
    pass

def quit_():
    quit(code="Exit")

root = Tk()
root.title("BüroGuide ContentCreator")

c = Canvas(root, width=650, height=850)
c.configure(bg="light blue")
c.pack()

c.create_text(325, 60, text="  Buero Guide  \nContent Creator", font=("Verdana", "30", "bold"))
c.create_text(325, 840, text="Copyright LK 2024  -  Version 0.1.04", font=("Verdana", "10"))

c.create_text(20, 200, text="Titel:", font=("Verdana", "20"), anchor="w")
c.create_text(325, 270, text="Inhalt:", font=("Verdana", "25"))

c.inhalt = Text(root, wrap=WORD, font=("Verdana", "16"))
c.create_window(10, 250, height=500, width=630, window=c.inhalt, anchor="nw")
c.titel = Text(root, wrap="none", font=("Verdana", "18"))
c.create_window(180, 200, height=40, width=420, window=c.titel, anchor="w")

c.create_window(25, 775, anchor="nw", window=Button(master=root, command=export, text="Exportieren", background="light blue", relief="ridge"), height=40, width=275)
c.create_window(350, 775, anchor="nw", window=Button(master=root, command=quit_, text="Beenden", background="light blue", relief="ridge"), height=40, width=275)

root.mainloop()
