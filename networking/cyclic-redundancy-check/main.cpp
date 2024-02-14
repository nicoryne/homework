#include<iostream>
#include "crcFunctions.h"

int main(int argc, char** argv) {
	std::string data = "100100";
    std::string key = "1101";
    std::cout << "Sender side..." << std::endl;
    encodeData(data, key);
 
    std::cout << "\nReceiver side..." << std::endl;
    receiver(data+divideMod2(data+std::string(key.size() - 1, '0'),key), key);
 
    return 0;
	
};
