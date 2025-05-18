import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const Roomtype = ({SelectedRoomType}) => {

  

  return (
    <div>
      <span className="text-slate-400">Select room type*</span>
      <Select onValueChange={(value)=>SelectedRoomType(value)}>
        <SelectTrigger className="w-full" >
          <SelectValue placeholder="Room type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Living-Room">Living Room</SelectItem>
          <SelectItem value="Bed-Room">Bed Room</SelectItem>
          <SelectItem value="Kitchen-Room">Kitchen Room</SelectItem>
          <SelectItem value="Office-Room">Office Room</SelectItem>
          <SelectItem value="Bath-Room">Bath Room</SelectItem>

        </SelectContent>
      </Select>
    </div>
  );
};

export default Roomtype;
