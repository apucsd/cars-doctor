/* eslint-disable react/prop-types */
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  /*eslint-disable no-unused-vars*/
  const { _id, service_id, title, img, price } = service;
  console.dir(service);
  return (
    <div className="rounded shadow">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-around">
          <p className="text-[red] font-bold">Price : ${price}</p>
          <span>
            <Link to={`checkout/${_id}`}>
              <HiArrowLongRight className="text-[red] text-2xl cursor-pointer"></HiArrowLongRight>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
