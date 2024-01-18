import { useAuth } from "../../Context/AuthProvider";
import { Container } from "react-bootstrap";
import CompanyData from "./CompanyData";
import useFetchCompanysUsersData from "../../hooks/useFetchCompanysUsersData.js";


const CompanyPage = () => {

    const { user } = useAuth()
    const userId = user.id
    // console.log("Auth user's ID =", user.id)

    const { data: userCompanyId, isPending, error } = useFetchCompanysUsersData( userId );
    // console.log("userCompanyId = ", userCompanyId[0].company_id)

 

  return (
    <Container>
      {error && <div className="text-red-600"> {error} </div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          Waiting for data...
        </div>
      )}
      {userCompanyId && (
        <div>
          <CompanyData companyId={userCompanyId[0].company_id} />
        </div>
      )}
    </Container>
  );
};

export default CompanyPage;
