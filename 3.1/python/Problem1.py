def manage_budget(budget):
    total_expense = 0
    
    while True:
        try:
            user_expense = int(input("Enter an expense (or -1 to finish): "))
            
            if user_expense == -1:
                print(f"Total amount spent: {total_expense}")
                break
            elif user_expense < 0:
                print("ERROR: Please input a positive integer for your expense.")
            else:
                total_expense += user_expense   
        except ValueError:
            print("ERROR: Please enter a valid integer for your expense.")
    
    return total_expense <= budget


if __name__ == '__main__':
    try:
        budget = int(input("Enter your daily budget: "))
        print("You have stayed within your budget") if manage_budget(budget) else print("You have exceeded your budget.")
    except ValueError:
        print("ERROR: Please enter a valid integer for your budget.")
