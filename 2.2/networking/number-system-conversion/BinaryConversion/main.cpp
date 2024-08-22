#include<iostream>
#include<stdlib.h>
#include "BinaryConversion.h"

int main(int argc, char** argv) {
	BinaryConversion convert;
	std::string binary;
	int op, n;
	
	do {
		std::cout << "Welcome to Number System Conversion: Binary" << std::endl;
		std::cout << "Please select an option: " << std::endl;
		std::cout << "\t1. Convert Binary to Decimal" << std::endl;
		std::cout << "\t2. Convert Binary to Octal" << std::endl;
		std::cout << "\t3. Convert Binary to Hexadecimal" << std::endl;
		std::cout << "\t4. Convert Binary to specified base number" << std::endl;
		std::cout << "\t5. Exit program" << std::endl;
		std::cin >> op;
		
		switch(op) {
			case 1:
				system("cls");
				std::cout << "Converting Binary to Binary.." << std::endl;
				std::cout << "Input a binary number: ";
				std::cin >> binary;
				std::cout << "\nRESULT\t\n\tBinary: " << binary << "\t\n\tDecimal: " << convert.binaryToBaseN(binary, 10) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 2:
				system("cls");
				std::cout << "Converting Binary to Octal.." << std::endl;
				std::cout << "Input a binary number: ";
				std::cin >> binary;
				std::cout << "\nRESULT\t\n\tBinary: " << binary << "\t\n\tOctal: " << convert.binaryToBaseN(binary, 8) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 3:
				system("cls");
				std::cout << "Converting Binary to Hexadecimal.." << std::endl;
				std::cout << "Input a binary number: ";
				std::cin >> binary;
				std::cout << "\nRESULT\t\n\tBinary: " << binary << "\t\n\tHexadecimal: " << convert.binaryToHex(binary) << "\n" << std::endl;
				system("pause");
				system("cls");
				break;
			case 4:
				system("cls");
				std::cout << "Converting Binary to specified base number.." << std::endl;
				std::cout << "Input a binary number: ";
				std::cin >> binary;
				std::cout << "Input a base number: ";
				std::cin >> n;
				
				if(n != 16) {
					std::cout << "\nRESULT\t\n\tBinary: " << binary << "\t\n\tbase " << n << ": " << convert.binaryToBaseN(binary, n) << "\n" << std::endl;	
				} else {
					std::cout << "\nRESULT\t\n\tBinary: " << binary << "\t\n\tHexadecimal: " << convert.binaryToHex(binary) << "\n" << std::endl;
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


