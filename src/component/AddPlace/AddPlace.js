import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPlace = () => {
  const diffToast = () => {
        toast.success('Successfully added the user');
      };
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    data.email = user?.email;
    fetch('https://thawing-caverns-28993.herokuapp.com/addPlace', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <h2>Add New place</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '50%', margin: '20px auto' }}
          >
            <input
              {...register('name')}
              className="form-control"
              placeholder="Place Name"
            />
            <br />
            <input
              {...register('price')}
              className="form-control"
              placeholder="Price"
              type="number"
            />
            <br />
            <input
              {...register('offer')}
              className="form-control"
              placeholder="Offer, how many day"
            />
            <br />
            <input
              {...register('location')}
              className="form-control"
              placeholder="Location"
            />
            <br />
            <input
              {...register('img')}
              placeholder="image url"
              className="form-control"
            />
            <br />
            <textarea
              {...register('description')}
              className="form-control"
              placeholder="Description"
            />{' '}
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" className="btn btn-success" onClick={diffToast} />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddPlace;




// import { useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddPlace = () => {  
//   const diffToast = () => {
//     toast.success('Successfully added the user');
//   };

//   const nameRef = useRef();
//   const emailRef = useRef();
//   const imgRef = useRef();
//   const cityRef = useRef();
//   const priceRef = useRef();

//   const handleAddUser = e => {
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const city = cityRef.current.value;
//     const img = imgRef.current.value;
//     const price = priceRef.current.value;

//     const newPlace = { name, email, img, city, price };
//     fetch('https://thawing-caverns-28993.herokuapp.com/place', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(newPlace),
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.insertedId) {
//           e.target.reset();
//         }
//       });

//     e.preventDefault();
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 col-12">
//           <h2>Please Add an User</h2>
//           <form
//             onSubmit={handleAddUser}
//             style={{ width: '50%', margin: '20px auto' }}
//           >
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Place Name"
//               ref={nameRef}
//             />
//             <br />
//             <input
//               type="text"
//               className="form-control"
//               placeholder="City Name"
//               ref={cityRef}
//             />
//             <br />
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Price"
//               ref={priceRef}
//             />
//             <br />
//             <input
//               type="email"
//               placeholder="Email"
//               className="form-control"
//               ref={emailRef}
//             />
//             <br />
//             <input
//               type="img"
//               placeholder="Add Img URL"
//               className="form-control"
//               ref={imgRef}
//             />
//             <br />
//             <textarea
//               type="text"
//               placeholder="details"
//               className="form-control"
//               ref={imgRef}
//             />
//             <br />
//             <input type="submit" value="Add New Place" onClick={diffToast} />
//           </form>
//           <ToastContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddPlace;
