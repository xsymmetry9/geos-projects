import React, { useRef, forwardRef } from "react";
import PlotPage from "../components/PlotPage";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

const ComponentToPrint = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="papersize">
            <PlotPage {...props} />
        </div>
    );
});

const Print = (props) => {
    const contentRef = useRef();
    return (
        <div>
            <ComponentToPrint ref={contentRef} {...props} />

            <ReactToPrint
                trigger={() => <button>Print</button>}
                content={() => contentRef.current}
            />
        </div>
    );
}

export default Print;
