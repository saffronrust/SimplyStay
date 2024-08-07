import {
  CalculatorFilled,
  HeartFilled,
  HomeFilled,
  SearchOutlined,
  SlidersFilled,
  UserOutlined,
  CheckCircleFilled,
  MoneyCollectFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Menu, Typography, Button, Tour } from "antd";
import { useNavigate } from "react-router-dom";
import { removeCompareResultsFromDatabase } from "../../Utility/Database";
import { useState, useRef } from "react";
import { result } from "../SearchBox";

/**
 * This component is used to display the header of the website.
 * The header contains the website name, menu items, and the login icon.
 * The header is displayed at the top of the website.
 * The header is displayed in all pages of the website.
 * The user can navigate to different pages of the website by clicking on the menu items.
 * There is a tour button that will guide the user on how to use the website.
 * @returns AppHeader component
 */
function AppHeader() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    removeCompareResultsFromDatabase();
    result.length = 0;
    navigate(`/${item.key}`);
  };

  const onLoginIconClick = () => {
    removeCompareResultsFromDatabase();
    result.length = 0;
    navigate("/login");
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Home",
      description: "Click this button to go to the home page.",
      target: () => ref1.current,
    },
    {
      title: "Search",
      description: "Search for your desired BTO with our filters.",
      target: () => ref2.current,
    },
    {
      title: "Calculator",
      description: "Calculate your eligibility to BTO, and the payment plans required.",
      target: () => ref3.current,
    },
    {
      title: "Compare",
      description: "Compare between different BTOs.",
      target: () => ref4.current,
    },
    {
      title: "Favourites",
      description: "View your favourite BTOs if you are logged in.",
      target: () => ref5.current,
    },
    {
      title: "Login",
      description:
        "Login or signup to the website using your email or Google account.",
      target: () => ref6.current,
    },
  ];

  return (
    <div className="appHeader">
      <Menu
        className="appMenu"
        onClick={onMenuClick}
        mode="horizontal"
        style={{ minWidth: 0, flex: "auto" }}
        items={[
          {
            icon: <HomeFilled ref={ref1} />,
            key: "",
          },
          {
            label: "Search",
            icon: <SearchOutlined ref={ref2} />,
            key: "search",
          },
          {
            label: "Calculator",
            icon: <CalculatorFilled ref={ref3} />,
            key: "calculator",
            children: [
              {
                label: "Check Your Eligibility",
                icon: <CheckCircleFilled />,
                key: "eligibility"
              },
              {
                label: "Loan Calculator",
                icon: <MoneyCollectFilled />,
                key: "calculator"
              },
            ],
          },
          {
            label: "Compare",
            icon: <SlidersFilled ref={ref4} />,
            key: "compare",
          },
          {
            label: "Favourites",
            icon: <HeartFilled ref={ref5} />,
            key: "favourites",
          },
        ]}
      />

      <Typography.Title className="title">SimplyStay!</Typography.Title>

      <Button
        className="tourbutton"
        type="primary"
        onClick={() => setOpen(true)}
      >
        Guide <QuestionCircleFilled />
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />

      <UserOutlined
        className="loginIcon"
        onClick={onLoginIconClick}
        ref={ref6}
      />
    </div>
  );
}

export default AppHeader;
