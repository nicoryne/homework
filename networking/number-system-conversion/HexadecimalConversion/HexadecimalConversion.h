#include<iostream>
#pragma once

class HexadecimalConversion {
	
	public:
		int decimalToBaseN (int decimal, int n);
		int hexadecimalToBaseN (std::string hexa, int n);
		int hexadecimalToDecimal(std::string hexa);
};

#include "HexadecimalConversion.inl"

