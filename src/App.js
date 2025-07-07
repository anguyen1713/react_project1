import brnrc from './brnracing.avif';
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
        <h4>IEEE Achievements</h4>
        <p>
          The IEEE Bruins have numerous accolades and awards, including:
          <ul>
            <li>1st Place in the 2023 IEEE Region 6 Robotics Competition</li>
            <li>2nd Place in the 2022 IEEE Region 6 Robotics Competition</li>
            <li>3rd Place in the 2021 IEEE Region 6 Robotics Competition</li>
            <li>Outstanding Community Service Award in 2020</li>
          </ul>

        </p>
        <p>
        What are some way's to get involved with IEEE?
          <ul>
            <li>Attend weekly meetings every Wednesday at 7 PM in the Engineering Building, Room 123</li>
            <li>Participate in our monthly hackathons and coding challenges</li>
            <li>Join our community service projects and outreach programs</li>
            <li>Contribute to our open-source projects on GitHub</li>
          </ul>
        </p>
        <p>Opportunities at IEEE?
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
