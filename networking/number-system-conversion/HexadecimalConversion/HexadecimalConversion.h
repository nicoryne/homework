#include<iostream>
#pragma once

class HexadecimalConversion {
	
	public:
		virtual int decimalToBaseN (int decimal, int n);
		virtual int hexadecimalToBaseN (std::string hexa, int n);
		virtual int hexadecimalToDecimal(std::string hexa);
};

#include "HexadecimalConversion.inl"

