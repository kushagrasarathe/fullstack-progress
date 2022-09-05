package main

import "fmt"

func main() {
	fmt.Println("Let's learn pointers")

	// declaring a pointer
	// var my_pointer *int
	// fmt.Println("Value of pointer is", my_pointer)

	myNumber := 23

	// here & is reference
	var new_pointer *int = &myNumber
	fmt.Println("Value of pointer is", new_pointer)
	fmt.Println("Value of pointer is", *new_pointer)

	*new_pointer = *new_pointer + 2
	fmt.Println("New Value is:", myNumber)

}
