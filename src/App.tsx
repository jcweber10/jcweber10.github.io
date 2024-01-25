import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { globalCss, styled } from './stitches.config';
import { HomeRedirectComponent } from './components/Home';

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
        <Route component={HomeRedirectComponent} />
      </Switch>
    </AppContainer>
  );
};
