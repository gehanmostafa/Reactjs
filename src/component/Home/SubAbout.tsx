const About = () => {
  return (
    <div className=" bg-aboutImage relative    bg-center pt-11 bg-cover w-full min-h-[60vh] flex justify-center items-center flex-col lg:flex-row ">
      <div className="   absolute inset-0 bg-[#FFF6F6] opacity-80 text-lg font-semibold  z-0  "></div>
      <div className="absolute z-9 leading-[50px]  flex justify-center  flex-col text-center md:text-start p-2 md:p-0">
        <p className=" lg:text-2xl lg:py-3">
          We have the power to make your vision at reality by
        </p>
        <div className="flex  justify-between flex-col md:flex-row ">
          <ul>
            <li>Efficient solutions.</li>
            <li>Innovative designs.</li>
            <li>Excellent engineering.</li>
          </ul>
          <ul className="md:list-disc md:pl-6 pb-11 md:pb-0 text-center md:text-start">
            <li>Delivery on time </li>
            <li>Fitting within budget</li>
            <li>High health and safety standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
