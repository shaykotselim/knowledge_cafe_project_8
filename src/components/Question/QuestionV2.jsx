import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5  transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function Example() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="text-left px-2" onClick={() => handleOpen(1)}>
                    1. Props Vs state
                </AccordionHeader>
                <AccordionBody className="px-4">
                    
                    <p>
                        Props:
                        <li>Props are read-only.</li>
                        <li>Props are immutable.</li>
                        <li>Props make components reusable.</li>

                        State:
                        <li>State changes can be asynchronous.</li>
                        <li>State is mutable.</li>
                        <li>State cannot make components reusable.</li>
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader className="text-left px-2" onClick={() => handleOpen(2)}>
                    2. How does the work useState?
                </AccordionHeader>
                <AccordionBody  className="px-4">
                    <p>
                        useState:
                        The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.
                    </p>.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader className="text-left px-2" onClick={() => handleOpen(3)}>
                    3.Purpose of useEffect other than fetching data.
                </AccordionHeader>
                <AccordionBody className="px-4">
                    <p>
                        The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.
                    </p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader className="text-left px-2" onClick={() => handleOpen(4)}>
                    4.How Does React work?
                </AccordionHeader>
                <AccordionBody className="px-4">
                    <p>
                        React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.
                    </p>
                    <p className="text-xl font-medium">
                        JSX ,  Virtual Dom , Components and Props, State Management
                    </p>
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}