import { Transition } from "@/lib/utils";
import React, { useState } from "react";
// import Button from "./ContactUs/Button";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function ContactUs() {
  const [showContactUs, setShowContactUs] = useState(false);
  const ContactUsHandler = () => {
    setShowContactUs(!showContactUs);
  };
  const { animationClass } = new Transition(
    showContactUs,
    "translate-y-0 scale-100 opacity-100",
    "-translate-y-24 scale-0 opacity-0"
  ).getClass();
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="fixed bottom-[8vh] transform -translate-x-1/2 left-1/2
bg-[#fbeee0]
border-2
border-[#422800]
rounded-[30px]
shadow-[4px_4px_0_0_#422800]
text-[#422800]
cursor-pointer
font-semibold
text-[18px]
px-[18px]
leading-[50px]
text-center
no-underline
select-none
hover:bg-white
active:shadow-[2px_2px_0_0_#422800]
active:translate-y-[2px]
md:min-w-[120px]
md:px-[25px]"
        >
          Contact Us
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
