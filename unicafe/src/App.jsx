import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + bad + neutral;
  const percentGood = totalVotes === 0 ? 0 : (good/totalVotes) * 100
  const averageScore = totalVotes === 0 ? 0 : (good - bad) / totalVotes

  if (totalVotes === 0) {
    return <p>No feedback given</p>
  }
  return (
  <table>
    <tbody>
    <tr>
      <td>Good</td>
      <td>{good}</td>
      <td>{percentGood}%</td>
    </tr>
    <StatisticLine text='Neutral' value={neutral} />
    <StatisticLine text='Bad' value={bad} />
    <StatisticLine text='Total' value={totalVotes} />
    <StatisticLine text='Average' value={averageScore} />
    </tbody>
  </table>
  )
}
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