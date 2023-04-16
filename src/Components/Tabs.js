import React from "react";
import { Tab } from "@headlessui/react";

import Projects from "../Tabs/Projects";
import Contact from "../Tabs/Contact";
import Landing from "../Tabs/Landing";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tabs() {
  return (
    <div className="w-full px-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl border-2 border-black p-1 text-xl font-light">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 leading-5 text-black",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-500 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow border-2 border-sky-500"
                  : "text-black hover:bg-white/[0.5] hover:text-black"
              )
            }
          >
            Home
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 leading-5 text-black",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-500 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow border-2 border-sky-500"
                  : "text-black hover:bg-white/[0.5] hover:text-black"
              )
            }
          >
            Projects
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 leading-5 text-black",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-500 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow border-2 border-sky-500"
                  : "text-black hover:bg-white/[0.5] hover:text-black"
              )
            }
          >
            Contact
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Landing />
          </Tab.Panel>
          <Tab.Panel>
            <Projects />
          </Tab.Panel>
          <Tab.Panel>
            <Contact />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tabs;
