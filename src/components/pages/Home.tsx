import Button from "../Button";

function Home() {
  return (
    <main className="home-container">
      <Button
        title="Inbox"
        link="/inbox"
        style="box-link"
        icone="fa-regular fa-envelope"
      />
      <Button
        title="Testimonial"
        link="/write-testimonial"
        style="box-link"
        icone="fa-regular fa-pen-to-square"
      />
    </main>
  );
}

export default Home;
