package main

import "fmt"

// this gives eror because this is invalid syntax and is only allowed inside function/method
// not_so_secret_token := 30560321;

// constant declaration, note constant variable should always start with capital letter, making it public and accessible to any file or program
const LoginToken string = "anything";

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
	
	// float datatype
	var smallFloat float32 = 255.25587843224542;
	fmt.Println(smallFloat);
	fmt.Printf("Variable is of type: %T \n", smallFloat);
	
	// default values
	var newVariable int;
	fmt.Println(newVariable);
	fmt.Printf("Variable is of type: %T \n", newVariable);
	
	// implicit type
	var website = "https://kushagrasarathe.me";
	fmt.Println(website);
	fmt.Printf("Variable is of type: %T \n", website);
	
	// no var style, this way of declaring variables allows us to declare variable without using var keyword, this is only allowed inside a method/function, not outside
	users := 2054056 ;
	fmt.Println(users);
	
	fmt.Println(LoginToken);
	fmt.Printf("Variable is of type: %T \n", LoginToken);
}

