package main

import "fmt"

func main() {
	fmt.Println("Let's learn pointers")

	// declaring a pointer
	// var my_pointer *int
	// fmt.Println("Value of pointer is", my_pointer)

	myNumber := 23

	var new_pointer *int = &myNumber
	fmt.Println(new_pointer)

}
