import React from 'react';

interface TeamCardProps {
    school: string;
    mascot: string;
    location: string;
    conference: string;
    division: string;
}

function TeamCard({ school, mascot, location, conference, division }: TeamCardProps) {
    return (
        <div>
            <h2>{school}</h2>
            <p>Mascot: {mascot}</p>
            <p>Location: {location}</p>
            <p>Conference: {conference}</p>
            <p>Division: {division}</p>
        </div>
    );
}

export default TeamCard;
