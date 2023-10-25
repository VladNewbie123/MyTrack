import Header from "../../untitled2/src/component/Header";
import {ThemeProvider} from "../../untitled2/src/component/ThemeContext";
import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <div className="App">
                    <Header/>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
