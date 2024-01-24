import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';

const LamnLink: React.VFC = () => (
  <InteractiveLink href="https://www.laughingatmynightmare.com/5kfun">
    here
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <P>Redirecting to the LAMN website...</P>
    <P>
      If you are not redirected, please click <LamnLink />
    </P>
  </div>
);
