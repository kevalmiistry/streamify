import { createServer } from "miragejs";
import { data } from "./data";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const makeServer = () => {
    createServer({
        routes() {
            this.namespace = "api"; // All routes start with /api/

            this.get("/dashboard", async () => {
                await wait(2000);
                return data;
            });
        },
    });
};
