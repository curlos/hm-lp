import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

//Components
import FaqAccordion from './FAQAccordion'

const FAQS = () => {

    const FAQList = [
        {
            header: "How Does This Phone Plan Help Me Save?",
            content: "We think that you don't have to pay an arm and a leg for reliable phone service with unpredictable high fees. This means you can budget accordingly each month without the extra worries."
        },
        {
            header: "Are There Any Deals Right Now?",
            content: "Absolutely! We have a limited-time offer for a $25 Amazon Gift Card if you bring your number! Not to mention that each of our plans come with a BOGO promo! Buy one month, get one free!"
        },
        {
            header: "When Does My Prepaid Phone Plan Start?",
            content: "Your prepaid plan starts as soon as you activate your plan. This means, as you order it, you can lean back and chill 2-3 business days to get your Smart Savings Kit. Once the SIM is in your phone, you can activate it and start using it!"
        },
        {
            header: "If I Need More Data, Can I Change My Plan?",
            content: "That's the best part about us. You can change your plan month to month depending on your needs."
        },
        {
            header: "Why Hello Mobile?",
            content: "You told us what you didn't like and we listened! Start saving money on a budget friendly prepaid plan where nothing changes besides the extra savings (no, seriously. You will still enjoy the same if not better data and the free talk & text.)"
        },
        {
            header: "What If I Need Help?",
            content: "We're completely online, which means you don't have to take time off of work or take care of childcare to get the help you need Instead, enjoy customer care from the comfort of your own home, work, or car (we don't care as long as you're safe)."
        }
    ]

    return (
        <>
            <div className="d-flex flex-column gap-4">
                <Row>
                    <Col>
                        <FaqAccordion
                            question={FAQList[0].header}
                        >
                            {FAQList[0].content}
                        </FaqAccordion>
                    </Col>

                    <Col>
                        <FaqAccordion
                            question={FAQList[1].header}
                        >
                            {FAQList[1].content}
                        </FaqAccordion>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FaqAccordion
                            question={FAQList[2].header}
                        >
                            {FAQList[2].content}
                        </FaqAccordion>
                    </Col>

                    <Col>
                        <FaqAccordion
                            question={FAQList[3].header}
                        >
                            {FAQList[3].content}
                        </FaqAccordion>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FaqAccordion
                            question={FAQList[4].header}
                        >
                            {FAQList[4].content}
                        </FaqAccordion>
                    </Col>

                    <Col>
                        <FaqAccordion
                            question={FAQList[5].header}
                        >
                            {FAQList[5].content}
                        </FaqAccordion>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FAQS;