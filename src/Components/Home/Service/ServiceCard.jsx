/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
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
            <svg
              fill="#ff0000"
              height="64px"
              width="64px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-490 -490 1470.00 1470.00"
              xmlSpace="preserve"
              stroke="#ff0000"
              strokeWidth="0.0049"
              transform="matrix(1, 0, 0, -1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <polygon points="247.773,8.081 175.407,82.05 295.118,199.145 0,199.145 0,306.14 279.496,306.14 175.407,407.949 247.773,481.919 490,245.004 "></polygon>{" "}
                  </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                  <g> </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
