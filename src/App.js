import brnrc from './brnracing.avif';
import IEEE_logo from './IEEE_logo.jpeg';
import IEEE_robot from './IEEE_robots.jpeg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brnrc} className="App-logo" alt="brnrc" />
        <p>
          This is a link to the IEEE Homepage!
        </p>
        <a
          className="App-link"
          href="https://www.ieeebruins.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          IEEE Homepage.
        </a>
        <p>
          This is the intro to Bruin Racing, UCLA's racing team.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=5tcUT_gifZs&pp=ygUMYnJ1aW4gcmFjaW5n"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the Bruin Racing intro!
        </a>


        <h2>IEEE Achievements</h2>
        <p>
          The IEEE Bruins have numerous accolades and awards, including:
          <ul>
            <li>1st Place in the 2023 IEEE Region 6 Robotics Competition</li>
            <li>2nd Place in the 2022 IEEE Region 6 Robotics Competition</li>
            <li>3rd Place in the 2021 IEEE Region 6 Robotics Competition</li>
            <li>Outstanding Community Service Award in 2020</li>
          </ul>

        </p>

        <img src={IEEE_robot} className="App-logo" alt="robots" />

        <h2>
        What are some way's to get involved with IEEE?</h2>
        <p>
          <ul>
            <li>Attend weekly meetings every Wednesday at 7 PM in the Engineering Building, Room 123</li>
            <li>Participate in our monthly hackathons and coding challenges</li>
            <li>Join our community service projects and outreach programs</li>
            <li>Contribute to our open-source projects on GitHub</li>
          </ul>
        </p>
        <img src={IEEE_logo} className="App-logo" alt="IEEE Logo" />

        <h2>Opportunities at IEEE?</h2>
          <p>
          <ul>
            <li>Internships with leading tech companies</li>
            <li>Networking events with industry professionals</li>
            <li>Workshops and seminars on the latest technologies</li>
            <li>Access to exclusive IEEE resources and publications</li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
