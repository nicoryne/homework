

int BinaryConversion :: binaryToBaseN (std::string binary, int n) {
	int result = 0;
	int base = 1;
	
	for(int i = binary.length() - 1; i >= 0; i--) {
		if(binary[i] == '1') {
			result += base;
		}
		base *= 2;
	}
	return result;
	
};
		
std::string BinaryConversion :: binaryToHex (std::string binary) {
	int decimal = binaryToBaseN(binary, 10);
	std::string hex = "";
	int rem = 0;
	char ch;
			
	while(decimal != 0) {
		rem = decimal % 16;
				
		if(rem < 10) {
			ch = rem + 48;
		} else {
			ch = rem + 55;
		}
				
		hex += ch;
		decimal /= 16;
	}
			
	for(int i = 0, j = hex.size() - 1; i <= j; i++, j--) {
		std::swap(hex[i], hex[j]);
	}
			
	return hex;
};



