import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface DownloadLink {
  title: string;
  url: string;
}

interface OrderConfirmationProps {
  customerName?: string;
  orderId: string;
  downloads: DownloadLink[];
  totalAmount: number;
}

export default function OrderConfirmation({
  customerName,
  orderId,
  downloads,
  totalAmount,
}: OrderConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Your PrepMaster order is confirmed — download your books now</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f8fafc", margin: 0 }}>
        <Container style={{ maxWidth: "560px", margin: "40px auto", padding: "0 20px" }}>
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#1A2B4A",
              borderRadius: "12px 12px 0 0",
              padding: "32px 40px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{ color: "#ffffff", fontSize: "24px", margin: 0 }}
            >
              PrepMaster
            </Heading>
            <Text style={{ color: "rgba(255,255,255,0.6)", margin: "8px 0 0" }}>
              Your order is confirmed
            </Text>
          </Section>

          {/* Body */}
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "32px 40px",
              borderRadius: "0 0 12px 12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <Heading
              style={{ fontSize: "20px", color: "#1A2B4A", marginTop: 0 }}
            >
              {customerName ? `Hi ${customerName},` : "Hi there,"}
            </Heading>
            <Text style={{ color: "#64748b", lineHeight: "1.6" }}>
              Thank you for your purchase! Your PDF study guides are ready to
              download. Click the buttons below to get your books. These links
              expire in 72 hours.
            </Text>

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            {downloads.map((dl) => (
              <Section key={dl.url} style={{ marginBottom: "16px" }}>
                <Text
                  style={{
                    fontWeight: "600",
                    color: "#1A2B4A",
                    margin: "0 0 8px",
                    fontSize: "14px",
                  }}
                >
                  {dl.title}
                </Text>
                <Button
                  href={dl.url}
                  style={{
                    backgroundColor: "#F97316",
                    color: "#ffffff",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Download PDF
                </Button>
              </Section>
            ))}

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            <Text style={{ color: "#94a3b8", fontSize: "13px", lineHeight: "1.6" }}>
              Order ID: {orderId}
              <br />
              Total: ${totalAmount.toFixed(2)}
              <br />
              <br />
              Download links expire in 72 hours. If you need to re-access your
              books, contact us at support@prepmaster.com.
            </Text>
          </Section>

          <Text
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "12px",
              marginTop: "24px",
            }}
          >
            © {new Date().getFullYear()} PrepMaster. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
