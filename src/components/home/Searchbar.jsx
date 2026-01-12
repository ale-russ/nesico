import React from "react";
import { FaSearch } from "react-icons/fa";
import Stats from "./Stats";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Searchbar = () => {
  return (
    // <div className="mx-auto px-6 md:px-0">
    //   <div className="flex flex-col items-center justify-center mx-auto h-40 border border-primary/20 w-full md:w-5/6 xl:w-2/4 rounded-xl shadow-xl shadow-primary/8 p-4">
    //     <p className="font-medium text-primary">
    //       Looking for something specific?
    //     </p>
    //     <br />
    //     <div
    //       className={`bg-[#f5f5f5] text-black/40 w-full h-12 rounded-xl border shadow-sm border-gray-400/20 text-left flex items-center relative`}
    //     >
    //       <input
    //         placeholder="Search here..."
    //         className="w-full h-full resize-none px-2 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-gray-500 rounded-xl shadow-sm text-sm flex items-center"
    //       />
    //       <div className="h-full w-10 bg-primary flex items-center justify-center rounded-r-xl cursor-pointer shadow-sm absolute inset-y-0 right-0">
    //         <FaSearch color="white" />
    //       </div>
    //     </div>
    //   </div>
    //   <br />

    //   {/* <Stats /> */}
    // </div>
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Looking for something specific?
          </h2>
          <div className="flex gap-2">
            <Input placeholder="Search for insurance..." className="flex-1" />
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
