import React from "react"

function App() {
  const [advice , setAdvice] = React.useState('')
  const [get , setGet] = React.useState(false)

  function Get(){
    setGet(true)
  }
  React.useEffect(function(){
    if(get){
      
      fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
      
      .catch((error) => console.log(error))
      setGet(false)
    }
    })

  return (
    <div className="container">
      <div className="card">
        <h1 className="advice">{advice}</h1>
        <button className="btn" onClick={Get}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  )
}

export default App
