import { IServices } from "@/type";
import { FunctionComponent } from "react";
import { RiComputerLine } from "react-icons/ri";

const ServicesCard: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 bg-gray-200 rounded-lg lg:col-span-1">
      <RiComputerLine size={40} />
      <div>
        <h4 className="font-semibold">Frontend Development</h4>
        <p>
          I can build a beautiful and scalble SPA using <b>HTML</b>,<b>CSS </b>{" "}
          and <b>React JS </b>
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
