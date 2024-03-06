import { ActiveList, AllLists } from "@/components/Lists";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[80vh]">
      <div className="drawer md:drawer-open h-full">
        <input id="wishes-drawer-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full md:w-3/4">
          <ActiveList />
        </div> 
        <div className="drawer-side md:w-1/4">
          <label htmlFor="wishes-drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label> 
            <AllLists />  
        </div>
      </div>
    </div>
  );
}
