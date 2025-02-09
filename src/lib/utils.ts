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
