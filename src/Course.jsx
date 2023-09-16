import { useEffect, useState } from "react";
import Cart from "./Cart";
import doller from "./assets/dollar-sign 1.svg";
import frame from "./assets/Frame.svg";
import tike from "./assets/tike.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Course = () => {
  const [courses, setCourse] = useState([]);
  const [selectedCourse, setsSelectedCourse] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [creditHour, setCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  const selectHandler = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);
    let creditHour = course.credit;
    let totalPrice = course.price;
    if (isExist) {
      toast(
        <div className="flex items-center ">
          <div className="bg-red-400 flex items-center justify-center w-5 h-5 rounded-full">
              <p className="text-lg font-semibold text-black">!</p>
            </div>
          <h2 className="text-red-500 pl-2">already added to the cart ! </h2>
        </div>
      );
    } else {
      selectedCourse.forEach((course) => {
        creditHour = creditHour + course.credit;
        totalPrice = totalPrice + course.price;
      });
      const remainingHour = 20 - creditHour;
      if (creditHour > 20) {
        toast(
          <div className="flex items-center ">
            <div className="bg-yellow-400 flex items-center justify-center w-[20px] h-[20px] rounded-full">
              <p className="text-lg font-semibold text-black">!</p>
            </div>
            <h3 className="text-yellow-600 pl-2">Sorry ! can't add more than 20hr.</h3>
          </div>
        );
      } else {
        setCreditHour(creditHour);
        setRemainingHour(remainingHour);
        setTotalPrice(totalPrice);
        setsSelectedCourse([...selectedCourse, course]);
        toast(
          <div className="flex items-center ">
            <img className="w-[22px]" src={tike} alt="Frame" />
            <h2 className="text-green-500 pl-2">added to the cart ! </h2>
          </div>
        );
      }
    }
  };
  return (
    <>
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full mx-auto sm:w-ful md:w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-3 rounded-lg">
              <img
                className="cursor-pointer w-full"
                src={course.image}
                alt="image"
              />
              <h2 className="text-sm lg:text-base font-semibold py-3 text-gray-700">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500">
                {course.description.slice(0, 135)}
                ...
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center">
                  <img className="w-5" src={doller} alt="Doller" />
                  <p className="text-gray-400 text-sm font-semibold pl-1">
                    Price : {course.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <img className="w-5" src={frame} alt="Frame" />
                  <p className="text-gray-400 text-sm font-semibold pl-2">
                    Credit : {course.credit}hr
                  </p>
                </div>
              </div>
              <button
                onClick={() => selectHandler(course)}
                className="bg-blue-500 w-full py-1.5 rounded-lg text-white font-semibold tracking-wider mt-4 hover:bg-indigo-700"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <Cart
          selectedCourse={selectedCourse}
          creditHour={creditHour}
          remainingHour={remainingHour}
          totalPrice={totalPrice}
        />
        <ToastContainer />
      </div>
    </>
  );
};
export default Course;