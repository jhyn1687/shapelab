import React, {Component} from 'react';
import Head from 'next/head'
import Link from "next/link"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';


interface AppState {
  
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // React.useEffect(() => {
    //   // Remove the server-side injected CSS.
    //   const jssStyles = document.querySelector('#jss-server-side');
    //   if (jssStyles && jssStyles.parentElement) {
    //     jssStyles.parentElement.removeChild(jssStyles);
    //   }
    // }, []);

    return (
      <div>
        <head>
          <title>ShapeLAB</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <body>
          <React.Fragment>
            <CssBaseline />
            <Link href="/publications">
              <Button>Link</Button>
            </Link>
              
          </React.Fragment>
        </body>
      </div>
    )
  }
}

export default App;
