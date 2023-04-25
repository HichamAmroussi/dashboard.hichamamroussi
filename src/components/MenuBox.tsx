import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  icone: string;
}

function MenuBox({ title, link, icone }: Props) {
  return (
    <Link to={link} className="box-link">
      <i className={"fa-regular " + icone}></i>
      <p>{title}</p>
    </Link>
  );
}

export default MenuBox;
