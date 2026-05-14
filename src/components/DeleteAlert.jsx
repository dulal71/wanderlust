"use client";



import { Delete } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";




const DeleteAlert = ({destination}) => {
    const {_id,destinationName}=destination
   const handleDelete=async()=>{
const res = await fetch(`http://localhost:5000/destinations/${_id}`,{
     method:'DELETE',
     headers:{
      "Content-type":"application/json"
     }
    
  })
 const data = await res.json()
 console.log(data);
 if(data.deletedCount >0){
 toast.success("Delete successfully") 
redirect('/destinations')
 }


   }
    return (
          <AlertDialog>
      <Button  variant="danger" ><Delete></Delete>Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong className="font-bold underline">{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteAlert;