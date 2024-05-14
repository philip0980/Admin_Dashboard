import { RiCoupon2Fill, RiDatabaseFill, RiLineChartLine } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";
import { IconType } from "react-icons";
import { FaChartPie, FaPerson, FaProductHunt } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineBarChart } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  );
};

export default AdminSidebar;

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDatabaseFill}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Products"
        Icon={FaProductHunt}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={FaPerson}
        location={location}
      />
      <Li
        url="/admin/transaction"
        text="Transaction"
        Icon={AiOutlineTransaction}
        location={location}
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={RiLineChartLine}
        location={location}
      />
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={MdOutlineBarChart}
        location={location}
      />
    </ul>
  </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li url="/admin/app/toss" text="Toss" Icon={BsCoin} location={location} />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon2Fill}
        location={location}
      />
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={CiStopwatch}
        location={location}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115, 255 , 0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115, 255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
