import Image from "next/image";

export default function Lists() {
    return (
        <div className="flex flex-col md:flex-row mx-3 md:mx-0 h-full">
            <div className="flex flex-col bg-primary w-full md:w-1/3 h-full md:mx-10 max-md:my-3 rounded-xl text-center p-3">
                <div className="flex flex-col mb-5">
                    <h1 className="text-3xl text-white mt-3 font-bold">Lists</h1>
                    <div className="menu items-center">
                        <li><a href="/?list=Christmas" className="join-item text-accent ">Christmas</a></li>
                        <li><a href="/?list=Birthday" className="join-item text-accent">Birthday</a></li>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl text-white mt-3 font-bold">Friends</h1>
                    <div className="menu items-center">
                        <li><a href="/?list=Christmas" className="join-item text-accent">Katie</a></li>
                        <li><a href="/?list=Birthday" className="join-item text-accent">Mom</a></li>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-primary w-full md:w-2/3 h-full md:mx-10 max-md:my-3 rounded-xl text-center p-3">
                <h1 className="text-3xl text-white mt-3 font-bold">Sample List</h1>
            </div>
        </div>
    )
}