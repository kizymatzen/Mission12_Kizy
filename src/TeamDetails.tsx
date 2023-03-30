import React from 'react';
import { Team } from './TeamList';

interface TeamDetailsProps {
    team: Team;
}

function TeamDetails({ team }: TeamDetailsProps) {
    return (
        <div>
            <h2>{team.school}</h2>
            <p>Mascot: {team.name}</p>
            <p>Location: {team.city}, {team.state}</p>
            <p>Conference: {team.conference}</p>
            <p>Division: {team.division}</p>
            <p>Population: {team.pop}</p>
        </div>
    );
}

export default TeamDetails;
