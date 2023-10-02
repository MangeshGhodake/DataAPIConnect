import { Navbar, Typography } from "@material-tailwind/react";
import { Snippet } from "@/widgets/layout";
export function Request() {
  const payload = {
    phone: "Wireless",
    state: ["TX", "UT"],
    city: ["Rockwall", "Smiley"],
    zip: ["75032", "75087"],
    min_age: "50",
    max_age: "60",
    record: 1,
  };
  return (
    <div className="pl-4 pt-2">
      <div className="py-1">
        <Typography variant="h4" id="basic">
          Request
        </Typography>
      </div>
      <Typography variant="body2" className="py-1">
        All request are made via an HTTP POST request with header information
        that includes &quot;accept: application/json&quot;, &quot;Access_toekn:
        ***&quot;, and &quot;Content-Type: application/json&quot;.
      </Typography>
      <div className="py-1">
        <Typography variant="h5" className="text-gray-700" id="basic">
          Request Example
        </Typography>
      </div>
      <Snippet
        title="cURL"
        code={
          "curl -X 'POST' 'http://20.237.23.9/api' -H 'accept: application/json' -H 'access_token: ************' -H 'Content-Type: application/json'"
        }
      ></Snippet>
      <Snippet title="Request URL" code={"http://20.237.23.9/api"}></Snippet>
      <Snippet
        title="Request Body"
        code={JSON.stringify(payload, null, 2)}
      ></Snippet>
    </div>
  );
}

Request.displayName = "/src/widgets/layout/request.jsx";

export default Request;
