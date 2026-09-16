import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

  const statusClassName = matchStatus === 'Won' ? 'match-won' : 'match-lost'

  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="card-competing-team">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`card-status ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
