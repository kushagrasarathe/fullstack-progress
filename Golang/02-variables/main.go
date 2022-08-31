package main

import "fmt"

func main()  {
	// string datatype
	var username string = "Kushagra Sarathe";
	fmt.Println("Hey there, I'm ", username);
	fmt.Printf("Variable is of type: %T \n", username);
	
	// boolean datatype
	var isLoggedIn bool = false;
	fmt.Println(isLoggedIn);
	fmt.Printf("Variable is of type: %T \n", isLoggedIn);
	
	// uint datatype
	var smallVal uint8 = 255;
	fmt.Println(smallVal);
	fmt.Printf("Variable is of type: %T \n", smallVal);
}