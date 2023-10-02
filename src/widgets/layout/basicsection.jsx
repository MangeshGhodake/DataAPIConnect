import { Navbar, Typography } from "@material-tailwind/react";

export function BasicSection() {
  return (
    <div className="pl-4 pt-2">
      <div className="py-1">
        <Typography variant="h4" id="basic">
          Basic
        </Typography>
      </div>
      <Typography variant="body2" className="py-1">
        This documentation uses a couple notes and documentation conventions
        that will be explained in this section.
      </Typography>
      <div className="py-1 pl-8">
        <Typography variant="body2">
          <ul className="list-disc">
            <li>
              Data API Connect uses Access_token to handle communication between
              your application and our API. Access_token is required in the
              header of each request.
            </li>
            <li>
              Authentication is always required. To simplify the examples,
              however, the documentation will frequently omit showing the token
              header.
            </li>
            <li>
              Your account credentials or authorization token should not, in any
              circumstances, be shared with anyone else. Should either one be
              compromised, you will need to immediately request new credentials
              and a new token, or cancel your account. You are responsible for
              any costs incurred while accessing the API with your credentials.
            </li>
            <li>Only secure HTTPS requests are supported.</li>
          </ul>
        </Typography>
      </div>
    </div>
  );
}

BasicSection.displayName = "/src/widgets/layout/basicsection.jsx";

export default BasicSection;
