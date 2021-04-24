// import './BirdItem.scss';

// import { getHumanReadableGender } from './../common';

// const getHumanReadableGender = gender =>
//   ({ male: 'Male', female: 'Female' }[gender]);

const CarouselPostItem = ({ result, show }) => {
  // console.log("CarouselPostItem")
  // console.log(result)

  // const show = this.props.show;
  // const result = this.props.results;

  return (
    <>
      <div className={`carousel-content show-${show}`}>
        <div className="card__carousel-list post">
          <div className="carousel-item__img">
            {/* {result.taxon.default_photo ? <img src={result.taxon.default_photo.square_url} alt={result.name}/> : <img src="https://polartowels.weebly.com/uploads/1/0/0/3/10036170/s233308597275768966_p5_i2_w632.jpeg" alt="" className="placeholder-img"/>}     */}
            {!result.pictures[0] ? <img src="https://source.unsplash.com/1600x900/?post" alt={result.title} /> : <img src= {result.pictures[0]} alt={result.title} />}
          </div>

          <div className="carousel-item__details__post">
            <strong>{result.title}</strong>
            {/* <h3>Text: {result.text}</h3>
            <small>
            Date: { new Date(result.addedDate).toLocaleDateString('en-GB')} <br />
              User: {result.creator.username}
            </small> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPostItem;

// <Container className="mt-3">
//               <Row>
//                 <Col md={{ span: 6, offset: 3 }} className="text-center">
//                   <div className="profile">
//                     {!result.pictures[0] ? (
//                       <Image
//                         className="thumbnail"
//                         src="https://source.unsplash.com/1600x900/?post"
//                         alt={result.title}
//                       />
//                     ) : (
//                       <Image
//                         className="thumbnail"
//                         src={result.pictures[0]}
//                         alt={result.title}
//                       />
//                     )}
//                   </div>
//                 </Col>
//               </Row>
//             </Container>