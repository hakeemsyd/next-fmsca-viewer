import DataTable from "@/components/DataTable";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
                <DataTable />
            </main>
        </div>
    );
}
