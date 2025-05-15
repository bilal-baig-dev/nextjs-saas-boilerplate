import { appConfig } from "@/config/appConfig";
import { OrderEmailProps } from "@/interfaces";
import { Body, Button, Column, Container, Heading, Hr, Html, Img, Row, Text } from "@react-email/components";
import React from "react";

const InvoiceEmail = ({
  name,
  startEndPeriod,
  companyName,
  email,
  total,
  orderId,
  description,
  amount,
  actionUrl,
  supportUrl,
  websiteLogoURL,
  tax,
}: OrderEmailProps) => {
  return (
    <Html>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Row style={{ marginBottom: "40px" }}>
            <Img style={headerLogoStyle} src={websiteLogoURL} width="64" height="64" alt="Website Logo" />
            <Hr />
          </Row>
          <Heading style={headingStyle}>Hi {name},</Heading>
          <Text>
            Thank you for your recent purchase of a {companyName} subscription! Please let us know if you have any questions or require further
            assistance.
          </Text>

          <Container style={boxStyle}>
            <Row style={{ marginBottom: "10px" }}>
              <strong>Summary</strong>
            </Row>
            <Hr />

            <Row style={marginStyle}>
              <span style={lightTextStyle}>Invoice: {orderId}</span>
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

            <Row>
              <Column>
                <strong>Description</strong>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <strong>Amount</strong>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "60%" }}>
                <Text style={lightTextStyle}>{startEndPeriod}</Text>
                <Text style={lightTextStyle}>{description}</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text>{amount}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "60%" }}>
                <Text style={lightTextStyle}>Tax</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text>{tax}</Text>
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

          <Button style={buttonStyle} href={actionUrl}>
            View Invoice
          </Button>

          <Hr />

          <Text>
            If you&apos;re experiencing issues seeing invoice simply paste the following link into your browser:
            <br />
            {actionUrl}
          </Text>

          <Text>
            Cheers,
            <br />
            The {companyName} Team
          </Text>

          <Hr />

          <Text>
            For any questions or concerns related to this invoice, please reply to this email or reach out to our{" "}
            <a href={supportUrl}>support team.</a>
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
};

const headerLogoStyle = {
  margin: "0px auto 20px auto",
  width: "auto",
};

const tableContainer = {
  margin: "10px auto", // Centering the table horizontally
  textAlign: "center" as const, // Ensuring the content is centered
};

const iconCell = {
  padding: "0 10px", // Adds space between icons
};

const marginStyle = {
  marginBottom: "10px",
  opacity: 0.7,
};
const lightTextStyle = {
  opacity: 0.7,
};

// Styles
const bodyStyle = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "20px",
  marginBottom: "10px",
};

const boxStyle = {
  backgroundColor: "#f4f4f4",
  padding: "16px",
  borderRadius: "4px",
  margin: "20px 0",
  width: "100%",
  maxWidth: "100%",
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

const footerStyle = {
  fontSize: "12px",
  color: "#666666",
  marginTop: "40px",
  textAlign: "center" as "center",
};

export default InvoiceEmail;
