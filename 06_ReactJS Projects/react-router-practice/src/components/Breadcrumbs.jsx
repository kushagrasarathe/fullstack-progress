import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  console.log(location);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, id) => {
      currentLink += `/${crumb}`;
      return (
        <div key={id}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div>{crumbs}</div>;
}
