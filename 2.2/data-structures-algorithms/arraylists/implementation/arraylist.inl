

template<typename T>
ArrayList<T> :: ArrayList() {
	capacity = 10;
	elements = new T[capacity];
	size = 0;
};

template <typename T>
ArrayList<T> :: ~ArrayList() {
	delete elements[];
};

template <typename T>
void ArrayList<T> :: add(T value) {
	if(isFull()) expandCapacity();
	elements[size++] = value;
};

template <typename T>
void ArrayList<T> :: clear() {
	size = 0;
	capacity = 10;
	delete []elements;
	*elements = new T[capacity];	
};

template <typename T>
T ArrayList<T> :: get(int index) {
		
};
