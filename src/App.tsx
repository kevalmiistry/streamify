import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./contexts/theme-provider";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="container mx-auto flex items-center justify-between">
                Hello World! <ModeToggle />
            </div>
        </ThemeProvider>
    );
};

export default App;
