import { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GlobalStyle from './styles/globalStyles';
import Context from './context/Context';
import SignUp from './pages/SignUp';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  const { theme } = useContext(Context);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  );
}
