import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import {
  Footer,
  Navbar,
  BasicSection,
  RateLimits,
  Request,
  Response,
  StatusCode,
} from "@/widgets/layout";
import routes from "@/routes";

export function API() {
  const arr = [
    { label: "Basic", url: "/API#basic" },
    { label: "Authentication", url: "/API#authentication" },
    { label: "Search Types", url: "/API#searchtypes" },
    { label: "Rate Limits", url: "/API#ratelimits" },
    { label: "Request", url: "/API#request" },
    { label: "Response", url: "/API#response" },
    { label: "Status Code", url: "/API#statuscode" },
  ];
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pb-32">
        {/* <div className="absolute top-0 h-2/4 w-full bg-white bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                API Documentation
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Discover a world of consumer insights at your fingertips. We
                specialize in providing comprehensive consumer data that
                empowers businesses to make informed decisions and drive growth.
                With a focus on accuracy, reliability, and ethical data
                sourcing, DataAPIConnect is your trusted partner in harnessing
                the power of data for strategic advantage.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-4/6 px-12 py-10 md:grid-cols-4">
        <div>
          <div className="border-2 border-black">
            {arr.map((e) => (
              <Typography variant="body2" className="py-1 pl-4" key={e}>
                <a href={e.url}>{e.label}</a>
              </Typography>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <BasicSection />
          <RateLimits />
          <Request />
          <Response />
          <StatusCode />
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default API;
