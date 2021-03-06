import { Link } from 'react-router-dom';
import OrganisationItem from './OrganisationItem';

const OrganisationList = ({ organisations }) => {
  console.log(organisations)
  return (
    <>
      {organisations.map((organisation) => (
        <Link key={organisation._id} to={`/organisation/${organisation._id}`}>
          <OrganisationItem organisation={organisation} />
        </Link>
      ))}
      </>
  );
};

export default OrganisationList;
