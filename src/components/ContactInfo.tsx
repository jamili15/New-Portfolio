import React from "react";
import Image from "next/image";
import { Button } from "./lib-components/io/Button";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div>
        <Image
          src="/images/kevin_1.jpg"
          height={210}
          width={210}
          alt="me"
          className="rounded-xl"
        />
      </div>
      <div>
        <a href="/cv/James-Resume-2023-.docx" download>
          <Button>Download CV</Button>
        </a>
      </div>

      <div className="uppercase font-bold">
        Phone Number:{" "}
        <a
          href="tel:09561473853"
          className="font-normal border-b-2 border-black"
        >
          09561473853
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
