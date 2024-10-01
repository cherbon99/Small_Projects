package main

import (
	"fmt"
	"encoding/json"
	"bytes"
	"io/ioutil"
	"net/http"
)

type book struct{
	ID       string `json:"id"`
	Title    string `json:"title"`
	Author   string `json:"author"`
	Quantity int    `json:"quantity"`
}

const BASE_URL = "http://localhost:8080"

func get(){
	response, err := http.Get(BASE_URL + "/books/4")

	if err != nil {
		fmt.Println("test",err.Error())
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	var data book
	json.Unmarshal(responseData, &data)
	fmt.Println(data)
}

func post(){
	postBody := book{ID: "4", Title: "Pokemon", Author: "Ash Ketchum", Quantity: 2}
	bodyBytes, err := json.Marshal(&postBody)
	
	if err != nil {
		fmt.Println( err.Error())
		return
	}
	requestBody := bytes.NewReader(bodyBytes)
	resp, err := http.Post(BASE_URL + "/books", "application/json" , requestBody)

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	s := string(body)
	fmt.Println(s)
}

func main() {
	get()
}