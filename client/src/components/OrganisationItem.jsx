import defaultImage from './assets/organisation-default-picture.png';

const OrganisationItem = ({ organisation }) => {
  console.log(organisation);
  const itemPicture = organisation.pictures[0];
  return (
    <>
      <div className="card__post-list">
        <div className="post-item__details">
          {organisation.organisationName ? (
            <h3>{organisation.organisationName}</h3>
          ) : (
            <h3>{organisation.username}</h3>
          )}
          <p>{organisation.description}</p>
          {organisation.pictures ? (
            <img src={itemPicture} alt={organisation.username} />
          ) : (
            <img src={defaultImage} alt={organisation.username} />
          )}
        </div>
      </div>
    </>
  );
};

export default OrganisationItem;
