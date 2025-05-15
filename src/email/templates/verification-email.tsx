import { appConfig } from "@/config/appConfig";
import { Body, Button, Column, Container, Head, Hr, Html, Img, Link, Row, Section, Text } from "@react-email/components";
import * as React from "react";

interface EmailVerificationProps {
  email: string;
  activationLink: string;
}

const EmailVerification = ({ email, activationLink }: EmailVerificationProps) => {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          <Row style={{ marginBottom: "40px" }}>
            <Img style={headerLogoStyle} src={appConfig.logo} width="64" height="64" alt="Website Logo" />
            <Hr />
          </Row>
          <Section style={headerStyle}>
            {/* Replace with the URL of your hosted image */}
            <Img
              src="http://localhost:3000/images/magic-link-verification-banner.webp"
              alt="Email Verification"
              width="400"
              height="300"
              style={imageStyle}
            />
          </Section>
          <Section style={contentStyle}>
            <Text style={titleStyle}>Verify your email address</Text>
            <Text style={paragraphStyle}>
              You’ve entered <span style={emailStyle}>{email}</span> as the email address for your account. Please verify this email address by
              clicking the button below.
            </Text>
            <Button href={activationLink} style={buttonStyle}>
              Verify your email
            </Button>
            <Text style={footerTextStyle}>
              Or copy and paste this link into your browser:
              <br />
              <Link href={activationLink} style={linkStyle}>
                {activationLink}
              </Link>
            </Text>
          </Section>

          <Text>
            For any questions or concerns please reply to this email or reach out to our{" "}
            <a href={`mailto:${appConfig.supportEmail}`}>support team.</a>
          </Text>

          <Text style={footerStyle}>
            © 2024 {appConfig.appName}. All rights reserved.
            <br />
          </Text>

          <table style={tableContainer}>
            <Column style={iconCell}>
              <Img src={"https://saaspack.app/images/twitter.png"} width="20" height="20" alt={"Twitter Icon"} />
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

const tableContainer = {
  margin: "10px auto", // Centering the table horizontally
  textAlign: "center" as const, // Ensuring the content is centered
};

const iconCell = {
  padding: "0 10px", // Adds space between icons
};

const headerLogoStyle = {
  margin: "0px auto 20px auto",
  width: "auto",
};
// Inline styles for each section
const mainStyle = {
  padding: "30px 20px",
  height: "100vh",
  backgroundColor: "#f0f0f0", // Optional, to see the contra
};

const footerStyle = {
  fontSize: "12px",
  color: "#666666",
  marginTop: "40px",
  textAlign: "center" as "center",
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto", // Horizontally center the container
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "20px 30px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};
const imageStyle = {
  display: "block",
  margin: "0 auto 20px",
  width: "100%", // Make the image responsive
  maxWidth: "400px", // Limit the maximum width to 400px
  height: "auto",
};

const headerStyle = {
  padding: "20px",
  textAlign: "center" as const,
  borderRadius: "50px",
};

const contentStyle = {
  padding: "20px",
  textAlign: "center" as const,
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  marginBottom: "16px",
};

const paragraphStyle = {
  fontSize: "16px",
  lineHeight: "20px",
  color: "#333333",
};

const emailStyle = {
  fontWeight: "bold",
};

const buttonStyle = {
  display: "inline-block",
  padding: "12px 24px",
  margin: "20px 0",
  backgroundColor: "#E67579",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const footerTextStyle = {
  fontSize: "14px",
  color: "#555555",
  textAlign: "center" as const,
  marginTop: "20px",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default EmailVerification;
