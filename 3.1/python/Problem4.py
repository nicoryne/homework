def get_input():
    while True:
        try:
            initial = int(input("Enter a positive integer: "))
            
            if(initial > 0): return initial
            
            print("ERROR: Please input a positive integer for your given number n.")
        except ValueError:
            print("ERROR: Please input a valid integer for your given number n.")

def check_if_prime(n):
    if n < 2:
        return (f"The number {n} is not a prime number.")
        
    i = 2
    while i * i <= n:
        if n % i == 0:
            return(f"The number {n} is not a prime number.")
        i += 1
    return (f"The number {n} is a prime number.")

if __name__ == '__main__':
    n = get_input()
    print(check_if_prime(n))
        