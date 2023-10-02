import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function DashboardFooter({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, Data API Connect
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="px-1 py-0.5 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

DashboardFooter.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

DashboardFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

DashboardFooter.displayName = "/src/widgets/layout/dashboard-footer.jsx";

export default DashboardFooter;
