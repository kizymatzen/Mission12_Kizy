import React from 'react';
import teams from './data/CollegeBasketballTeams.json';
import './App.css';

interface Team {
  school: string;
  name: string;
  abbrev: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Header(): JSX.Element {
  return (
    <header>
      <h1>College Basketball Teams</h1>
      <p>Welcome to our NCAA basketball teams website. Here, you can find information on all the basketball teams in the NCAA.</p>
    </header>
  );
}

function TeamCard(props: Team): JSX.Element {
  return (
    <div className="team-card">
      <h2>{props.school}</h2>
      <p>Mascot: {props.name}</p>
      <p>Abbreviation: {props.abbrev}</p>
      <p>Location: {props.city}, {props.state}</p>
    </div>
  );
}

function TeamList(): JSX.Element {
  return (
    <div>
      {teams.teams.map((team: Team, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}


function App(): JSX.Element {
  return (
    <div>
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
