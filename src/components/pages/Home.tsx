import MenuBox from "../MenuBox";

function Home() {
  return (
    <main className="menu-container">
      <MenuBox title="Inbox" link="/inbox" icone="fa-envelope" />
      <MenuBox
        title="Testimonial"
        link="/write-testimonial"
        icone="fa-pen-to-square"
      />
    </main>
  );
}

export default Home;
