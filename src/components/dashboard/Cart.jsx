import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refatch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refatch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg p-0 m-0 rounded-full hover:bg-transparent hover:border-0 border-0"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>${totalPrice}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
