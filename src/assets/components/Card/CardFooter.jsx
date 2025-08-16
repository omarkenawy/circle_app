import React from 'react'
import { Button, Input } from "@heroui/react";
import userLogo from '../../icon-7797704_640.png'
export default function CardFooter({ cphoto, cname, cdate, ccontent }) {
    return <>

        <div className="comment bg-gray-400 -m-3 -mx-3 p-3  mt-3 border-b-1">

            <div className="w-full h-16 items-center flex justify-between ">
                <div className="flex">
                    <img onError={(e) => e.target.src = userLogo} className=" rounded-full w-10 h-10 mr-3" src={cphoto} />
                    <div>
                        <h3 className="text-md font-semibold ">{cname}</h3>
                        <p className="text-xs text-gray-500">{cdate}</p>
                    </div>
                </div>
                <svg className="w-16" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
            </div>
            <p className="p-3">{ccontent}</p>
        </div>
    </>
}
