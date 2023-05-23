import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  //bydefault get request
  res.status(200).json({ services });
  console.log(services);
};
