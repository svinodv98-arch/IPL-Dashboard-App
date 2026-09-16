import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-card">
      <div className="latest-match-details-1">
        <p className="competing-team">{competingTeam}</p>
        <p className="match-date">{date}</p>
        <p className="match-venue">{venue}</p>
        <p className="match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-match-logo"
      />
      <hr className="separator" />
      <div className="latest-match-details-2">
        <p className="info-heading">First Innings</p>
        <p className="info-value">{firstInnings}</p>
        <p className="info-heading">Second Innings</p>
        <p className="info-value">{secondInnings}</p>
        <p className="info-heading">Man Of The Match</p>
        <p className="info-value">{manOfTheMatch}</p>
        <p className="info-heading">Umpires</p>
        <p className="info-value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
