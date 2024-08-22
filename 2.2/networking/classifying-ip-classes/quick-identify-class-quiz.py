#   Author: Porter, N. R
#   Program to test how quick you can identify the class of a given IP Address
#
#   Constraints:
#               You are given 5 seconds to answer.
#               0 <= Given Decimal <= 255
#               Answers must strictly be one of these choices: {'A', 'B', 'C', 'D', 'E'}
#
import random as rd
import threading as th
import time as tm
from os import system

def countdown():
    global timer
    timer = 5
    for i in range(5):
        timer -= 1
        tm.sleep(1)
    print("\nTime's up! Press any key to continue...")

def identifyClass(n):
    if (0 <= n <= 127):
        return 'A'
    elif(128 <= n <= 191):
        return 'B'
    elif(192 <= n <= 223):
        return 'C'
    elif(224 <= n <= 239):
        return 'D'
    elif(240 <= n <= 255):
        return 'E'

def get_input():
    global user_input
    user_input = input("\nEnter class: ")

if __name__ == '__main__':
    while True:
        system('cls')
        first_octet = rd.randint(0, 255)
        print("You have 5 seconds to identify the class of the given IP Address.")
        print("\nIP Address:", first_octet, ".", rd.randint(1, 255), ".", rd.randint(1, 255), ".", rd.randint(1, 255))
        
        countdown_thread = th.Thread(target=countdown)
        countdown_thread.start()
        
        input_thread = th.Thread(target=get_input)
        input_thread.start()
        
        countdown_thread.join()
        input_thread.join()
        
        print("Answer:", identifyClass(first_octet))
        print("Your input:", user_input.upper())
        
        if (identifyClass(first_octet)) == user_input.upper():
            print("CORRECT!")
        else:
            print("WRONG!")
        
        choice = input("\nContinue? [Y/N]: ").strip().upper()
        if choice != 'Y':
            break
