#include<iostream>
#pragma once

class BinaryConversion {
	
	public:
	virtual int	binaryToBaseN (std::string binary, int n);
	virtual std::string binaryToHex (std::string binary);
	
};

#include "BinaryConversion.inl"
