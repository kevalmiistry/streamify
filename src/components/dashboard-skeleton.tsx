import { Skeleton } from "./ui/skeleton";

const DashboardSkeleton = () => {
    return (
        <section className="mx-auto max-w-7xl p-6">
            <div className="space-y-1">
                <Skeleton className="h-10 w-[300px]" />

                <Skeleton className="h-6 w-1/2" />
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Skeleton className="h-[200px] rounded-xl" />
                <Skeleton className="h-[200px] rounded-xl" />
                <Skeleton className="h-[200px] rounded-xl" />
                <Skeleton className="h-[200px] rounded-xl" />
            </div>

            <div className="mt-16 flex flex-col gap-10 md:flex-row">
                <div className="flex gap-6 pr-10 md:border-r">
                    <Skeleton className="md:w-4h-40 h-36 w-36 shrink-0 overflow-hidden rounded-xl object-contain md:h-40 lg:h-64 lg:w-64" />
                    <div className="mt-4">
                        <Skeleton className="h-12 w-[180px]" />
                        <div className="mt-4 flex gap-2">
                            <Skeleton className="h-8 w-[60px]" />
                            <Skeleton className="h-8 w-[60px]" />
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <Skeleton className="h-16 w-[400px]" />
                    <Skeleton className="h-16 w-[400px]" />
                    <Skeleton className="h-16 w-[400px]" />
                </div>
            </div>

            <div className="mt-16 space-y-6">
                <Skeleton className="h-[350px] w-full" />

                <div className="grid grid-cols-5 gap-6">
                    <Skeleton className="col-span-5 h-[350px] rounded-xl lg:col-span-2" />
                    <Skeleton className="col-span-5 h-[350px] rounded-xl lg:col-span-3" />
                </div>
            </div>
        </section>
    );
};

export default DashboardSkeleton;
