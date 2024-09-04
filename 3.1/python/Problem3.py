def get_input():
    while True:
        try:
            initial = int(input("Enter a positive integer: "))
            
            if(initial > 0): return initial
            
            print("ERROR: Please input a positive integer for your given number n.")
        except ValueError:
            print("ERROR: Please input a valid integer for your given number n.")

def get_sum_of_natural_numbers(n):
    return n * (n + 1) // 2

if __name__ == '__main__':
    n = get_input()
    print(f"Sum of natural numbers up to {n}: {get_sum_of_natural_numbers(n)}.")
    
