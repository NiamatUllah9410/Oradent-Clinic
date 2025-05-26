import Image from "next/image";

const CallButton = () => {
  return (
    <div className="fixed left-12 bottom-[115px] z-50">
      <a
        href="tel:+923249134745"
        className="bg-[#06a3da] bg-opacity-70 rounded-full flex items-center justify-center w-[66px] h-[66px]"
      >
        <Image
          src="/images/callIcon.png"
          alt="Call"
          width={42}     
          height={42}
          className="z-100"  
        />
      </a>
    </div>
  );
};

export default CallButton;
