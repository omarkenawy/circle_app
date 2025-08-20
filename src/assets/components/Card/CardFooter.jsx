import React, { useContext } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import userLogo from '../../icon-7797704_640.png'
import { authContext } from '../../context/AuthContext';
// export default function CardFooter({ cphoto, cname, cdate, ccontent, }) {


//     let { userData, userComment } = useContext(authContext)

//     return <>

//         <div className="comment bg-gray-400 rounded-b-lg -m-3 -mx-3 p-3  mt-3 border-b-1">

//             <div className="w-full h-16 items-center flex justify-between ">
//                 <div className="flex">
//                     <img onError={(e) => e.target.src = userLogo} className=" rounded-full w-10 h-10 mr-3" src={cphoto} />
//                     <div>
//                         <h3 className="text-md font-semibold ">{cname}</h3>
//                         <p className="text-xs text-gray-500">{cdate}</p>
//                     </div>
//                 </div>
//                 {(userData?._id === comment.commentCreator?._id || userData?._id === post.postCreator?._id) && <Dropdown>
//                     <DropdownTrigger>
//                         <Button ><svg className="w-16" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></Button>
//                     </DropdownTrigger>
//                     <DropdownMenu aria-label="Static Actions">
//                         <DropdownItem key="edit">Edit comment</DropdownItem>
//                         <DropdownItem key="delete" className="text-danger" color="danger">
//                             Delete comment
//                         </DropdownItem>
//                     </DropdownMenu>
//                 </Dropdown>}


//             </div>
//             <div className="flex justify-between">
//                 <p className="p-3">{ccontent}</p>

//             </div>

//         </div>
//     </>
// }



export default function CardFooter({ comment, userData, post }) {
  return (
    <div className="flex items-center justify-between mt-2 bg-gray-400">
      <div>
        <p className="font-bold">{comment.commentCreator.name}</p>
        <p>{comment.content}</p>
      </div>

      {(userData?._id === comment.commentCreator?._id || userData?._id === post.user?._id) && (
        <Dropdown>
          <DropdownTrigger>
            <Button>
              <svg className="w-6" width={27} height={27} viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round">
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
                <circle cx={5} cy={12} r={1} />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">Edit comment</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete comment
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}
