import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Select,
  Option,
  Input,
  Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MultiSelect } from "@uc-react-ui/multiselect";
import { Snippet } from "@/widgets/layout";
import uszip from "@/data/USCityData";
import { API_SERVER } from "@/config/constant";
import { useAuth } from "@/auth-context/auth.context";

export function Tables() {
  const [state, setState] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [zip, setZip] = React.useState([]);
  const [phone, setPhone] = React.useState("");
  const [min_age, setMinAge] = React.useState(0);
  const [max_age, setMaxAge] = React.useState(0);
  const [record, setRecord] = React.useState(0);
  const [res, setRes] = React.useState("");
  const [key, setKey] = React.useState(undefined);
  const [curlcode, setCurl] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [payload, setPayload] = React.useState("");
  const [isdisplay, setDisplay] = React.useState(false);
  const [max, setMax] = React.useState(10);
  let { user } = useAuth();

  const getCities = (sta) => {
    // var abbr = [];
    // sta.map((e) => {
    //   var res = uszip.state_json
    //     .filter((data) => {
    //       return data.label == e;
    //     })
    //     .map((et) => et.abbreviation);
    //   abbr.push(res[0]);
    // });
    // console.log(abbr);
    // return abbr;
    var res = uszip.database
      .filter((element) => sta.includes(element.state))
      .map((e) => e.city);
    let unique = [];
    res.forEach((c) => {
      if (!unique.includes(c)) {
        unique.push(c);
      }
    });
    unique = unique.sort();
    let jsondata = [];
    unique.forEach((c) => {
      jsondata.push({ label: c });
    });
    return jsondata;
  };
  const getZips = (ct) => {
    var res = uszip.database
      .filter((element) => ct.includes(element.city))
      .map((e) => e.zip);
    let unique = [];
    res.forEach((c) => {
      if (!unique.includes(c)) {
        unique.push(c);
      }
    });
    unique = unique.sort();
    let jsondata = [];
    unique.forEach((c) => {
      jsondata.push({ label: c });
    });
    return jsondata;
  };
  const PhoneChange = (e) => {
    setPhone(e);
  };
  const MinAgeChange = (e) => {
    setMinAge(e.target.value);
  };
  const MaxAgeChange = (e) => {
    setMaxAge(e.target.value);
  };
  const RecordChange = (e) => {
    setRecord(e.target.value);
  };
  const getKey = async () => {
    try {
      const res = await axios.post(`${API_SERVER}/users/dashboard`, user, {
        headers: { Authorization: `${user.token}` },
      });
      const data = res.data;
      setKey(data["API_KEY"]);
      setMax(data["Record"]);
    } catch (e) {
      console.error(e);
    }
  };
  const getdata = async (body) => {
    const url = "http://20.237.86.14/api";
    const header = {
      access_token: key,
      accept: "application/json",
      "Content-Type": "application/json",
    };
    const result = await axios.post(url, body, { headers: header });
    return result.data;
  };
  const getAbbr = () => {
    var abbr = [];
    state.map((e) => {
      var res = uszip.state_json
        .filter((data) => {
          return data.label == e;
        })
        .map((et) => et.abbreviation);
      abbr.push(res[0]);
    });
    return abbr;
  };
  const SearchClicked = async () => {
    let curl = `curl -X 'POST' 'http://20.237.86.14/api' -H 'accept: application/json' -H 'access_token: ${key}' -H 'Content-Type: application/json'`;
    setCurl(curl);
    setUrl("http://20.237.86.14/api");
    var abbr = getAbbr();
    let body = {
      phone: phone,
      state: abbr,
      city: city,
      zip: zip,
      min_age: min_age,
      max_age: max_age,
      record: record,
    };
    setPayload(JSON.stringify(body, null, 2));
    setDisplay(true);
    const data = JSON.stringify(await getdata(body), null, 2);
    console.log(data);
    setRes(data);
  };
  useEffect(() => {
    getKey();
  }, []);
  return (
    <div className="mb-8 mt-12 flex flex-col gap-4">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Data Viewer
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 px-0 pb-2 pt-0">
          <table className="w-full table-auto">
            <tbody>
              <tr>
                <td className="w-40 px-5 py-3 text-right">
                  <Typography variant="h6">Phone&nbsp;Type:</Typography>
                </td>
                <td className="px-5 py-3 text-center">
                  <Select
                    size="lg"
                    label="Select Phone Type"
                    defaultValue={phone}
                    onChange={PhoneChange}
                  >
                    <Option value="Landline">Landline</Option>
                    <Option value="Wireless">Wireless</Option>
                  </Select>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 text-right">
                  <Typography variant="h6">Age(Min):</Typography>
                </td>
                <td className="px-5 py-3">
                  <Input
                    size="lg"
                    label="Age(Min)"
                    type="number"
                    defaultValue={min_age}
                    onChange={MinAgeChange}
                    min="0"
                    max="500"
                  />
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 text-right">
                  <Typography variant="h6">Age(Max):</Typography>
                </td>
                <td className="px-5 py-3">
                  <Input
                    size="lg"
                    label="Age(Max)"
                    type="number"
                    defaultValue={max_age}
                    onChange={MaxAgeChange}
                    min="0"
                    max="500"
                  />
                </td>
              </tr>
              <tr>
                <td className="px-5 text-right">
                  <Typography variant="h6">State*:</Typography>
                </td>
                <td className="relative z-30 px-5">
                  <MultiSelect
                    name="states"
                    size="medium"
                    placeholder="Select State"
                    optionList={uszip.state_json}
                    value={state}
                    valueChange={setState}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-5 text-right">
                  <Typography variant="h6">City:</Typography>
                </td>
                <td className="relative z-20 px-5">
                  <MultiSelect
                    name="cities"
                    size="medium"
                    placeholder="Select City"
                    optionList={getCities(state)}
                    value={city}
                    valueChange={setCity}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-5 text-right">
                  <Typography variant="h6">Zip:</Typography>
                </td>
                <td className="relative z-10 px-5">
                  <MultiSelect
                    name="zips"
                    size="medium"
                    placeholder="Select ZipCode"
                    optionList={getZips(city)}
                    value={zip}
                    valueChange={setZip}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 text-right">
                  <Typography variant="h6">Record:</Typography>
                </td>
                <td className="px-5 py-3">
                  <Input
                    label="Records"
                    size="lg"
                    type="number"
                    defaultValue={record}
                    onChange={RecordChange}
                    min="0"
                    max="10"
                  ></Input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-5 pb-3">
            <Button
              variant="outlined"
              className="w-full"
              onClick={SearchClicked}
            >
              <i className="fas fa-search" />
              &nbsp;Search
            </Button>
          </div>
        </CardBody>
      </Card>
      {isdisplay == true ? (
        <div className="flex flex-col gap-4">
          <Snippet title="cURL" code={curlcode} />
          <Snippet title="Request" code={url} />
          <Snippet title="Body" code={payload} />
          <Snippet title="Response" code={res} />
        </div>
      ) : null}
    </div>
  );
}

export default Tables;
