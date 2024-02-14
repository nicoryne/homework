
std::string toXOR(std::string a, std::string b) {
	
	//	Assuming both string are of the same length
	int size = b.length();
	std::string res = "";
	
	
	//	Traverse through each bit.
	for(int i = 1; i < size; i++) {
		
		if(a[i] == b[i]) {
			//	If bits are the same, append 0 to string res
			res += "0";
		} else {
			//	If bits are not the same, append 1 to string res
			res += "1";
		}
	}
	return res;
}


std::string divideMod2(std::string dividend, std::string divisor) {
	
	//	Number of bits to be XORed at a time.
	int pick = divisor.length();
	
	int n = dividend.length();
	
	// Slicing dividend to appropriate length to be same as divisor
	std::string temp = dividend.substr(0, pick);
	
	while (pick < n) {
		if (temp[0] == '1') {
			
			//	Replace the dividend by the result of XOR and pull 1 bit down
			temp = toXOR(divisor, temp) + dividend[pick];
		} else {
			
			//	If leftmost bit is '0'
			temp = toXOR(std::string(pick, '0'), temp) + dividend[pick];
		}
		
		pick += 1;
	}
	
	if(temp[0] == '1') {
		temp = toXOR(divisor, temp);
	} else {
		temp = toXOR(std::string(pick, '0'), temp);
	}
	
	return temp;
}
void encodeData(std::string data, std::string key) {
	
	int l_key = key.length();
	
	std::string appended_data = (data + std::string(l_key - 1, '0'));
	
	std::string remainder = divideMod2(appended_data, key);
	
	std::string codeword = data + remainder;
	
	std::cout << "Remainder: " << remainder << "\n";
	std::cout << "Encoded data (Data + Remainder) : " << codeword << "\n"; 
}

void receiver(std::string data, std::string key) {
    std::string currxor = divideMod2(data.substr(0, key.size()), key);
    int curr = key.size();
    while (curr != data.size()) {
        if (currxor.size() != key.size()) {
            currxor.push_back(data[curr++]);
        }
        else {
            currxor = divideMod2(currxor, key);
        }
    }
    if (currxor.size() == key.size()) {
        currxor = divideMod2(currxor, key);
    }
    if (currxor.find('1') != std::string::npos) {
        std::cout << "there is some error in data" << std::endl;
    }
    else {
        std::cout << "correct message received" << std::endl;
    }
}
