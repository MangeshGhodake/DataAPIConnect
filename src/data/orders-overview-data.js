import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export const ordersOverviewData = [
  {
    icon: ShoppingCartIcon,
    color: "text-blue-500",
    title: "Your Plan",
    description: "Free trial",
  },
  {
    icon: CreditCardIcon,
    color: "text-orange-500",
    title: "Price Per Record",
    description: "0.10$/record",
  },
  {
    icon: PlusCircleIcon,
    color: "text-red-500",
    title: "Rate Limit",
    description: "15 requests/min",
  },
];

export default ordersOverviewData;
