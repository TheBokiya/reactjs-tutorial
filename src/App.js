import React from 'react'
// import Header from './components/Header'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
// import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'
import Joke from './components/Joke'
import jokesData from './data/jokesData'

function App() {

  const jokeComponents = jokesData.map(joke => 
    <Joke 
      key={joke.id} 
      question={joke.question} 
      punchline={joke.punchline}/>
  )

  return (
    <div>
      <ContactCard 
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"  
        phone="(212) 555-1234"
        email="mr.whiskaz@catmeow.com"
      />

      {jokeComponents}
    </div>
  )
}

export default App