import React from 'react'

export default function CardHeader({photo,name,date}) {
    return <>

        <div className="w-full h-16 items-center flex justify-between ">
                <div className="flex">
                    <img className=" rounded-full w-10 h-10 mr-3" src={photo} />
                    <div>
                        <h3 className="text-md font-semibold ">{name}</h3>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>
                <svg className="w-16" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
            </div>
    </>
}
