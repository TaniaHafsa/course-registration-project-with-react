


const Cart = ({ markedCourses,sumOfCredit, remaining, sumOfPrice }) => {
  return (
      <div className="w-2/3 bg-slate-50 p-5 rounded-xl">


          <h5 className="text-blue-700 text-lg font-bold mb-6 mt-4">Credit Hour Remaining: {remaining} hr</h5>
          <hr className="border-1 border-black" />

          <h1 className=" text-2xl font-bold mb-8 mt-5">Course Name: </h1>
          {
              markedCourses.map(course => (
                  <h3 key={course.id}>{course.title}</h3>
              ))
          }
          <hr className="border-1 border-black mt-5" />
          <h3 className="text-lg font-bold mb-6 mt-3">Total Credit Hour: {sumOfCredit} </h3>
          <h3 className="text-lg font-bold mb-6 mt-3">Total Price: {sumOfPrice}</h3>


      </div>
  );
};

export default Cart;