import React from "react";

function MainForm({ formData, handleSubmit, handleAddForm, handleUpdate }) {
  return (
    <>
      <div className="w-[600px] h-[500px] justify-center left-[450px] top-[80px] rounded-3xl background bg-orange-400 absolute items-center">
        <h1 className="font-bold font-serif text-3xl ml-11 text-2xl top-5 justify-center absolute">
          Personal Information
        </h1>

        <form action="">
          <label
            className="font-bold font-serif ml-11 text-2xl top-[65px] absolute "
            htmlFor="firstName"
          >
            First Name:{" "}
          </label>
          <input
            className="text-zinc-600 top-[54px] w-[250px] h-[40px] absolute rounded-2xl left-[250px] my-3.5"
            onChange={handleUpdate}
            type="text"
            name="firstName"
            value={formData.firstName}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[140px] absolute "
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="text-zinc-600 top-[120px] w-[250px] h-[40px] absolute rounded-2xl left-[250px] my-3.5"
            onChange={handleUpdate}
            type="text"
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[210px] absolute"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="text-zinc-600 top-[190px] w-[250px] h-[40px] absolute rounded-2xl left-[250px] my-3.5 "
            onChange={handleUpdate}
            type="email"
            name="email"
            value={formData.email}
          />
          <br />
          <label
            className="font-bold font-serif ml-11 text-2xl top-[280px] absolute"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="text-zinc-600 top-[260px] w-[250px] h-[40px] absolute rounded-2xl left-[250px] my-3.5 "
            onChange={handleUpdate}
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
          />
          <br />
          <button
            type="button"
            className="top-[380px] bg-blue-500 text-white px-4 py-2 absolute left-8 rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="top-[380px] bg-blue-500 text-white px-4 py-2 absolute left-[150px] rounded-lg"
            onClick={handleAddForm}
          >
            Add Form
          </button>
        </form>
      </div>
    </>
  );
}

export default MainForm;
