import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig';

//Components
import ContainerApp from './Components/ContainerApp/ContainerApp';


 const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ContainerApp/>
        </ThemeProvider>
    )
}
export default App