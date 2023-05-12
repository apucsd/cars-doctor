import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Checkout = () => {
  const loadedService = useLoaderData();
  const { price, title } = loadedService;

  const { user } = useContext(AuthContext);
  // const [service, setService] = useState(loadedService);
  const confirmOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const message = form.message.value;
    // console.log(form.message);

    // eslint-disable-next-line no-unused-vars
    const booking = {
      customerName: firstName + lastName,
      phone,
      email,
      date,
      price,
      message,
    };
    // console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order added successfully");
        }
      });
  };
  return (
    <div className="my-8 bg-[#F3F3F3] rounded">
      <div className=" md:p-[90px] p-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ff0000e0]">
          <span>BOOK: </span> {title}
        </h2>
        <form onSubmit={confirmOrder} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="input input-bordered w-full "
              defaultValue={user?.email}
            />
          </div>
          <div className="flex gap-4">
            <input
              type="date"
              placeholder="Order date"
              name="date"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              defaultValue={price}
              name="price"
              className="input input-bordered w-full "
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full h-[200px]"
          ></textarea>
          <button
            className="p-3 rounded text-white hover:bg-[#ff2111] btn-block bg-[#FF3811]"
            type="submit"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
