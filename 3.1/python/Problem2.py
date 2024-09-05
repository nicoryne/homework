def get_input(prompt, value_type):
    while True:
        try:
            return value_type(input(prompt))
        except ValueError:
            print(f"ERROR: Please input a valid {value_type.__name__} value.")

def calculate_simple_interest(principal, rate, years):
    return (principal * rate * years) / 100

if __name__ == '__main__':
    principal = get_input("Enter principal amount: ", float)
    rate = get_input("Enter rate of interest: ", float)
    years = get_input("Enter time period in years: ", int)
    
    interest = calculate_simple_interest(principal, rate, years)
    print(f"Simple interest is: {interest:.1f}")
