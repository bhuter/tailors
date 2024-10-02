import Link from "next/link";
import React from "react";

const Updates = () =>{
    return (
        <>
        <div className="bg-orange-500 bg-opacity-30 p-10 flex items-center justify-center flex-wrap">
        <div className="box p-2 m-2 text-center mx-5">
            <div className="count text-4xl text-white font-semibold">100+</div>
            <p className="text-sm text-sky-800 py-3">Sudents</p>
        </div>
        <div className="box p-2 m-2 text-center mx-5">
            <div className="count text-4xl text-white font-semibold">2+</div>
            <p className="text-sm text-sky-800 py-3">Operational District</p>
        </div>
        </div>
        </>
    );

}
export default Updates;