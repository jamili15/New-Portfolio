import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import prisma from "@/lib/db";
import React from "react";

const Page = async () => {
  const datas = await prisma.todo.findMany();
  console.log("DATA ====> \n\n", datas);
  return (
    <div
      style={{ backgroundImage: "url(/images/bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white bg-gray-200">
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%] max-md:left-14 ">
          <ContactForm />
        </div>
        <div className=" absolute right-[25rem] top-5 hidden">
          {/* {datas.map((data: any) => (
            <div key={data.id}>
              <p>{data.fullname}</p>
              <p>{data.email}</p>
              <p>{data.description}</p>
            </div>
          ))} */}
          <pre className="text-[10px] ">{JSON.stringify(datas, null, 2)}</pre>
        </div>
        <div className=" absolute right-20 bottom-6 w-[25%] max-md:hidden">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Page;
