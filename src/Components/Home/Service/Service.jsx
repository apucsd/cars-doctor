import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-8">
      <div className="md:w-1/2 mx-auto text-center space-y-4">
        <h3 className=" text-lg font-bold text-center text-[#FF3811]">
          Service
        </h3>
        <h2 className="text-3xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <br />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
