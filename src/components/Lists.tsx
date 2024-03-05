import Image from "next/image";

export default function Lists() {
    return (
        <div className="flex flex-col md:flex-row mx-3 md:mx-0">
            <div className="flex flex-col bg-gray-box w-full md:w-1/3 h-full md:mx-10 max-md:my-3 rounded-xl text-center p-3">
                <h1 className="text-3xl text-white">Lists</h1>
            </div>
            <div className="flex flex-col bg-gray-box w-full md:w-2/3 h-full md:mx-10 max-md:my-3 rounded-xl text-center p-3">
                <h1 className="text-3xl text-white">Sample List</h1>
                
            </div>
        </div>
    )
}