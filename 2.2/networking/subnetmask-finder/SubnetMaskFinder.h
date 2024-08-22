#include<iostream>
#pragma once
class SubnetMaskFinder {
	public:
		virtual int getBitsFromHost(int);
		virtual int getBitsFromIP(std::string);
};

#include "SubnetMaskFinder.inl"
