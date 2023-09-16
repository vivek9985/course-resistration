const Cart = ({ selectedCourse, creditHour, remainingHour, totalPrice }) => {
  return (
    <>
      <div className="w-full md:w-6/12 lg:w-3/12">
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-[#2F80ED] font-semibold pb-3">
            Credit Hour Remaining {remainingHour} hr
          </h2>
          <hr />
          <h2 className="text-lg font-semibold pt-3">Course Name</h2>
          <ul className="list-decimal list-inside pt-2 pb-4">
            {selectedCourse.map((course) => (
              <li
                key={course.id}
                className="text-gray-400 py-0.5"
              >
                {course.title}
              </li>
            ))}
          </ul>
          <hr />
          <h2 className="text-gray-600 font-semibold py-3">
            Total Credit Hour : {creditHour} hr
          </h2>
          <hr />
          <h2 className="text-gray-600 font-semibold pt-2">
            Total Price : {totalPrice} USD
          </h2>
        </div>
      </div>
    </>
  );
};
export default Cart;