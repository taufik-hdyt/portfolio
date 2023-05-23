import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IServices } from "./type";

export const services: IServices[] = [
  {
    title: "Frontend Dev",
    about:
      "I can build a beautiful and scalble SPA using <b>HTML</b>,<b>CSS </b> and <b>React JS </b> ",
    icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Handle database, server, api using <b>express</b> and other popular framework",
    icon: FaServer,
  },
];
