#include<iostream>
#pragma once

class OctalConversion {
	
	public:
		virtual int decimalToBaseN (int decimal, int n);
		virtual int octalToBaseN (int decimal, int n);
		virtual int octalToDecimal(int octal);
		virtual std::string octalToHex (int octal);
	
};

#include "OctalConversion.inl"

