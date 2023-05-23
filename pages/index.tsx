import Image from "next/image";
import { Inter } from "next/font/google";
import { services } from "../data";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import ServicesCard from "@/Components/ServicesCard";
import { IServices } from "@/type";

const inter = Inter({ subsets: ["latin"] });

const index = ({ services }: any) => {
  console.log(services);

  return (
    <div>
      <h5>
        Halo, saya seorang frontend web developer dengan pengalaman 1 Tahun
        kerja.
      </h5>
      <div className="flex-grow bg-gray-400">
        <div className="p-4 mt-5">
          <h6 className="my-4 text-xl font-bold tracking-wide">
            What is Offer
          </h6>
          <div className="grid grid-cols-2 gap-4">
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
