import { Navbar, Typography } from "@material-tailwind/react";
import { Snippet } from "@/widgets/layout";
export function Response() {
  const header =
    "access-control-allow-credentials: true \naccess-control-allow-origin: * \ncontent-length: 2064\ncontent-type: application/json date: Tue,19 Sep 2023 08:20:56 GMT \nserver: uvicorn";
  const payload = {
    "First Name": "Barry",
    "Last Name": "Schwerdt",
    "Full Name": "Barry Schwerdt",
    Age: "60",
    "Phone Detail": [
      {
        "Phone Number": "(972) 672-1594",
        "Line Type": "Wireless",
        Carrier: "AT&T",
      },
      {
        "Phone Number": "(972) 771-0295",
        "Line Type": "Landline",
        Carrier: "Southwestern Bell Telephone Company",
      },
      {
        "Phone Number": "(214) 697-2435",
        "Line Type": "Wireless",
        Carrier: "AT&T",
      },
      {
        "Phone Number": "(214) 763-9672",
        "Line Type": "Wireless",
        Carrier: "AT&T",
      },
      {
        "Phone Number": "(214) 675-7262",
        "Line Type": "Wireless",
        Carrier: "AT&T",
      },
      {
        "Phone Number": "(214) 244-2894",
        "Line Type": "Wireless",
        Carrier: "AT&T",
      },
      {
        "Phone Number": "(972) 771-9342",
        "Line Type": "Landline",
        Carrier: "Southwestern Bell Telephone Company",
      },
    ],
    Street: "142 Stafford Dr",
    City: "Rockwall",
    State: "TX",
    PostalCode: "75032",
    "Email Addresses": [
      "bellajy@gmail.com",
      "bschwerdt@bellsouth.net",
      "bschwerdt@attb1.com",
      "gcbschwerdt@mindspring.com",
      "kbschwerdtp2@mindspring.com",
      "xbsch94werdt@mindspring.com",
    ],
    "Property Detail": {
      Bedrooms: "4",
      Bathrooms: "5",
      "Square Feet": "3,407",
      "Year Built": "2020",
      "Estimated Value": "N/A",
      "Estimated Equity": "N/A",
      "Last Sale Amount": "$851,800",
      "Last Sale Date": "09/18/2020",
      "Occupancy Type": "Owner Occupied",
      "Ownership Type": "Individual",
      "Land Use": "Single Family Residential",
      "Property Class": "Residential",
      Subdivision: "Stoneleigh Phase 5b",
      "Lot Square Feet": "24,394",
      APN: "102592",
    },
  };
  return (
    <div className="pl-4 pt-2">
      <div className="py-1">
        <Typography variant="h4" id="basic">
          Response
        </Typography>
      </div>
      <Typography variant="body2" className="py-1">
        The response header result will contain api information as well as rate
        limits, search rate limit remaining, and rate reset date.
      </Typography>
      <Snippet title="Response Header" code={header}></Snippet>
      <Snippet
        title="Response Body"
        code={JSON.stringify(payload, null, 2)}
      ></Snippet>
    </div>
  );
}

Response.displayName = "/src/widgets/layout/response.jsx";

export default Response;
