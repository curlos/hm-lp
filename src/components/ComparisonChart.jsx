import { Container, Row } from "react-bootstrap"
import styles from '../pages/savings/Savings.module.css'
import Table from 'react-bootstrap/Table';

const ComparisonChart = () => {
    return (
        <Container className={`${styles.buyOrBringPhoneContainer} mt-7`}>
          <h2 className="font-32 font-weight-bold mb-5 text-center">
            Compare And See Why We&apos;re The Best Deal
          </h2>

          <Table>
            <thead>
              <tr>
                <th colSpan={2} style={{
                  backgroundColor: 'transparent'
                }}></th>
                <th>
                  <div className="helloMobileOption">
                    <img src="/assets/HM_Logo-Blue.webp" alt="Hello-Mobile-Logo-Blue" style={{
                      height: '46px'
                    }} />
                  </div>
                </th>
                <th>
                    <div>Mint Mobile</div>
                </th>
                <th>
                    <div>Cricket Wireless</div>
                </th>
                <th className="lastRightTd">
                    <div>Simple Mobile</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="firstLeftHeader">Unlimited Data (1 Line)</td>
                <td>
                    <div className="helloMobileOption">$25/mo</div>
                </td>
                <td>
                    <div>$30/mo</div>
                </td>
                <td>
                    <div>$55/mo</div>
                </td>
                <td className="lastRightTd">
                    <div>$50/mo</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="firstLeftHeader">International Calling</td>
                <td>
                    <div className="helloMobileOption">Unlimited 60+ Countries</div>
                </td>
                <td>
                    <div>Unlimited Mexico & Canada</div>
                </td>
                <td>
                    <div>Unlimited 35+ Countries</div>
                </td>
                <td className="lastRightTd">
                    <div>Unlimited 69+ Countries</div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="firstLeftHeader">Free Trial</td>
                <td>
                  <div className="helloMobileOption">Unlimited 7-Day Data, Talk & Text</div>
                </td>
                <td>
                  <div>250Mb Data, 250 Text & 250 Min 14-Day Trial</div>
                </td>
                <td>
                    <div>Unlimited Call & Text 3GB Data 14-Day Trial</div>
                </td>
                <td className="lastRightTd">
                  <div>N/A</div>
                </td>
              </tr>

              <tr className="lastRow">
                <td>
                </td>
                <td>
                  <div className="emptyTd helloMobileOption" />
                </td>
                <td>
                  <div className="emptyTd" />
                </td>
                <td>
                  <div className="emptyTd" />
                </td>
                <td className="lastRightTd">
                  <div className="emptyTd" />
                </td>
              </tr>

            </tbody>
          </Table>

          <div className="d-flex justify-content-end mt-2" style={{
            fontSize: '12px'
          }}>
            As of February 2023. Information subject to change.
          </div>

          
        </Container>
    )
}

export default ComparisonChart