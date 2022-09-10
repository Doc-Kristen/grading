import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundPage from 'components/not-found-page/not-found-page';

import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'helps/const';
import { mockQuest } from '../../helps/mock';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuest
            quest={mockQuest} />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;