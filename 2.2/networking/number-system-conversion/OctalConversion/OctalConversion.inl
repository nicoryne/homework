#include<math.h>

int OctalConversion :: octalToDecimal (int octal) {
		int result = 0;
		int base = 0, rem;
			
		while(octal != 0) {
			rem = octal % 10;
			octal /= 10;
			result += rem * pow(8, base);
			++base;
		}
	return result;
};

int OctalConversion :: octalToBaseN (int octal, int n) {
	if(n == 10) {
	 return octalToDecimal(octal);
	}
	int decimal = octalToDecimal(octal);
	return decimalToBaseN(decimal, n);
}
		
std::string OctalConversion :: octalToHex (int octal) {
	int decimal = octalToDecimal(octal);
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

int OctalConversion :: decimalToBaseN (int decimal, int n) {
		int result = 0;
		int product = 1, rem;
			
		while(decimal != 0) {
			rem = decimal % n;
			decimal /= n;
			result += rem * product;
			product *= 10;
		}
	return result;
};
		






