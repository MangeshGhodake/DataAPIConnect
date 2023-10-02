import { Navbar, Typography } from "@material-tailwind/react";

export function RateLimits() {
  return (
    <div className="pl-4 pt-2">
      <div className="py-1">
        <Typography variant="h4" id="basic">
          Rate Limits
        </Typography>
      </div>
      <Typography variant="body2" className="py-1">
        To prevent abuse and ensure service stability, all API requests are rate
        limited. Rate limits specify the maximum number of API calls that can be
        made per minute. The exact number of calls that your application can
        make is 15 per minute.
      </Typography>
    </div>
  );
}

RateLimits.displayName = "/src/widgets/layout/ratelimit.jsx";

export default RateLimits;
