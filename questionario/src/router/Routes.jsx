import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Fragment } from 'react';
import { HeaderBar } from '../components/layout/header/Header';

import { ContentContainer } from '../components/views/content/ContentContainer';
import { QuizzesDone } from '../components/views/quizzesDone/QuizzesDone';
import { QuizzesDoneContainer } from '../components/views/quizzesDone/QuizzesDoneContainer.';

const history = createBrowserHistory({});
const Routes = () => {
    return ( 
    <Router history={history}>
        <Fragment>
          <HeaderBar />
          <Switch>
            <Route exact path="/quizzesDone" component={QuizzesDoneContainer}>
            </Route>
            <Route path="/" component={ContentContainer}>
            </Route>
          </Switch>
        </Fragment>    
      </Router> );
}

export {Routes, history};