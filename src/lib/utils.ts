import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatNumber = (num: number, compact: boolean): string => {
    return compact
        ? new Intl.NumberFormat("en-US", { notation: "compact" }).format(num)
        : num.toLocaleString();
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
    }).format(date);
};
