import Image from "next/image";

export function ActiveList() {
    return (
            <div className="flex flex-col bg-primary h-full mx-10 max-md:my-3 rounded-xl text-center p-3">
                <h1 className="text-3xl text-white mt-3 font-bold">Sample List</h1>
            </div>
    )
}

export function AllLists() {
    return (
        <div className="w-1/3 m-3 md:flex flex-col bg-primary h-[95vh] md:mx-3 max-md:my-5 rounded-xl text-center p-3">
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
    )
}