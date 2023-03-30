import React from 'react';
import TeamCard from './TeamCard';
import teamData from './data/CollegeBasketballTeams.json';

interface Team {
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
    conference: string;
    division: string;
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
                    conference={team.conference}
                    division={team.division}
                />
            ))}
        </div>
    );
}

export default TeamList;
