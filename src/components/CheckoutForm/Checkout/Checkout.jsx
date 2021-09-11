import React, { useState, useEffect} from "react";

import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
  Divider,
  Button,
  Typography,
  CssBaseline
} from "@material-ui/core";
import { commerce } from "../../../libs/commerce.js";

//components
import AddressForm from "../AddressForm.jsx";
import PaymentForm from "../PaymentForm.jsx";

//style
import useStyles from "./styles.js";
import { Link,useHistory } from "react-router-dom";

const Checkout = ({cart, order, handleCheckout, error}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinish, setIsFinish] = useState(false)
  const history = useHistory();

  const steps = ["Shipping address", "Payements details"];

  const classes = useStyles();

  useEffect(()=>{
      async function generateToken(){
          try {
              const token = await commerce.checkout.generateToken(cart.id , {type: "cart"})
              setCheckoutToken(token)
          } catch (error) {
              console.log(error);
              history.push('/')
          }
      }
      generateToken();
  },[])

  const timer = ()=>{
    setTimeout(() => {
      setIsFinish(true)
    }, 3000);
  }

  const nextStep = ()=> setActiveStep((prevActiveStep)=> prevActiveStep + 1 )
  const backStep = ()=> setActiveStep((prevActiveStep)=> prevActiveStep - 1 )

  const next =  (data)=>{
    setShippingData(data)
    nextStep();
  }

  const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm nextStep={nextStep} handleCheckout={handleCheckout} shippingData={shippingData} checkoutToken={checkoutToken}  backStep ={ backStep } timer={timer} />);
  const Confirmation = () => order.customer ? (
    <>
    <div>
      <Typography variant="h5" >Thank you for your purchase,{order.customer.firstname} {order.customer.lastname} </Typography>
      <Divider className={classes.divider}/>
      <Typography variant="subtitle2">Order ref: {order.customer._reference}</Typography>
    </div>
    <br/>
    <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
    </>
  ) : isFinish ? (
    <>
      <Typography variant="h5" >Thank you for your purchase. </Typography>
      <Divider className={classes.divider}/>
    <br/>
    <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
</>
  ): (
    <div className={classes.spinner}>
      <CircularProgress/>
    </div>
  )

  if(error){
    <>
    <Typography variant='h5'>Error:{error} </Typography>
    <br/>
    <Button component={Link} to="/" variant="outlined" type="button">Back to home</Button>
    </>
  }

  return (
    <>
    <CssBaseline/>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
