import { Data } from "../utils";

const service1 = new Data(
  "Custom Web Application Development",
  "Our team specializes in building robust, scalable, and secure web applications tailored to your unique business needs. From initial concept to final deployment, we ensure a seamless development process that aligns with your goals.",
  "/images/1.jpg"
);

const service2 = new Data(
  "API Development and Integration",
  "Enhance your application's functionality and connectivity with our custom API development and integration services. We ensure smooth and secure data exchange between your application and third-party services.",
  "/images/2.jpg"
);

const service3 = new Data(
  "DevOps and Continuous Integration",
  "Streamline your development process with our DevOps services. We implement continuous integration and continuous deployment (CI/CD) practices to enhance collaboration, reduce time-to-market, and improve product quality.",
  "/images/3.jpg"
);

const service4 = new Data(
  "UX/UI Design",
  "Create intuitive and engaging user experiences with our expert UX/UI design services. We focus on user-centered design principles to ensure your web applications are both visually appealing and easy to navigate.",
  "/images/4.jpg"
);




export const allServices = [
  service1,
  service2,
  service3,
  service4,
];
