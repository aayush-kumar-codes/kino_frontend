import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "@/styles/adminDashboardContent.module.css";
import React from "react";
import { BiMobileAlt } from "react-icons/bi";
import { Input } from "antd";
import { useState } from "react";

const SchoolPayment = () => {
  const [paymentMethod , setPaymentMethod] = useState('Mobile Money')
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography variant="h6" sx={{ color: "black", fontWeight: "100" }}>
            Order Summary
          </Typography>
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                columnGap: "1rem",
                "@media (max-width:1095px)": { gridTemplateColumns: "1fr 1fr" },
                "@media (max-width:800px)": {
                  gridTemplateColumns: "1fr",
                  rowGap: "1rem",
                },
              }}
            >
              <Box
                sx={{
                  background: "#FFFFFF",
                  padding: "1rem",
                  boxShadow: "3px 3px 3px 0px #f1e9e9",
                  height: "150px",
                  width: "350px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
                  <Box
                    sx={{
                      background: "#8B0000 !important",
                      width: "40%",
                      height: "80%",
                      marginRight: "1.5rem",
                    }}
                  >
                    <Typography sx={{}}></Typography>
                  </Box>
                  <Box className={styles.totalTextContainer} sx={{}}>
                    <Typography
                      variant="p"
                      sx={{ color: "black", fontWeight: "300" }}
                    >
                      Monthly Subscription
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ color: "black", fontWeight: "500" }}
                    >
                      $36
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ marginTop: "auto", paddingTop: "1rem" }}>
                    <Typography
                      variant="p"
                      sx={{ color: "black", fontWeight: "500" }}
                    >
                      Billed Today (USD)
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "auto", paddingTop: "1rem" }}>
                    <Typography
                      variant="p"
                      sx={{ color: "black", fontWeight: "500" }}
                    >
                      $36
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "black", fontWeight: "100", marginTop: "50px" }}
          >
            Account Information
            </Typography>
            <Typography
            variant="p"
            sx={{ color: "black", fontWeight: "100", marginTop: "20%" }}
          >
            Required
          </Typography>
          
          <Box
            sx={{
              background: "#FFFFFF",
              padding: "1rem",
              boxShadow: "3px 3px 3px 0px #f1e9e9",
              height: "280px",
              width: "550px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <form>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "5px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "48%",
                      
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "black", fontWeight: "100" }}
                    >
                      First Name
                    </Typography>
                    <Input
                      placeholder="First Name"
                      style={{
                        border: "1px solid #BB7696 ",
                        height: "35px",
                        marginTop: "5px",
                        backgroundColor: "white",
                        marginRight: "2%",
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      variant="p"
                      sx={{
                        color: "black",
                        fontWeight: "100",
                      }}
                    >
                      Last Name
                    </Typography>
                    <Input
                      placeholder="Last Name"
                      style={{
                        border: "1px solid #BB7696 ",
                        height: "35px",
                        backgroundColor: "white",
                        marginTop: "5px",
                      }}
                    />
                  </Box>
                </Box>

                <Typography
                  variant="p"
                  sx={{ color: "black", fontWeight: "100" }}
                >
                  Email Address
                </Typography>
                <Input
                  placeholder="email"
                  style={{
                    border: "1px solid #BB7696 ",
                    height: "35px",
                    backgroundColor: "white",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                />

                <Typography
                  variant="p"
                  sx={{
                    color: "black",
                    fontWeight: "100",
                    marginBottom: "100px",
                    marginTop: "10px",
                  }}
                >
                  Telephone
                </Typography>
                <Input
                  placeholder="+91"
                  style={{
                    border: "1px solid #BB7696 ",
                    height: "35px",
                    backgroundColor: "white",
                    marginTop: "5px",
                  }}
                />

                <Box>
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "checkbox" }}
                  />
                  <Typography
                    variant="span"
                    sx={{ color: "black", fontWeight: "100", marginTop: "5px" }}
                  >
                    I agree to email instructional emails
                  </Typography>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: "black", fontWeight: "100" }}>
            Payment Information
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "black", fontWeight: "100", marginBottom: "20%" }}
          >
            This is secured by Flutterwave payment
          </Typography>
          <Box
            sx={{
              background: "#FFFFFF",
              padding: "1rem",
              boxShadow: "3px 3px 3px 0px #f1e9e9",
              height: "230px",
              width: "550px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "10px",
            }}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              style={{width:'100%'}}
            onChange={(e)=>{
              setPaymentMethod(e.target.value)
            }}

            value={paymentMethod}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  value="Mobile Money"
                  control={<Radio />}
                  style={{ color: "black" }}
                  label="Mobile Money"
                  
                />{" "}
                <BiMobileAlt style={{ color: "black" }} />
              </Box>
              <Box style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <FormControlLabel
                  value=" Credit card"
                  control={<Radio />}
                  style={{ color: "black" }}
                  label="Credit card"
                />{" "}
                <BiMobileAlt style={{ color: "black" }} />
              </Box>
            </RadioGroup>
            {paymentMethod == 'Mobile Money' ? 
            <>
            <Typography
              variant="span"
              sx={{ color: "black", marginTop: "10px",fontWeight:'400' }}
            >
              Enter your Phone Number
            </Typography>
            
            <Input
              style={{
                border: "1px solid #BB7696 ",
                height: "35px",
                backgroundColor: "white",
                marginTop: "5px"
              }}
            />
            </>
            :
            <>
            <Typography
              variant="span"
              sx={{ color: "black", fontWeight:'300', marginTop: "10px" }}
            >
             Card Number
            </Typography>
            <Input
              placeholder="+91"
              style={{
                border: "1px solid #BB7696 ",
                height: "35px",
                backgroundColor: "white",
                marginTop: "5px"
              }}
            />
            <Box sx={{display:'flex',marginTop: "10px", alignContent:'centre', justifyContent:'space-between'}}>
              <Box>
            <Typography
              variant="span"
              sx={{ color: "black", fontWeight:'300', marginTop: "5px" }}
            >
             Expiration Date
            </Typography>
            <Input
              style={{
                border: "1px solid #BB7696 ",
                height: "35px",
                backgroundColor: "white",
                marginTop: "5px",
                width:'98%'
              }}
            />
            </Box>
            <Box>
            <Typography
              variant="span"
              sx={{ color: "black", fontWeight:'300', marginTop: "5px" }}
            >
             CVC code
            </Typography>
            <Input
              style={{
                border: "1px solid #BB7696 ",
                height: "35px",
                backgroundColor: "white",
                marginTop: "5px",
                width:'98%'
              }}
            />
            </Box>
            </Box>
            </>
            }

          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "100", marginTop: "10px" }}
            >
              Billing Address
            </Typography>
            <Box
              sx={{
                background: "#FFFFFF",
                padding: "1rem",
                boxShadow: "3px 3px 3px 0px #f1e9e9",
                height: "200px",
                width: "550px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "10px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "black",
                  fontWeight: "300",

                  marginTop: "5px",
                }}
              >
                Country
              </Typography>
              <Input
                style={{
                  border: "1px solid #BB7696 ",
                  height: "35px",
                  backgroundColor: "white",
                  marginTop: "5px",
                }}
              />

              <Typography
                variant="p"
                sx={{ color: "black", fontWeight: "300", marginTop: "5px" }}
              >
                Region
              </Typography>
              <Input
                placeholder=""
                style={{
                  border: "1px solid #BB7696 ",
                  height: "35px",
                  backgroundColor: "white",
                  marginTop: "5px",
                }}
              />
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
                justifyContent:'center'
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#F33A10",
                  color: "white",
                  fontWeight: "500",
                  marginRight: "10px",
                }}
              >
                Pay Now
              </Button>
              <Button
                sx={{
                  backgroundColor: "#F33A10",
                  color: "white",
                  fontWeight: "500",
                  marginRight: "10px",
                }}
              >
                Cancel
              </Button>
            </Box>
            <Box>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "checkbox" }}
              />
              <Typography
                variant="p"
                sx={{ color: "black", fontWeight: "400" }}
              >
                I agree to{" "}
                <span style={{ color: "#F33A10" }}>kaino.africa </span>terms of
                use & <span style={{ color: "#F33A10" }}> privacy policy</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SchoolPayment;
