import React from "react";
import "./Footer.css";
import { Button, Flex, Image, Typography } from "antd";
import facebook from "../../../assets/icons/Facebook.png";
import linkedIn from "../../../assets/icons/Linkedin.png";
import instagram from "../../../assets/icons/Instagram.png";
import twitter from "../../../assets/icons/twitter.png";

const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <div className="ps-16 pt-6 flex flex-col">
          <Title level={4}>Contact Us</Title>
          <Text className="text-[#3C3D37]">Block-E, Jakir Hossain Road</Text>
          <Text>Mohammadpur, Dhaka, Bangladesh</Text>
          <Text>Phone: +880-123-456-7890</Text>
        </div>
        <div className="ps-16 pt-6 flex flex-col">
          <Title level={4}>Resources</Title>
          <Text>About Us</Text>
          <Text>Term and Conditions</Text>
          <Text>Privacy Policy</Text>
        </div>
        <div className="ps-16 pt-6">
          <Title className="mb-8" level={4}>
            Social Media Links
          </Title>
          <Button
            type="link"
            target="_blank"
            className="mx-2"
            href="https://facebook.com"
            icon={
              <img
                src={facebook}
                alt="Flat Icon"
                style={{ width: 30, height: 30 }}
              />
            }
          ></Button>
          <Button
            type="link"
            target="_blank"
            className="mr-2"
            href="https://linkedIn.com"
            icon={
              <img
                src={linkedIn}
                alt="Flat Icon"
                style={{ width: 30, height: 30 }}
              />
            }
          ></Button>
          <Button
            type="link"
            target="_blank"
            className="mr-2"
            href="https://instagram.com"
            icon={
              <img
                src={instagram}
                alt="Flat Icon"
                style={{ width: 30, height: 30 }}
              />
            }
          ></Button>
          <Button
            type="link"
            target="_blank"
            className="mr-2"
            href="https://twitter.com"
            icon={
              <img
                src={twitter}
                alt="Flat Icon"
                style={{ width: 30, height: 30 }}
              />
            }
          ></Button>
        </div>
      </div>
      <div className="footer-copyright text-center">
        <Text style={{ color: "#dde6ed" }}>&copy; Bike Rental BD 2024</Text>
      </div>
    </footer>
  );
};

export default Footer;
