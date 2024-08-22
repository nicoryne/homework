#include<iostream>

#include "SubnetMaskFinder.h"

int main(int argc, char** argv) {
	SubnetMaskFinder smf;
	int n;
	
	std::cout << "Enter IP Address (XXX.XXX.XXX.XXX): ";
	std::cin >> n;
	
	std::cout << "Hosts: " << smf.getBitsFromHost(n);
}
