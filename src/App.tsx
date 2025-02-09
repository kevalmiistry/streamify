import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./contexts/theme-provider";
import Dashboard from "./pages/dashboard";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex items-center justify-between px-6 py-4">
                <span className="font-gold text-5xl font-semibold text-teal-500">Streamify!</span>

                <ModeToggle />
            </div>

            <Dashboard />
        </ThemeProvider>
    );
};

export default App;
