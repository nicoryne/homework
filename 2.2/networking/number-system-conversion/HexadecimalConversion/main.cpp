#include<iostream>
#include<stdlib.h>
#include "HexadecimalConversion.h"

int main(int argc, char** argv) {
	HexadecimalConversion convert;
	int op, n;
	std::string hexadecimal;
	
	do {
		std::cout << "Welcome to Number System Conversion: Hexadecimal" << std::endl;
		std::cout << "Please select an option: " << std::endl;
		std::cout << "\t1. Convert Hexadecimal to Decimal" << std::endl;
		std::cout << "\t2. Convert Hexadecimal to Binary" << std::endl;
		std::cout << "\t3. Convert Hexadecimal to Octal" << std::endl;
		std::cout << "\t4. Convert Hexadecimal to specified base number" << std::endl;
		std::cout << "\t5. Exit program" << std::endl;
		std::cin >> op;
		
		switch(op) {
			case 1:
				system("cls");
				std::cout << "Converting Hexadecimal to Decimal.." << std::endl;
				std::cout << "Input an hexadecimal number: ";
				std::cin >> hexadecimal;
				std::cout << "\nRESULT\t\n\tHexadecimal: " << hexadecimal << "\t\n\tDecimal: " << convert.hexadecimalToDecimal(hexadecimal) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 2:
				system("cls");
				std::cout << "Converting Hexadecimal to Binary.." << std::endl;
				std::cout << "Input an hexadecimal number: ";
				std::cin >> hexadecimal;
				std::cout << "\nRESULT\t\n\tHexadecimal: " << hexadecimal << "\t\n\tBinary: " << convert.hexadecimalToBaseN(hexadecimal, 2) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 3:
				system("cls");
				std::cout << "Converting Octal to Hexadecimal.." << std::endl;
				std::cout << "Input an hexadecimal number: ";
				std::cin >> hexadecimal;
				std::cout << "\nRESULT\t\n\tHexadecimal: " << hexadecimal << "\t\n\tOctal: " << convert.hexadecimalToBaseN(hexadecimal, 8) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 4:
				system("cls");
				std::cout << "Converting Octal to specified base number.." << std::endl;
				std::cout << "Input an hexadecimal number: ";
				std::cin >> hexadecimal;
				std::cout << "Input a base number: ";
				std::cin >> n;
				
				if(n != 16) {
					std::cout << "\nRESULT\t\n\tHexadecimal: " << hexadecimal << "\t\n\tbase " << n << ": " << convert.hexadecimalToBaseN(hexadecimal, n) << "\n" << std::endl;	
				} else {
					std::cout << "\nRESULT\t\n\tHexadecimal: " << hexadecimal << "\t\n\tHexadecimal: " << hexadecimal << "\n" << std::endl;
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



