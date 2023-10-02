import { Navbar, Typography } from "@material-tailwind/react";

export function StatusCode() {
  return (
    <div className="pl-4 pt-2">
      <div className="py-1">
        <Typography variant="h4" id="basic">
          Status Code
        </Typography>
      </div>
      <Typography variant="body2" className="py-1">
        When making API requests, there are several different HTTP status codes
        you may receive. If the status code is 200, everything is great. All
        other status codes indicate an error in processing the request.
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>200 OK</strong>
        <p>The request was successful.</p>
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>400 BAD REQUEST</strong>
        <p>Missing required fields.</p>
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>401 UNAUTHORIZED</strong>
        <p>Invalid credentials or expired token.</p>
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>402 PAYMENT REQUIRED</strong>
        <p>Insufficient Funds.</p>
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>500 INTERNAL SERVER ERROR</strong>
        <p>Unexpected error has occurred.</p>
      </Typography>
      <Typography variant="body2" className="py-1">
        <strong>503 TEMPORARILY UNAVAILABLE</strong>
        <p>The server is offline and not available.</p>
      </Typography>
    </div>
  );
}

StatusCode.displayName = "/src/widgets/layout/statuscode.jsx";

export default StatusCode;
