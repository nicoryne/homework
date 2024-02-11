#include<iostream>
#pragma once

class OctalConversion {
	
	public:
		int decimalToBaseN (int decimal, int n);
		int octalToBaseN (int decimal, int n);
		int octalToDecimal(int octal);
		virtual std::string octalToHex (int octal);
	
};

#include "OctalConversion.inl"

