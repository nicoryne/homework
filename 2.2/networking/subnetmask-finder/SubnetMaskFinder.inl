
SubnetMaskFinder::getBitsFromHost(int host) {
	int bits = 1, ctr = 0;
	while(bits < host) {
		bits *= 2;
		ctr++;
	}
	return ctr;
}

SubnetMaskFinder:: getBitsFromIP(std::string ipAddress) {
	int a = 0, b = 0, c = 0, d = 0;
	char ch = '.';
	
	ipAddress >> a >> ch >> b >> ch >> c >> ch >> d;
	
}
