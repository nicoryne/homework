#include<iostream>
#pragma once

class crcFunctions {
	
	public:
	virtual std::string toXOR(std::string a, std::string b);
	virtual std::string divideMod2(std::string dividend, std::string divisor);
	virtual void encodeDate(std::string data, std::string key);
	virtual void receiver(std::string data, std::string key);
		
};

#include "crcFunctions.inl"
