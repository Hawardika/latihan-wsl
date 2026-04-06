from data import tasks
from utils import input_task

def show_tasks():
    print("\nDaftar Task:")
    for i, t in enumerate(tasks):
        print(f"{i+1}. {t}")

def add_task():
    task = input_task()
    tasks.append(task)
    print("Task ditambahkan!")

