#include<iostream>
#pragma once

class DecimalConversion {
	
	public:
		virtual int	decimalToBaseN (int decimal, int n);
		virtual std::string decimalToHex (int decimal);
	
};

#include "DecimalConversion.inl"
