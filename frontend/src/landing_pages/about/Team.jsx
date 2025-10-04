import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="text-center mt-5 ">People</h1>
      </div>
      <div
        className="row p-5   text-muted "
        style={{ lineHeight: "1.8rem", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <div
            style={{
              width: "300px",
              height: "300px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img
              src="media/images/best.jpg"
              alt="profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h4 className="mt-5">Shubham Singh</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Shubham is a computer science engineer from IIIT Ranchi. He started
            his career as a developer at the college, before moving to the
            metrocity hedge fund world, where he traded and built trading
            systems for a decade.
          </p>

          <br />
          <p>
            He is passionate about building products that solve real world
            problems, and believes in radical transparency and customer
            centricity. He is also the founder of Rainmatter, a fintech fund and
            incubator.
            <p />
            <br />
            <p>Playing basketball is his zen.</p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="">
              Homepage
            </a>{" "}
            /
            <a style={{ textDecoration: "none" }} href="">
              TradingQnA
            </a>{" "}
            /
            <a style={{ textDecoration: "none" }} href="">
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
