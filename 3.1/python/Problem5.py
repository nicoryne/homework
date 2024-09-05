def convert_celsius_to_fahrenheit(n):
    return float((n * 9 / 5) + 32)

if __name__ == '__main__':
    while True:
        try:
            celsius = float(input("Enter temperature in Celsius: "))
            print(f"Temperature in Fahrenheit: {(convert_celsius_to_fahrenheit(celsius)):.1f}")
            break
        except ValueError:
            print("ERROR: Please input a valid number for celsius temperature.")