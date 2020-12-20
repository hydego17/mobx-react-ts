import * as React from 'react';
import { Provider } from 'mobx-react';
import { setupRootStore } from './mst/setup';

import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { EmployerComponent } from './components/Employer';

interface Props {}

interface State {
  rootTree: any;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rootTree: null,
    };
  }

  componentDidMount = () => {
    const { rootTree } = setupRootStore();

    this.setState({ rootTree });
  };

  render() {
    // Check if Root Store/Tree exist
    const { rootTree } = this.state;

    // If none return nothin
    if (!rootTree) return null;

    // Return the Store Provider
    return (
      <Provider rootTree={rootTree}>
        <ChakraProvider theme={theme}>
          <Box textAlign="center">
            <Grid minH="100vh" p={3}>
              <ColorModeSwitcher justifySelf="flex-end" />

              {/* Employer Component */}

              <EmployerComponent />
            </Grid>
          </Box>
        </ChakraProvider>
      </Provider>
    );
  }
}
