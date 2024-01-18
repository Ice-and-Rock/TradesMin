import { Card } from "react-bootstrap";

const CompanyData = ({ fetchedCompany }) => {

    console.log("FetchedCompany:", fetchedCompany)

  return (
    <Card>
      <Card.Body>
        <div>
        this is the company data
        </div>
      </Card.Body>
    </Card>
  );
};

export default CompanyData;
