from controller import show_tasks, add_task

while True:
    print("\n1. Lihat Task")
    print("2. Tambah Task")
    print("3. Keluar")

    pilihan = input("Pilih: ")

    if pilihan == "1":
        show_tasks()
    elif pilihan == "2":
        add_task()
    else:
        break
