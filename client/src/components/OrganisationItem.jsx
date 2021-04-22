const OrganisationItem = ({ organisation }) => {
  return (
    <>
      <div className="card__post-list">
        <div className="post-item__details">
          <h3>{organisation.username}</h3>
        </div>
      </div>
    </>
  );
};

export default OrganisationItem;
