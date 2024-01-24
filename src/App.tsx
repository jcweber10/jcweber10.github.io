import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { globalCss, styled } from './stitches.config';
import { Home } from './components/Home';

const AppContainer = styled('div', {
  maxWidth: '540px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

export const App: React.VFC = () => {
  globalCss();

  return (
    <AppContainer>
      <Switch>
        <Route
          // path="*"
          component={() => {
            window.location.href =
              'https://www.laughingatmynightmare.com/5kfun';
            return null;
          }}
        />
      </Switch>
    </AppContainer>
  );
};
