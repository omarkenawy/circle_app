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
            </div>
    </>
}
