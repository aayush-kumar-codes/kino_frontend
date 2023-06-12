import { Box, Checkbox } from "@mui/material";
import { Typography } from "antd";
import styles from "@/styles/adminDashboardContent.module.css";
import React from "react";
import InputFeild from "./InputFeild";
import { useFlutterwave } from "flutterwave-react-v3";
import { Button } from "antd/es/radio";

const BillPayment = () => {
  const config = {
    public_key: "FLWPUBK_TEST-f72b7bd80c7fb93233a69638966af630-X",
    tx_ref: Date.now(),
    amount: 36,
    currency: "NGN",
    payment_options: "card",
    payment_plan: "37367",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    meta: { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <Box>
      <Typography
        className={styles.headingcontainer}
        variant="h6"
        sx={{ fontWeight: "300", marginTop: "10px" }}
      >
        Billing Address
      </Typography>
      <Box
        className={styles.boxcontainer}
        sx={{
          height: "200px",
          width: "550px",
          marginTop: "10px",
        }}
      >
        <Typography
          className={styles.headingcontainer}
          variant="p"
          sx={{
            marginTop: "5px",
          }}
        >
          Country
        </Typography>
        <InputFeild />

        <Typography
          className={styles.headingcontainer}
          variant="p"
          sx={{ marginTop: "5px" }}
        >
          Region
        </Typography>
        <InputFeild />
        <Box
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "centre",
          }}
        ></Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <Button
          className={styles.buttoncontainer}
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal();
              },
              onClose: () => {},
            });
          }}
        >
          Pay Now
        </Button>
        <Button className={styles.buttoncontainer}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default BillPayment;
