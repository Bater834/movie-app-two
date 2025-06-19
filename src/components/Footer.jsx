import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
export const Footer = () => {
  return (
    <div className="bg-indigo-700 flex justify-between  md:h-[280px] px-[80px] py-[40px]">
      <div className="w-[247px] h-[200px]">
        <div className="">
          <Film />
          <h4> Movie Z</h4>
        </div>
        <div className="flex">
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex justify-between w-[913px] h-[200px]">
        <div>
          <p className="h-[20px] pb-8">Contact Information</p>
          <div className="flex justify-center items-center gap-1.5 ">
            <div>
              <Mail />
            </div>
            <div className="pb-8">
              <p> Email: </p>
              <p> support@movieZ.com</p>
            </div>
          </div>
          <div className="flex pb-8">
            <p>
              <Phone />
            </p>
            <p>Phone: </p>
            <p>+976 (11) 123-4567</p>
          </div>
        </div>
        <div className="">
          <p>Follow us </p>
          <p className="">Facebook Instagram Twitter Youtube</p>
        </div>
      </div>
    </div>
  );
};
