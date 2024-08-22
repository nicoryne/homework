#include<iostream>

//	Definition file
#pragma once
template <typename T> 
class ArrayList {

public:
	ArrayList();
	~ArrayList();
	void add(T value);
	void clear();
	T get(int index) const;
	void insert(int index, T value);
	bool isEmpty() const;
	void remove(int index);
	void set(int index, T value) const;
	int size() const;
	string toString() const;
		
private:
	T *elements;
	int size;
	int capacity;
	bool isValidIndex(int index) const;
	bool isFull();
	void expandCapacity();		
};

#include "arraylist.inl"
