package main

import (
	"bufio"
	"fmt"
	"os"
)

func main()  {
	greet := "Good Morning";
	// fmt.Println(greet);

	reader := bufio.NewReader(os.Stdin);
	fmt.Println("Enter your Name: ");

	// comma ok syntax, or error ok
	input, _ := reader.ReadString('\n');
	fmt.Println(greet, input)
}