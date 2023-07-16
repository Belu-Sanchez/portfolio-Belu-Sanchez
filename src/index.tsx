import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  Dashboard, ProjectsPage, ResumePage, SkillsPage } from './pages';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="skills" element={<SkillsPage/>} />
        <Route path="projects" element={<ProjectsPage/>} />
        <Route path="resume" element={<ResumePage/>} />
      </Route>
    </Routes>
  </ BrowserRouter>
)
