import React from 'react';
import TeamCard from './TeamCard';
import teamData from './data/CollegeBasketballTeams.json';

// Add export keyword before the interface definition
export interface Team {
    tid: number;
    cid: number;
    did: number;
    school: string;
    name: string;
    abbrev: string;
    pop: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
}

function TeamList() {
    const teams: Team[] = teamData.teams;

    return (
        <div>
            {teams.map((team) => (
                <TeamCard
                    key={team.school}
                    school={team.school}
                    mascot={team.name}
                    location={`${team.city}, ${team.state}`}
                />
            ))}
        </div>
    );
}

export default TeamList;
