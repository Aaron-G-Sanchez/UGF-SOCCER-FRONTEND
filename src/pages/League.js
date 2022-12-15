import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById, GetPlayers } from '../services/Queries'
import LeagueInfo from '../components/LeagueInfo'
import LeagueMembers from '../components/LeagueMembers'
import TeamDisplay from '../components/TeamDisplay'
import PlayerDisplay from '../components/PlayerDisplay'
import LeagueTeams from '../components/LeagueTeams'
import NewTeamModal from '../components/NewTeamModal'
import DeleteTeamModal from '../components/DeleteTeamModal'

const League = ({
  user,
  selectedLeague,
  setSelectedLeague,
  players,
  setPlayers,
  teams,
  setTeams,
  selectedTeam,
  setSelectedTeam
}) => {
  let { id } = useParams()

  const [toggle, setToggle] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
    setTeams(response.league.teams_id)
  }

  const getPlayers = async () => {
    const response = await GetPlayers()
    setPlayers(response)
  }

  useEffect(() => {
    getLeagueById(id)
    getPlayers()
  }, [])
  return (
    <>
      <main className="league-details-dash">
        <LeagueInfo
          user={user}
          selectedLeague={selectedLeague}
          id={id}
          getLeagueById={getLeagueById}
          toggle={toggle}
          selectedTeam={selectedTeam}
          setIsOpen={setIsOpen}
        />
        <LeagueMembers selectedLeague={selectedLeague} />
        <LeagueTeams
          teams={teams}
          setSelectedTeam={setSelectedTeam}
          setIsActive={setIsActive}
        />
        <TeamDisplay
          user={user}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
        />
        <PlayerDisplay
          user={user}
          players={players}
          setSelectedTeam={setSelectedTeam}
          selectedTeam={selectedTeam}
          id={id}
        />

        {isActive ? (
          <NewTeamModal
            setIsActive={setIsActive}
            id={id}
            setTeams={setTeams}
            user={user}
          />
        ) : null}
        {isOpen ? (
          <DeleteTeamModal setIsOpen={setIsOpen} selectedTeam={selectedTeam} />
        ) : null}
      </main>
    </>
  )
}

export default League
