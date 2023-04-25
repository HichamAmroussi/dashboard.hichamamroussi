import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  style: string;
  icone: string;
}

function Button({ title, link, style, icone }: Props) {
  return (
    <Link to={link} className={style}>
      <i className={icone}></i>
      <p>{title}</p>
    </Link>
  );
}

export default Button;
