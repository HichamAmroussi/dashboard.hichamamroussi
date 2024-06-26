import { useEffect, useState } from "react";
// Components
import Popup from "../components/Popup";
import Button from "../components//Button";

function Testimonial() {
  const [testimonials, setTestimonials] = useState<any[] | null>(null);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const testimonial = { name, business, body };

    setIsPending(true);

    fetch("https://my-portfolio-api-hxj1.onrender.com/testimonial", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(testimonial),
    }).then(() => {
      setIsPending(false);
      setIsOpen(true);
    });
  };

  useEffect(() => {
    fetch("https://my-portfolio-api-hxj1.onrender.com/testimonial")
      .then((data) => data.json())
      .then((response) => {
        // Change Messages State
        setTestimonials(response.testimonials);
      });
  }, []);

  return (
    <main className="testimonial-container">
      <Popup open={isOpen} onClose={() => setIsOpen(false)} />

      <Button
        title="Go Back"
        link="/home"
        style="go-back-btn"
        icone="fa-solid fa-circle-arrow-left"
      />

      <h2>Write a Testimonial:</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Business Name:</label>
        <input
          type="text"
          placeholder="Business Name"
          required
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
        <label>Testimonial:</label>
        <textarea
          required
          placeholder="Testimonial"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        {!isPending && <button>Send</button>}
        {isPending && <button disabled>Sending Testimonial...</button>}
      </form>
    </main>
  );
}

export default Testimonial;
