#include<iostream>
#include<stdlib.h>
#include "OctalConversion.h"

int main(int argc, char** argv) {
	OctalConversion convert;
	int op, octal, n;
	
	do {
		std::cout << "Welcome to Number System Conversion: Octal" << std::endl;
		std::cout << "Please select an option: " << std::endl;
		std::cout << "\t1. Convert Octal to Decimal" << std::endl;
		std::cout << "\t2. Convert Octal to Binary" << std::endl;
		std::cout << "\t3. Convert Octal to Hexadecimal" << std::endl;
		std::cout << "\t4. Convert Octal to specified base number" << std::endl;
		std::cout << "\t5. Exit program" << std::endl;
		std::cin >> op;
		
		switch(op) {
			case 1:
				system("cls");
				std::cout << "Converting Octal to Decimal.." << std::endl;
				std::cout << "Input an octal number: ";
				std::cin >> octal;
				std::cout << "\nRESULT\t\n\tOctal: " << octal << "\t\n\tDecimal: " << convert.octalToBaseN(octal, 10) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 2:
				system("cls");
				std::cout << "Converting Octal to Binary.." << std::endl;
				std::cout << "Input an octal number: ";
				std::cin >> octal;
				std::cout << "\nRESULT\t\n\tOctal: " << octal << "\t\n\tBinary: " << convert.octalToBaseN(octal, 2) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 3:
				system("cls");
				std::cout << "Converting Octal to Hexadecimal.." << std::endl;
				std::cout << "Input an octal number: ";
				std::cin >> octal;
				std::cout << "\nRESULT\t\n\tOctal: " << octal << "\t\n\tHexadecimal: " << convert.octalToHex(octal) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 4:
				system("cls");
				std::cout << "Converting Octal to specified base number.." << std::endl;
				std::cout << "Input an octal number: ";
				std::cin >> octal;
				std::cout << "Input a base number: ";
				std::cin >> n;
				
				if(n != 16) {
					std::cout << "\nRESULT\t\n\tOctal: " << octal << "\t\n\tbase " << n << ": " << convert.octalToBaseN(octal, n) << "\n" << std::endl;	
				} else {
					std::cout << "\nRESULT\t\n\tOctal: " << octal << "\t\n\tHexadecimal: " << convert.octalToHex(octal) << "\n" << std::endl;
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



