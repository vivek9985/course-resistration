import Course from "./Course";
const App = () => {
  return (
    <>
      <div className="w-[95%] bg-red-50 mx-auto pb-12">
        <h1 className="text-center text-3xl font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-500">
          Course Registration
        </h1>
        <Course />
      </div>
    </>
  );
};
export default App;