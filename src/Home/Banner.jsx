import React from "react";

import { Button } from "antd";

import BannerImage from "./BannerImage";
import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";

import { Element } from "rc-scroll-anim";
import { assets } from "./data";

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  };
  static defaultProps = {
    className: "banner",
  };
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element
        component="section"
        className={`${className}-wrapper page`}
        onChange={navToShadow}
      >
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ? (
              <img
                width="100%"
                src={`${assets}/image/home/intro-landscape-3a409.svg`}
                alt=""
              />
            ) : (
              <BannerImage />
            )}
          </div>
          <QueueAnim
            type={isMobile ? "bottom" : "right"}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            Welcome to
            <h1 key="h1">Manora</h1>
            <p className="main-info" key="p">
              I am a
              <b>
                full stack developer | looking for new challenges | always
                willing to help and collaborate.
              </b>
              .I have hard working team who is always willing to go the extra
              mile to get the job done. We are always ready to take on new
              challenges and build things that will make a difference.
            </p>
            <a
              target="_blank"
              href="https://antv.alipay.com/zh-cn/g2/3.x/index.html"
              key="a"
            >
              <Button type="primary">Connect</Button>
            </a>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
