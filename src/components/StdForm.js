import React from "react";

function StdForm({
  formData,
  index,
  handleUpdate,
  handleAddForm,
  handleSubmit,
  removeForm,
}) {
  return (
    <div>
      <div className="w-[600px] h-[500px] rounded-3xl scroll-my-1 background bg-purple-400 top-[650px] bottom-[30px] left-[450px] relative">
        <h1 className="font-bold font-serif ml-12 text-3xl top-9 justify-center absolute">
          Student Information
        </h1>
        
        <form className=" gap-6 absolute" action="">
          <label
            className="font-bold font-serif ml-11 text-2xl top-[120px] absolute"
            htmlFor="Name"
          >
            Degree:
          </label>
          <input
            className="text-zinc-600 top-[100px] w-[250px] h-[40px] absolute rounded-2xl left-[220px] my-3.5 "
            onChange={(e) => handleUpdate(e, index)}
            type="text"
            name="degree"
            value={formData.degree}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[190px] absolute "
            htmlFor="Age"
          >
            Age
          </label>
          <input
            className="text-zinc-600 top-[170px] w-[250px] h-[40px] absolute rounded-2xl left-[220px] my-3.5"
            onChange={(e) => handleUpdate(e, index)}
            type="number"
            name="age"
            value={formData.age}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[250px] absolute"
            htmlFor="grade"
          >
            Grade
          </label>
          <input
            className="text-zinc-600 top-[230px] w-[250px] h-[40px] absolute rounded-2xl left-[220px] my-3.5 "
            onChange={(e) => handleUpdate(e, index)}
            type="number"
            name="grade"
            value={formData.grade}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[320px] absolute"
            htmlFor="university"
          >
            University
          </label>
          <input
            className="text-zinc-600 top-[300px] w-[250px] h-[40px] absolute rounded-2xl left-[220px] my-3.5 "
            onChange={(e) => handleUpdate(e, index)}
            type="text"
            name="university"
            value={formData.university}
          />
          <br />
          <button
            onClick={handleAddForm}
            type="button"
            className="top-[390px] bg-blue-500 text-white px-4 py-2 absolute left-8 rounded-lg"
          >
            Next
          </button>
          <br />
          <button
            onClick={handleSubmit}
            type="button"
            className="top-[390px] bg-blue-500 text-white px-4 py-2 absolute left-[130px] rounded-lg"
          >
            Submit
          </button>
          <br />
          <button
          onClick={removeForm}
            type="button"
            className="top-[390px] bg-blue-500 text-white px-4 py-2 absolute left-[240px] rounded-lg"
          >
            Remove
          </button>
        </form>
      </div>
    </div>
  );
}

export default StdForm;
