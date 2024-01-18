import useFetchCompanyData from "../../hooks/useFetchCompanyData.js";
import { Card } from "react-bootstrap";

const CompanyData = ({ companyId }) => {
  const {
    data: fetchedCompany,
    isPending,
    error,
  } = useFetchCompanyData(companyId);

//   console.log("Props => CompanyId =", companyId);
//   console.log("FetchedCompany:", fetchedCompany);

  return (
    <Card>
      <Card.Body>
        {error && <div className="text-red-600"> {error} </div>}
        {isPending && (
          <div className="text-pink-500 font-bold m-2 p-2">
            Waiting for data...
          </div>
        )}
        {fetchedCompany && (
          <Card>
            <Card.Header>Hello CompanyData Component!</Card.Header>
            <Card.Body>
            
              <Card.Title>{fetchedCompany[0].company_name}</Card.Title>
              <Card.Text>{fetchedCompany[0].address}</Card.Text>
              <Card.Text>{fetchedCompany[0].postcode}</Card.Text>
              <Card.Text>{fetchedCompany[0].phone_number}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Card.Body>
    </Card>
  );
};

export default CompanyData;
