import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModeToggle } from "./components";
import { ThemeProvider } from "./contexts/theme-provider";
import Dashboard from "./pages/dashboard";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="flex items-center justify-between border-b px-6 pb-4 pt-2">
                    <span className="font-gold text-5xl font-semibold text-teal-500">
                        Streamify!
                    </span>

                    <ModeToggle />
                </div>

                <Dashboard />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
