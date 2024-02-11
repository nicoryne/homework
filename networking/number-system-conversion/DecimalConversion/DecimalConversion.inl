

long long int DecimalConversion :: decimalToBaseN (int decimal, int n) {
		long long int result = 0;
		int product = 1, rem;
			
		while(decimal != 0) {
			rem = decimal % n;
			decimal /= n;
			result += rem * product;
			product *= 10;
		}
	return result;
};
		
std::string DecimalConversion :: decimalToHex (int decimal) {
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


