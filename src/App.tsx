import { Provider } from 'react-redux';
import store from './store'; // Путь к вашему хранилищу Redux
import Header from "../../untitled2/src/component/Header";
import {ThemeProvider} from "./component/ThemeContext";
import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <div className="App">
                        <Header/>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
