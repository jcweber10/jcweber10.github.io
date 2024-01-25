import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';

const lamnUrl = 'https://www.laughingatmynightmare.com/5kfun';

export const HomeRedirectComponent: React.VFC = () => {
  React.useEffect(() => {
    window.location.href = lamnUrl; // Redirect to external site
  }, [lamnUrl]);

  return (
    <div>
      <P>Redirecting to the LAMN website...</P>
      <P>
        If you are not redirected, please click <LamnLink />
      </P>
    </div>
  );
};

const LamnLink: React.VFC = () => (
  <InteractiveLink href={lamnUrl}>here</InteractiveLink>
);
