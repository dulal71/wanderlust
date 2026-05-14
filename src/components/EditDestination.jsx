
import { updateData } from "@/app/lib/action";
import { getDataById } from "@/app/lib/data";
import {Envelope, PencilToLine} from "@gravity-ui/icons";
import {Button,Select, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { object, p } from "motion/react-m";
import { redirect } from "next/navigation";

const EditDestination = ({destination}) => {
    
        const {
          _id,
      destinationName,
      country,
      category,
      price,
      duration,
      departureDate,
      imageUrl,
      description
    } = destination

  const updateDestination = async (formData) => {
  'use server';

const res =  await updateData( formData,_id);


  if(res.modifiedCount > 0){
   redirect(`/destinations/${_id}`)
  }
};
  
    return (
         <Modal>
      <Button variant="secondary" className="flex items-center gap-2 px-4 border rounded-2xl"><PencilToLine></PencilToLine> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-5xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PencilToLine className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Destinations</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
               Update the destination information using the form below.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={updateDestination}
            className="p-10 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField defaultValue={destinationName} name="destinationName">
                  <Label>Destination Name</Label>
                  <Input  placeholder="Bali Paradise" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField  defaultValue={country}  name="country">
                <Label>Country</Label>
                <Input placeholder="Indonesia" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                defaultValue={category}
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField  defaultValue={price} name="price" type="number" >
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                 
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField  defaultValue={duration} name="duration">
                <Label>Duration</Label>
                <Input
               
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField defaultValue={departureDate} name="departureDate" type="date">
                  <Label>Departure Date</Label>
                  <Input  type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField  defaultValue={imageUrl} name="imageUrl" >
                  <Label>Image URL</Label>
                  <Input
                 
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField  defaultValue={description} name="description">
                  <Label>Description</Label>
                  <TextArea
                 
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
             
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
               Save
            </Button>
          </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default EditDestination;