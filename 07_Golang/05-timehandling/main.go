package main

import (
	"fmt"
	"time"
)

func main()  {
	fmt.Println("Welcome!!!")

	presentTime := time.Now()
	fmt.Println(presentTime)
	fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))
	fmt.Println(presentTime.Format("01-02-2006"))
	fmt.Println(presentTime.Format("15:04:05"))
	fmt.Println(presentTime.Format("Monday"))

	// creating date
	createdDate := time.Date(2021, time.January, 02, 13, 30, 0, 0, time.UTC)

	fmt.Println(createdDate.Format("01-02-2006 15:04:05 Monday"))
}