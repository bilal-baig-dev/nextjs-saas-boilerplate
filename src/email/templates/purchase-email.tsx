import React, { CSSProperties } from "react";
import { Body, Container, Head, Html, Img, Preview, Text, Row, Column, Hr, Heading, Button } from "@react-email/components";
import { OrderEmailProps } from "@/interfaces";
import { appConfig } from "@/config/appConfig";

const PurchaseEmail: React.FC<OrderEmailProps> = ({
  orderId,
  name,
  email,
  date,
  description,
  amount,
  tax,
  total,
  supportUrl,
  companyName,
  websiteLogoURL,
}) => (
  <Html>
    <Head />
    <Preview>Thank you for your order - Here is your summary</Preview>
    <Body style={main}>
      <Container style={container}>
        <Row style={{ marginBottom: "40px" }}>
          <Img style={headerLogoStyle} src={websiteLogoURL} width="64" height="64" alt="Website Logo" />
          <Hr />
        </Row>
        <Heading style={headingStyle}>Hi {name},</Heading>
        <Text>Thank you for your order from a {companyName}! We&apos;ve received your payment and here is the order summary given below.</Text>

        <Container style={boxStyle}>
          <Row style={{ marginBottom: "10px" }}>
            <strong>Summary</strong>
          </Row>
          <Hr />

          <Row style={marginStyle}>
            <span style={lightTextStyle}>Order: {orderId}</span>
          </Row>
          <Row style={marginStyle}>
            <span style={lightTextStyle}>Transaction Date: {date}</span>
          </Row>
          <Row style={marginStyle}>
            <span style={lightTextStyle}>To: {name}</span>
          </Row>
          <Row style={marginStyle}>
            <span style={lightTextStyle}>Email: {email}</span>
          </Row>
          <Row style={marginStyle}>
            <span style={lightTextStyle}>From: {companyName}</span>
          </Row>

          <Row style={{ margin: "20px 0px" }}>
            <Column>
              <strong>Description</strong>
            </Column>
            <Column style={{ textAlign: "right" }}>
              <strong>Amount</strong>
            </Column>
          </Row>

          <Row style={marginStyle}>
            <Column style={{ width: "60%" }}>
              <span style={lightTextStyle}>{description}</span>
            </Column>
            <Column style={{ textAlign: "right" }}>
              <span>{amount}</span>
            </Column>
          </Row>

          <Row style={marginStyle}>
            <Column>
              <span style={lightTextStyle}>Tax</span>
            </Column>
            <Column style={{ textAlign: "right" }}>
              <span style={lightTextStyle}>{tax}</span>
            </Column>
          </Row>

          <Hr />

          <Row>
            <Column>
              <strong>Total</strong>
            </Column>
            <Column style={{ textAlign: "right" }}>
              <Text>{total}</Text>
            </Column>
          </Row>
        </Container>

        <Text>
          Cheers,
          <br />
          The {companyName} Team
        </Text>

        <Text>
          For any questions or concerns related to this invoice, please reply to this email or reach out to our <a href={supportUrl}>support team.</a>
        </Text>

        <Text style={footerStyle}>
          © 2024 {companyName}. All rights reserved.
          <br />
        </Text>

        <table style={tableContainer}>
          <Column style={iconCell}>
            <Img src={"https://saaspack.app/images/twitter.jpg"} width="20" height="20" alt={"Twitter Icon"} />
          </Column>
          <Column style={iconCell}>
            <Img src={"https://saaspack.app/images/gitub.png"} width="20" height="20" alt={"Github Icon"} />
          </Column>
          <Column style={iconCell}>
            <Img src={"https://saaspack.app/images/linkedin.png"} width="20" height="20" alt={"Linkedin Icon"} />
          </Column>
        </table>
      </Container>
    </Body>
  </Html>
);

const headerLogoStyle = {
  margin: "0px auto 20px auto",
  width: "auto",
};

const headingStyle = {
  fontSize: "20px",
  marginBottom: "10px",
};

const tableContainer = {
  margin: "10px auto", // Centering the table horizontally
  textAlign: "center" as const, // Ensuring the content is centered
};

const iconCell = {
  padding: "0 10px", // Adds space between icons
};

const buttonStyle = {
  backgroundColor: appConfig.primaryColor,
  color: "#ffffff",
  padding: "12px 24px",
  textDecoration: "none",
  borderRadius: "4px",
  display: "block",
  textAlign: "center" as "center",
  fontWeight: "bold",
  margin: "auto",
  cursor: "pointer",
};

const boxStyle = {
  backgroundColor: "#f4f4f4",
  padding: "16px",
  borderRadius: "4px",
  margin: "20px 0",
  width: "100%",
  maxWidth: "100%",
};

const marginStyle = {
  marginBottom: "10px",
  opacity: 0.7,
};
const lightTextStyle = {
  opacity: 0.7,
};

// Styles using CSSProperties
const main: CSSProperties = {
  backgroundColor: "#f4f4f4",
  fontFamily: "Arial, sans-serif",
};
const container: CSSProperties = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  backgroundColor: "#fff",
};

const footerStyle = {
  fontSize: "12px",
  color: "#666666",
  marginTop: "40px",
  textAlign: "center" as "center",
};

export default PurchaseEmail;
