import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function FaqAccordion({question, children}) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const faqContent = useRef(null);

    function toggleMenu() {
        setSubMenuOpen(!subMenuOpen);
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${faqContent.current.scrollHeight}px`
        );
    }

    return (
        <>
            <div className="accordion-section d-flex flex-column" style={{
                borderRadius: "30px",
                border: "1px solid #707070",
                borderWidth: `${subMenuOpen ? '1px' : '0px'}`
            }}>
                <button 
                    className={`accordion ${setActive} p-4 d-flex justify-content-between align-items-center border-0 text-left`} 
                    onClick={() => toggleMenu()}
                    style={{
                        backgroundColor: "rgba(0, 84, 255, 0.15)",
                        borderRadius: "inherit"
                    }}
                >
                    <p className="accordion-faq-question mb-0" style={{color: "#000"}}>
                        <strong>
                            {question}
                        </strong>
                    </p>
                    <FontAwesomeIcon icon={subMenuOpen ? faAngleDown : faAngleUp} style={{ height: '20px' }} />
                </button>
                <div
                    ref={faqContent}
                    style={{ maxHeight: `${setHeight}` }}
                    className="accordion-faq-content"
                >
                    <div 
                        className="accordion-text font-sm-14"
                        dangerouslySetInnerHTML={{__html: children}}
                    />
                </div>
            </div>
        </>
    )
}

export default FaqAccordion;