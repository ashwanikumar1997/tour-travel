import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { RupeeIcon } from "../../assets/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { filterTours } from "../../reducers/toursSlice";
import axiosInstance from "../../App/AxiosInstance";
import { useDispatch } from "react-redux";

export const FilterTourPackage = () => {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, watch, setValue, getValues } =
    useForm();

  const onSubmit = async (data) => {
    try {
      if (data) {
        axiosInstance
          .get(
            `/tours/search?endTourCity=${data.where_to_go}&tourPackageAmount=${data.tourPackageAmount}&tourDuration=${data.tour_duration}`
          )
          .then((tours) => {
            dispatch(filterTours(tours.data));
          });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin:"10px",
       
      }}
    >
      <h5 style={{ fontSize: "25px", fontWeight: "bold" }}>Package Filter</h5>
      <hr />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Where to</label>
          <input
            type="text"
            placeholder="where to go"
            {...register("where_to_go")}
          />
          <label>start Date</label>
          <Controller
            control={control}
            name="start_date"
            render={({ field }) => (
              <DatePicker
                showIcon
                {...field}
                selected={field.value}
                onChange={(date) => {
                  setValue("start_date", date, { shouldValidate: true });
                }}
                isClearable
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label>Tour Duration </label>
            <span>{watch("tour_duration")} days</span>
            <input
              type="range"
              {...register("tour_duration")}
              min={1}
              max={30}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label>Rates INR </label>
            <span>
              <RupeeIcon />
              {watch("tourPackageAmount")}
            </span>
            <input
              type="range"
              {...register("tourPackageAmount")}
              min={1000}
              max={247574}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
