import App from "next/app";
import { useEffect, useState } from "react";
import Router from "next/router";

export default function Home(req, res, next) {
  const [test, setTest] = useState(0);
  useEffect(() => {
    Router.push("Landing");
  }, []);
  return <div onClick={() => setTest(test + 1)}>{test}</div>;
}
