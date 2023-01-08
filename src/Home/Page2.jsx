import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">About Manora</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">
            Our aim is to provide the best possible service to our clients. We
            are a team of highly skilled professionals who are always ready to
            go the extra mile to get the job done.
          </p>
          <p className="main-info" key="2">
            We believe in building long term relationships with our clients and
            not just providing a service but also providing a solution to their
            problems and helping them grow.
          </p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
}
