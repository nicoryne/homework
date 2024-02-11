
int HexadecimalConversion :: hexadecimalToDecimal(std::string  hexa) {
	int res = 0, base = 1;
	for (int i = hexa.size() - 1; i >= 0; i--) {
		if(hexa[i] >= '0' && hexa[i] <= '9') {
			res += (int(hexa[i]) - 48) * base;
		} else if(hexa[i] >= 'A' && hexa[i] <= 'F') {
			res += (int(hexa[i]) - 55) * base;
		}
		base *= 16;
	}
	return res;
}
int HexadecimalConversion :: decimalToBaseN (int decimal, int n) {
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

int HexadecimalConversion :: hexadecimalToBaseN (std::string hexa, int n) {
	if(n == 10) {
		return hexadecimalToDecimal(hexa);
	}
	
	int decimal = hexadecimalToDecimal(hexa);
	return decimalToBaseN(decimal, n);
}
