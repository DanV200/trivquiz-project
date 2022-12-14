import React, { Component } from "react";

import Main from './main';
import Navbar from "./navbar";

class App extends Component {
    
  state = {
    questions: [
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "New York", isCorrect: false },
            { answerText: "London", isCorrect: false },
            { answerText: "Paris", isCorrect: true },
            { answerText: "Dublin", isCorrect: false },
          ],
        },
        {
          questionText: "Who is CEO of Tesla?",
          answerOptions: [
            { answerText: "Jeff Bezos", isCorrect: false },
            { answerText: "Elon Musk", isCorrect: true },
            { answerText: "Bill Gates", isCorrect: false },
            { answerText: "Tony Stark", isCorrect: false },
          ],
        },
        {
          questionText: "The iPhone was created by which company?",
          answerOptions: [
            { answerText: "Apple", isCorrect: true },
            { answerText: "Intel", isCorrect: false },
            { answerText: "Amazon", isCorrect: false },
            { answerText: "Microsoft", isCorrect: false },
          ],
        },
        {
          questionText: "How many Harry Potter books are there?",
          answerOptions: [
            { answerText: "1", isCorrect: false },
            { answerText: "4", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "7", isCorrect: true },
          ],
        },
        {
          questionText: "What is the capital of France?",
          answerOptions: [
            { answerText: "Paris", isCorrect: true },
            { answerText: "London", isCorrect: false },
            { answerText: "Madrid", isCorrect: false },
            { answerText: "Berlin", isCorrect: false },
          ],
        },
        {
          questionText: "What is the square root of 144?",
          answerOptions: [
            { answerText: "12", isCorrect: true },
            { answerText: "36", isCorrect: false },
            { answerText: "6", isCorrect: false },
            { answerText: "24", isCorrect: false },
          ],
        },
        {
          questionText: "Who wrote the novel 'To Kill a Mockingbird'?",
          answerOptions: [
            { answerText: "Harper Lee", isCorrect: true },
            { answerText: "F. Scott Fitzgerald", isCorrect: false },
            { answerText: "Ernest Hemingway", isCorrect: false },
            { answerText: "Mark Twain", isCorrect: false },
          ],
        },
        {
          questionText: "What is the atomic number of carbon?",
          answerOptions: [
            { answerText: "6", isCorrect: false },
            { answerText: "8", isCorrect: false },
            { answerText: "12", isCorrect: true },
            { answerText: "16", isCorrect: false },
          ],
        },
        {
          questionText: "What is the color of the sky?",
          answerOptions: [
            { answerText: "Red", isCorrect: false },
            { answerText: "Orange", isCorrect: false },
            { answerText: "Yellow", isCorrect: false },
            { answerText: "Blue", isCorrect: true },
          ],
        },
        {
          questionText: "What is the largest planet in the solar system?",
          answerOptions: [
            { answerText: "Jupiter", isCorrect: true },
            { answerText: "Saturn", isCorrect: false },
            { answerText: "Uranus", isCorrect: false },
            { answerText: "Neptune", isCorrect: false },
          ],
        },
        {
          questionText: "What is the chemical symbol for sodium?",
          answerOptions: [
            { answerText: "Na", isCorrect: true },
            { answerText: "S", isCorrect: false },
            { answerText: "So", isCorrect: false },
            { answerText: "Sn", isCorrect: false },
          ],
        },
        {
          questionText:
            "In which year did the United States declare its independence?",
          answerOptions: [
            { answerText: "1776", isCorrect: true },
            { answerText: "1783", isCorrect: false },
            { answerText: "1789", isCorrect: false },
            { answerText: "1803", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Brazil?",
          answerOptions: [
            { answerText: "São Paulo", isCorrect: false },
            { answerText: "Rio de Janeiro", isCorrect: false },
            { answerText: "Brasília", isCorrect: true },
            { answerText: "Belo Horizonte", isCorrect: false },
          ],
        },
        {
          questionText: "Which of the following is not a primary color?",
          answerOptions: [
            { answerText: "Red", isCorrect: false },
            { answerText: "Yellow", isCorrect: false },
            { answerText: "Blue", isCorrect: false },
            { answerText: "Green", isCorrect: true },
          ],
        },
        {
          questionText: "What is the capital of Spain?",
          answerOptions: [
            { answerText: "Barcelona", isCorrect: false },
            { answerText: "Madrid", isCorrect: true },
            { answerText: "Valencia", isCorrect: false },
            { answerText: "Seville", isCorrect: false },
          ],
        },
        {
          questionText: "What is the atomic number of oxygen?",
          answerOptions: [
            { answerText: "8", isCorrect: true },
            { answerText: "12", isCorrect: false },
            { answerText: "16", isCorrect: false },
            { answerText: "20", isCorrect: false },
          ],
        },
        {
          questionText: "What is the highest mountain in the world?",
          answerOptions: [
            { answerText: "Mount Everest", isCorrect: true },
            { answerText: "K2", isCorrect: false },
            { answerText: "Mount Kilimanjaro", isCorrect: false },
            { answerText: "Mount Aconcagua", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Australia?",
          answerOptions: [
            { answerText: "Sydney", isCorrect: false },
            { answerText: "Melbourne", isCorrect: false },
            { answerText: "Canberra", isCorrect: true },
            { answerText: "Perth", isCorrect: false },
          ],
        },
        {
          questionText: "What is the chemical symbol for iron?",
          answerOptions: [
            { answerText: "I", isCorrect: false },
            { answerText: "Ir", isCorrect: false },
            { answerText: "Fe", isCorrect: true },
            { answerText: "F", isCorrect: false },
          ],
        },
        {
          questionText: "What is the first name of messi?",
          answerOptions: [
            { answerText: "Dan", isCorrect: false },
            { answerText: "Cristiano", isCorrect: false },
            { answerText: "Lionel", isCorrect: true },
            { answerText: "William", isCorrect: false },
          ],
        },
        {
          questionText: "What is the best trivia game?",
          answerOptions: [
            { answerText: "Rs trivia", isCorrect: false },
            { answerText: "Jojo", isCorrect: false },
            { answerText: "TrivYali", isCorrect: true },
            { answerText: "KodKod", isCorrect: false },
          ],
        },
        {
          questionText: "Which is not a fruit?",
          answerOptions: [
            { answerText: "Tomato", isCorrect: true },
            { answerText: "", isCorrect: false },
            { answerText: "", isCorrect: false },
            { answerText: "", isCorrect: false },
          ],
        },
        {
          questionText: "What is the color of the sun?",
          answerOptions: [
            { answerText: "Yellow", isCorrect: true },
            { answerText: "Blue", isCorrect: false },
            { answerText: "Red", isCorrect: false },
            { answerText: "Grey", isCorrect: false },
          ],
        },
        {
          questionText: "What is the largest ocean in the world?",
          answerOptions: [
            { answerText: "Indian Ocean", isCorrect: true },
            { answerText: "Pacific Ocean", isCorrect: false },
            { answerText: "Atlantic Ocean", isCorrect: false },
            { answerText: "Arctic Ocean", isCorrect: false },
          ],
        },
        {
          questionText: "In what year was the first iPhone released?",
          answerOptions: [
            { answerText: "2007", isCorrect: true },
            { answerText: "2008", isCorrect: false },
            { answerText: "2009", isCorrect: false },
            { answerText: "2010", isCorrect: false },
          ],
        },
        {
          questionText: "Who wrote the novel: To the Lighthouse?",
          answerOptions: [
            { answerText: "Virginia Woolf", isCorrect: true },
            { answerText: "James Joyce", isCorrect: false },
            { answerText: "D.H. Lawrence", isCorrect: false },
            { answerText: "Ernest Hemingway", isCorrect: false },
          ],
        },
        {
          questionText: "What is the chemical symbol for the element gold?",
          answerOptions: [
            { answerText: "Au", isCorrect: true },
            { answerText: "Gd", isCorrect: false },
            { answerText: "Ag", isCorrect: false },
            { answerText: "Al", isCorrect: false },
          ],
        },
        {
          questionText: "Who was the first person to walk on the moon?",
          answerOptions: [
            { answerText: "Neil Armstrong", isCorrect: true },
            { answerText: "Buzz Aldrin", isCorrect: false },
            { answerText: "Michael Collins", isCorrect: false },
            { answerText: "John Glenn", isCorrect: false },
          ],
        },
        {
          questionText: "Who painted the famous artwork: The Starry Night?",
          answerOptions: [
            { answerText: "Vincent van Gogh", isCorrect: true },
            { answerText: "Pablo Picasso", isCorrect: false },
            { answerText: "Claude Monet", isCorrect: false },
            { answerText: "Salvador Dali", isCorrect: false },
          ],
        },
        {
          questionText: "In what year was the first World Cup held?",
          answerOptions: [
            { answerText: "1930", isCorrect: true },
            { answerText: "1950", isCorrect: false },
            { answerText: "1970", isCorrect: false },
            { answerText: "1990", isCorrect: false },
          ],
        },
        {
          questionText: "Who wrote the novel: Pride and Prejudice?",
          answerOptions: [
            { answerText: "Jane Austen", isCorrect: true },
            { answerText: "Charlotte Bronte", isCorrect: false },
            { answerText: "Emily Bronte", isCorrect: false },
            { answerText: "Louisa May Alcott", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Russia?",
          answerOptions: [
            { answerText: "Moscow", isCorrect: true },
            { answerText: "St. Petersburg", isCorrect: false },
            { answerText: "Novosibirsk", isCorrect: false },
            { answerText: "Yekaterinburg", isCorrect: false },
          ],
        },
        {
          questionText: "Who wrote the novel: War and Peace?",
          answerOptions: [
            { answerText: "Leo Tolstoy", isCorrect: true },
            { answerText: "Fyodor Dostoevsky", isCorrect: false },
            { answerText: "Anton Chekhov", isCorrect: false },
            { answerText: "Ivan Turgenev", isCorrect: false },
          ],
        },
        {
          questionText: "Who invented the light bulb?",
          answerOptions: [
            { answerText: "Thomas Edison", isCorrect: true },
            { answerText: "Benjamin Franklin", isCorrect: false },
            { answerText: "Alexander Graham Bell", isCorrect: false },
            { answerText: "James Watt", isCorrect: false },
          ],
        },
        {
          questionText: "Who wrote the novel: Moby-Dick?",
          answerOptions: [
            { answerText: "Herman Melville", isCorrect: true },
            { answerText: "Nathaniel Hawthorne", isCorrect: false },
            { answerText: "Edgar Allan Poe", isCorrect: false },
            { answerText: "Henry David Thoreau", isCorrect: false },
          ],
        },
        {
          questionText: "Who invented the steam engine?",
          answerOptions: [
            { answerText: "James Watt", isCorrect: true },
            { answerText: "George Stephenson", isCorrect: false },
            { answerText: "Isambard Kingdom Brunel", isCorrect: false },
            { answerText: "Richard Trevithick", isCorrect: false },
          ],
        },
        {
          questionText:
            "Who was the first African American to win a Nobel Prize in Literature?",
          answerOptions: [
            { answerText: "Toni Morrison", isCorrect: true },
            { answerText: "Maya Angelou", isCorrect: false },
            { answerText: "Alice Walker", isCorrect: false },
            { answerText: "James Baldwin", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of China?",
          answerOptions: [
            { answerText: "Beijing", isCorrect: true },
            { answerText: "Shanghai", isCorrect: false },
            { answerText: "Hong Kong", isCorrect: false },
            { answerText: "Tianjin", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Argentina?",
          answerOptions: [
            { answerText: "Buenos Aires", isCorrect: true },
            { answerText: "Rosario", isCorrect: false },
            { answerText: "Cordoba", isCorrect: false },
            { answerText: "Mendoza", isCorrect: false },
          ],
        },
        {
          questionText: "What is the largest mammal in the world?",
          answerOptions: [
            { answerText: "Blue Whale", isCorrect: true },
            { answerText: "Elephant", isCorrect: false },
            { answerText: "Grizzly Bear", isCorrect: false },
            { answerText: "Polar Bear", isCorrect: false },
          ],
        },
        {
          questionText: "Which of these animals is not a mammal?",
          answerOptions: [
            { answerText: "Bat", isCorrect: true },
            { answerText: "Cat", isCorrect: false },
            { answerText: "Dog", isCorrect: false },
            { answerText: "Mouse", isCorrect: false },
          ],
        },
        {
          questionText: "What is the fastest land animal?",
          answerOptions: [
            { answerText: "Cheetah", isCorrect: true },
            { answerText: "Gazelle", isCorrect: false },
            { answerText: "Lion", isCorrect: false },
            { answerText: "Pronghorn", isCorrect: false },
          ],
        },
        {
          questionText: "Which of these animals lays eggs?",
          answerOptions: [
            { answerText: "Chicken", isCorrect: true },
            { answerText: "Cow", isCorrect: false },
            { answerText: "Pig", isCorrect: false },
            { answerText: "Horse", isCorrect: false },
          ],
        },
        {
          questionText: "What is the tallest mammal in the world?",
          answerOptions: [
            { answerText: "Giraffe", isCorrect: true },
            { answerText: "Elephant", isCorrect: false },
            { answerText: "Moose", isCorrect: false },
            { answerText: "Camel", isCorrect: false },
          ],
        },
        {
          questionText: "Who won the first ever Super Bowl in 1967?",
          answerOptions: [
            { answerText: "Green Bay Packers", isCorrect: true },
            { answerText: "Kansas City Chiefs", isCorrect: false },
            { answerText: "Dallas Cowboys", isCorrect: false },
            { answerText: "New York Giants", isCorrect: false },
          ],
        },
        {
          questionText: "What country won the first ever FIFA World Cup in 1930?",
          answerOptions: [
            { answerText: "Uruguay", isCorrect: true },
            { answerText: "Argentina", isCorrect: false },
            { answerText: "Brazil", isCorrect: false },
            { answerText: "Spain", isCorrect: false },
          ],
        },
        {
          questionText:
            "What country won the most medals at the 2012 Summer Olympics?",
          answerOptions: [
            { answerText: "United States", isCorrect: true },
            { answerText: "China", isCorrect: false },
            { answerText: "Russia", isCorrect: false },
            { answerText: "Great Britain", isCorrect: false },
          ],
        },
        {
          questionText:
            "Who is the only tennis player in history to win a calendar-year Grand Slam?",
          answerOptions: [
            { answerText: "Steffi Graf", isCorrect: true },
            { answerText: "Serena Williams", isCorrect: false },
            { answerText: "Martina Navratilova", isCorrect: false },
            { answerText: "Chris Evert", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Israel?",
          answerOptions: [
            { answerText: "Jerusalem", isCorrect: true },
            { answerText: "Tel Aviv", isCorrect: false },
            { answerText: "Haifa", isCorrect: false },
            { answerText: "Beersheba", isCorrect: false },
          ],
        },
        {
          questionText: "Who is the current Prime Minister of Israel?",
          answerOptions: [
            { answerText: "Benjamin Netanyahu", isCorrect: true },
            { answerText: "Yair Lapid", isCorrect: false },
            { answerText: "Naftali Bennett", isCorrect: false },
            { answerText: "Avigdor Lieberman", isCorrect: false },
          ],
        },
        {
          questionText: "What is the official language of Israel?",
          answerOptions: [
            { answerText: "Hebrew", isCorrect: true },
            { answerText: "Arabic", isCorrect: false },
            { answerText: "English", isCorrect: false },
            { answerText: "Russian", isCorrect: false },
          ],
        },
      ],
    randomQuestions:[],
    

   



  };
  render() {
    return (
        
      <div>
        <div>
            <Navbar/>
        </div>
       <Main 
       questions={this.state.randomQuestions}
     
       randomQ={()=>this.randomQ()}
    />
      </div>
      
    );

    
  
  }
   randomQ=()=>{
    let questions=this.state.questions.sort(()=>Math.random()-0.5)
    this.setState({questions})
    this.setState({randomQuestions:this.state.questions.slice(0,20)})
    console.log(this.state.randomQuestions);
  }
  

}

export default App;
