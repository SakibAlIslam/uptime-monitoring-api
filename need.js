import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import Loading from "./../../../../_helper/_loading";
import { _dateFormatter } from "./../../../../_helper/_dateFormate";
import ReactToPrint from "react-to-print";
import printIcon from "../../../../_helper/images/print-icon.png";

const GridData = ({ rowDto, loading, headerData }) => {
  const printRef = useRef();
  const total = {
    OpeningQty: 0,
    OpeningVal: 0,
    RcvQty: 0,
    WithoutSDvatValue: 0,
    VatValue: 0,
    IssueQty: 0,
    IssueVal: 0,
    ClosingQty: 0,
    ClosingVal: 0,
    SDValue: 0,
  };
  return (
    <>
      {loading && <Loading />}
      {rowDto?.length > 0 && (
        <div
          className="global-table purchaseRegistration print_wrapper"
          componentRef={printRef}
          ref={printRef}
        >
          <div className="row">
            <div className="col-lg-12 text-right printSectionNone">
              <ReactToPrint
                trigger={() => (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ padding: "2px 5px" }}
                  >
                    <img
                      style={{
                        width: "25px",
                        paddingRight: "5px",
                      }}
                      src={printIcon}
                      alt="print-icon"
                    />
                    Print
                  </button>
                )}
                content={() => printRef.current}
              />
            </div>
            <div className="col-lg-12">
              <div className="d-flex justify-content-center mt-5 mb-3">
                <div className="text-center">
                  <h2>
                    <b>Government of the People's Republic of Bangladesh</b>
                  </h2>
                  <h6>
                    <b>National Board of Revenue(Dhaka)</b>
                  </h6>
                  <h3>
                    <b>Purchase Accounts Book</b>
                  </h3>
                  <h5>
                    Applicable to registered or enlisted persons involved in the
                    processing of goods or services
                  </h5>
                  <h5>
                    [See clauses (a) of Sub-Rules 40 and clause(a) of Rule 41
                  </h5>
                  <h5>Goods/Services input Purchase</h5>
                </div>
                <div
                  className="MushakBox"
                  style={{
                    position: "absolute",
                    right: "14px",
                    top: "17px",
                    border: "1px solid",
                    padding: "2px",
                  }}
                >
                  <h3 className="mb-0">Mushak 6.1</h3>
                </div>
                <p></p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="">
                <b>
                  <p className="mb-1">Name: {headerData?.nameOfTaxpayer}</p>
                  <p className="mb-1">
                    Address:{headerData?.addressOfTaxpayer}
                  </p>
                  <p className="mb-1">Bin No:{headerData?.bin}</p>
                </b>
              </div>
            </div>
            <div className="col-lg-12 purchaseRegistrationTable">
              <table class="table ">
                <thead>
                  <tr>
                    <th rowspan="3">
                      Sl No. <br />1
                    </th>
                    <th rowspan="3">
                      Date <br /> 2
                    </th>
                    <th colspan="2">Opening Balance of Input Stock</th>
                    <th colspan="14">Purchased Stock</th>
                    <th colspan="2">Closing Balance Stock</th>
                    <th rowspan="3">
                      Comments <br /> 21
                    </th>
                  </tr>
                  <tr>
                    <th rowspan="2">
                      Quantity <br /> 3
                    </th>
                    <th rowspan="2">
                      Value <br /> 4
                    </th>
                    <th rowspan="2">
                      Chalan <br /> 5
                    </th>
                    <th rowspan="2">
                      Date <br /> 6
                    </th>
                    <th colspan="3">Seller/Supplier</th>
                    <th rowspan="2">
                      Description <br /> 10
                    </th>
                    <th rowspan="2">
                      Quantity <br /> 11
                    </th>
                    <th rowspan="2">
                      Value <br /> 12
                    </th>
                    <th rowspan="2">
                      Supplementary <br /> 13
                    </th>
                    <th rowspan="2">
                      Vat <br /> 14
                    </th>
                    <th colspan="2">Total Stock</th>
                    <th colspan="2">Issue</th>
                    <th rowspan="2">
                      Quantity <br /> 19 <br /> =(15-17)
                    </th>
                    <th rowspan="2">
                      Value <br /> 20 <br /> =(16-18)
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Name <br /> 7
                    </th>
                    <th>
                      Address <br /> 8
                    </th>
                    <th>
                      National ID <br /> 9
                    </th>
                    <th>
                      Quantity <br /> 15 <br /> =(3+11)
                    </th>
                    <th>
                      Value <br /> 16 <br /> =(4+12)
                    </th>
                    <th>
                      Quantity <br /> 17
                    </th>
                    <th>
                      Value <br /> 18
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rowDto?.map((itm, index) => {
                    total.OpeningQty += itm?.OpeningQty;
                    total.OpeningVal += itm?.OpeningVal;
                    total.RcvQty += itm?.RcvQty;
                    total.WithoutSDvatValue += itm?.WithoutSDvatValue;
                    total.SDValue += itm?.SDValue;
                    total.VatValue += itm?.VatValue;
                    total.IssueQty += itm?.IssueQty;
                    total.IssueVal += itm?.IssueVal;
                    total.ClosingQty += itm?.ClosingQty;
                    total.ClosingVal += itm?.ClosingVal;
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{_dateFormatter(itm?.ChDate)}</td>
                        <td>{itm?.OpeningQty}</td>
                        <td>{itm?.OpeningVal?.toFixed(2)}</td>
                        <td>{itm?.Chalan}</td>
                        <td>{itm?.ChDate}</td>
                        <td>{itm?.SupName}</td>
                        <td>{itm?.SupAdd}</td>
                        <td>{itm?.SupRegNo}</td>
                        <td>{itm?.Remarks}</td>
                        <td>{itm?.RcvQty}</td>
                        <td>{itm?.WithoutSDvatValue?.toFixed(2)}</td>
                        <td>{itm?.SDValue?.toFixed(2)}</td>
                        <td> {itm?.VatValue?.toFixed(2)}</td>
                        <td>{itm?.OpeningQty + itm?.RcvQty}</td>
                        <td>
                          {(itm?.OpeningVal + itm?.WithoutSDvatValue)?.toFixed(
                            2
                          )}
                        </td>
                        <td>{itm?.IssueQty}</td>
                        <td>{itm?.IssueVal?.toFixed(2)}</td>
                        <td>{itm?.ClosingQty}</td>
                        <td>{itm?.ClosingVal?.toFixed(2)}</td>
                        <td></td>
                      </tr>
                    );
                  })}
                  <tr style={{ fontWeight: "bold" }}>
                    <td colSpan="2">Total</td>
                    <td>{total?.OpeningQty}</td>
                    <td>{total?.OpeningVal?.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{total?.RcvQty}</td>
                    <td>{total?.WithoutSDvatValue?.toFixed(2)}</td>
                    <td>{total?.SDValue?.toFixed(2)}</td>
                    <td>{total?.VatValue?.toFixed(2)}</td>
                    <td>{total?.OpeningQty + total?.RcvQty}</td>
                    <td>
                      {(total?.OpeningVal + total?.WithoutSDvatValue)?.toFixed(
                        2
                      )}
                    </td>
                    <td>{total?.IssueQty}</td>
                    <td>{total?.IssueVal?.toFixed(2)}</td>
                    <td>{total?.ClosingQty}</td>
                    <td>{total?.ClosingVal?.toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(GridData);
