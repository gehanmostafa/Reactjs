
const About = () => {
  return (
      <div className=" bg-aboutImage relative   bg-center mt-11 bg-cover w-full h-[50vh] ">
          <div className="   absolute text-lg font-semibold leading-[50px] inset-0 bg-[#FFF6F6] opacity-80  flex justify-center items-center flex-col ">
      <p className="font-bold">We have the power to make your vision at reality by</p>
      <div className="flex justify-between  items-center w-[50%]  pl-6 ">
        <ul >
          <li>Efficient solutions.</li>
          <li>Innovative designs.</li>
          <li>Excellent engineering.</li>
              </ul>
              <ul className="list-disc p-4">
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
