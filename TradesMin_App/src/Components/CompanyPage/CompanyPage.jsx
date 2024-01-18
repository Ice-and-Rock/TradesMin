import { Container } from "react-bootstrap";
import useFetchCompanyData from "../../hooks/useFetchCompanyData.js";
import CompanyData from "./CompanyData";

const CompanyPage = () => {
  const { data: fetchedCompany, isPending, error } = useFetchCompanyData();

  return (
    <div>
      {error && <div className="text-red-600"> {error} </div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          Waiting for data...
        </div>
      )}
      {fetchedCompany && (
        <Container>
          <CompanyData fetchedCompany={fetchedCompany} />
        </Container>
      )}
    </div>
  );
};

export default CompanyPage;
