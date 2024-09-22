// import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import about from '../assets/about.png'
import Cards from './Cards'

function About() {
  return (
    <>

<div className="flex flex-wrap items-center justify-between p-4">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img src={about} alt="images" className="w-full h-auto" />
        </div>

        {/* "Our Story" text on the right */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl mb-4">Our Story</h2>
          <Typography className="text-base">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace 
            with an active presence in Bangladesh. Supported by a wide range of tailored marketing, 
            data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million 
            customers across the region. Exclusive has more than 1 million products to offer, growing at a 
            very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer goods 
            to electronics.
          </Typography>
        </div>

      </div>

      <div>
      <div className="flex justify-center items-center space-x-4 w-50 h-50">
     
    <Cards
      title=""
      description="Sallers active our site"
      image="image-url.jpg" 
     
    />
    <Cards
      title=""
      description="Mopnthly Produduct Sale"
      image="image-url.jpg" 
      
    />
    <Cards
      title=""
      description="Customer active in our site"
      image="image-url.jpg" 
     
      
    />
     <Cards
      title=""
      description="Anual gross sale in our site"
      image="image-url.jpg" 
      
      
    />
   </div>
      </div>

<div className="flex justify-between">
<Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    <div><Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card></div>
    <div>
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
</div> 

</>
  )
}

export default About
