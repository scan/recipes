import type { FunctionComponent } from 'react';

import { StyledEngineProvider } from '@material-ui/core/styles';

const Root: FunctionComponent = () => (
  <StyledEngineProvider injectFirst></StyledEngineProvider>
);

Root.displayName = 'Root';

export default Root;
