
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">

      <Router >
      <Routes >
        <Route path="/" element= {<SignUpPage />} />

        {/* <Route element={<PrivateRoutes />}>
          <Route path="/profile" element {<Profile />} />
          <Route path="/podcasts" element {<Podcasts />} />
          <Route path="/create-podcast" element {<CreatePodcast />} />
          <Route path="/podcast/:podcastId" element {<PodcastDetails />} />
          <Route path="/podcast/:podcastId/create-episode" element {<CreateEpisode />} />
        </Route> */}

      </Routes> 
      </Router>
    </div>
  );
}

export default App;
