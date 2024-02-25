#   Author: Porter, N. R
#   Program to test how quick you can convert a decimal number to its binary notation
#   specifically for IP Address classification.
#
#   Constraints:
#               You are given 10 seconds to answer.
#               1 <= Given Decimal <= 255
#               Binary form must always have 8 bits (with leading zeroes).
#
import random as rd
import threading as th
import time as tm
from os import system

def countdown():
    global timer
    timer = 10
    for i in range(10):
        timer -= 1
        tm.sleep(1)
    print("\nTime's up! Press any key to continue...")

def DecimalToBinary(n):
    return "{0:08b}".format(int(n))

def get_input():
    global user_input
    user_input = input("\nEnter Binary Form (with leading zeroes): ")

if __name__ == '__main__':
    while True:
        system('cls')
        given_decimal = rd.randint(1, 255)
        print("Decimal:", given_decimal)
        
        countdown_thread = th.Thread(target=countdown)
        countdown_thread.start()
        
        input_thread = th.Thread(target=get_input)
        input_thread.start()
        
        countdown_thread.join()
        input_thread.join()
        
        print("Answer:", DecimalToBinary(given_decimal))
        print("Your input:", user_input)
        
        if DecimalToBinary(given_decimal) == user_input:
            print("CORRECT!")
        else:
            print("WRONG!")
        
        choice = input("\nContinue? [Y/N]: ").strip().upper()
        if choice != 'Y':
            break
