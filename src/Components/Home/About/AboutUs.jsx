import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="hero md:min-h-screen">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative">
          <img src={person} className=" rounded-lg shadow-2xl w-[473px]" />
          <img
            className="w-[337px] border-8 border-white  rounded-lg shadow-2xl absolute top-1/2 left-[30%]"
            src={parts}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#FF3811]">About Us</h3>
          <h1 className="text-5xl font-bold md:w-1/2">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button className="btn border-0 bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
