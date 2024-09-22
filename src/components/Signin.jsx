import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
//import Cards from "./Cards";
import forpage from '../assets/forpage.png'
   
  export default function LoginCard() {
    // const handleButtonClick = () => {
    //     alert("Button clicked!");
    //   };
    
    return (
      <div className="flex justify-center items-center p-20 m-4">
        <div>
        <img src={forpage} alt="image" className="p-4"/>
        </div>
        
        
        <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to="/signup"> Sign up </Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      </div>
    );
  }