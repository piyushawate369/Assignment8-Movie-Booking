import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="page">
  <div className="success">
    <h2>Booking Successful </h2>
    <p><b>ID:</b> {bookingId}</p>
    <p><b>Name:</b> {state?.name}</p>
    <p><b>Email:</b> {state?.email}</p>
    <p><b>Mobile:</b> {state?.mobile}</p>
  </div>
</div>
  );
}

export default Confirmation;