#include<iostream>
#include<stdlib.h>
#include "DecimalConversion.h"

int main(int argc, char** argv) {
	DecimalConversion convert;
	int op, decimal, n;
	
	do {
		std::cout << "Welcome to Number System Conversion: Decimal" << std::endl;
		std::cout << "Please select an option: " << std::endl;
		std::cout << "\t1. Convert Decimal to Binary" << std::endl;
		std::cout << "\t2. Convert Decimal to Octal" << std::endl;
		std::cout << "\t3. Convert Decimal to Hexadecimal" << std::endl;
		std::cout << "\t4. Convert Decimal to specified base number" << std::endl;
		std::cout << "\t5. Exit program" << std::endl;
		std::cin >> op;
		
		switch(op) {
			case 1:
				system("cls");
				std::cout << "Converting Decimal to Binary.." << std::endl;
				std::cout << "Input a decimal number: ";
				std::cin >> decimal;
				std::cout << "\nRESULT\t\n\tDecimal: " << decimal << "\t\n\tBinary: " << convert.decimalToBaseN(decimal, 2) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 2:
				system("cls");
				std::cout << "Converting Decimal to Octal.." << std::endl;
				std::cout << "Input a decimal number: ";
				std::cin >> decimal;
				std::cout << "\nRESULT\t\n\tDecimal: " << decimal << "\t\n\tOctal: " << convert.decimalToBaseN(decimal, 8) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 3:
				system("cls");
				std::cout << "Converting Decimal to Hexadecimal.." << std::endl;
				std::cout << "Input a decimal number: ";
				std::cin >> decimal;
				std::cout << "\nRESULT\t\n\tDecimal: " << decimal << "\t\n\tHexadecimal: " << convert.decimalToHex(decimal) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 4:
				system("cls");
				std::cout << "Converting Decimal to specified base number.." << std::endl;
				std::cout << "Input a decimal number: ";
				std::cin >> decimal;
				std::cout << "Input a base number: ";
				std::cin >> n;
				
				if(n != 16) {
					std::cout << "\nRESULT\t\n\tDecimal: " << decimal << "\t\n\tbase " << n << ": " << convert.decimalToBaseN(decimal, n) << "\n" << std::endl;	
				} else {
					std::cout << "\nRESULT\t\n\tDecimal: " << decimal << "\t\n\tHexadecimal: " << convert.decimalToHex(decimal) << "\n" << std::endl;
				}
				system("pause");
				system("cls");
				break;
			case 5:
				system("cls");
				std::cout << "Bye bye!" << std::endl;
				break;
			default:
				std::cout << "Invalid option! Please try again," << std::endl; 
				break;
		}
	} while (op != 5);
	
	return 0;
};


