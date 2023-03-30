import React from 'react';

interface TeamCardProps {
    school: string;
    mascot: string;
    location: string;
}

function TeamCard({ school, mascot, location }: TeamCardProps) {
    return (
        <div>
            <h2>{school}</h2>
            <p>Mascot: {mascot}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default TeamCard;
