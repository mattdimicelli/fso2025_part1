import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
const Statistics = ({ good, neutral, bad}) => (
  <table>
    <tbody>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
    </tbody>
  </table>
)
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' onClick={() => setGood(good + 1)} />
      <Button text='Neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad'  onClick={() => setBad(bad + 1 )}/>
      <h2>Statistics</h2>
      <Statistics neutral={neutral} bad={bad} good={good} />
    </div>
  )
}

export default App