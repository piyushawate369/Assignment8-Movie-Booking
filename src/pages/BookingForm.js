import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/success", { state: form });
  };

  return (
    <div className="page">
  <div className="form">
    <h2>Book Your Seat</h2>

    <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
    <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
    <input placeholder="Mobile" onChange={(e) => setForm({...form, mobile: e.target.value})} />

    <button onClick={handleSubmit}>Confirm Booking</button>
  </div>
</div>
  );
}

export default BookingForm;