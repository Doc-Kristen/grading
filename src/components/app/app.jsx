import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from '../home/home';
import NotFoundPage from 'components/not-found-page/not-found-page';
import browserHistory from '../../browser-history';

import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'helps/const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route exact path={AppRoute.DetailedQuest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route path={AppRoute.NotFound}>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
