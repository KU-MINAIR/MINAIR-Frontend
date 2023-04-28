import React, { useState, ReactElement, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

interface DateProps {
  setStartDate: Function;
  setEndDate: Function;
  startDate: string;
  endDate: string;
}

export default function DateModal({
  setStartDate,
  setEndDate,
}: DateProps): ReactElement {
  const [startDateTmp, setStartDateTmp] = useState<Date>();
  const [endDateTmp, setEndDateTmp] = useState<Date>();

  useEffect(() => {
    if (!startDateTmp || !endDateTmp) return;
    const formedStartDate = dateFormat(startDateTmp).toString();
    const formedEndDate = dateFormat(endDateTmp).toString();
    setStartDate(formedStartDate);
    setEndDate(formedEndDate);
  }, [startDateTmp, endDateTmp]);

  const dateFormat = (date: Date) => {
    return (
      date.getFullYear() +
      "." +
      (date.getMonth() + 1 < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "." +
      (date.getDate() < 9 ? "0" + date.getDate() : date.getDate())
    );
  };

  const onChangeRange = (dates: any) => {
    const [start, end] = dates;
    setStartDateTmp(start);
    setEndDateTmp(end);
  };

  const onChangeStartDate = (startDate: any) => {
    setStartDateTmp(startDate);
  };

  const onChangeEndDate = (EndDate: any) => {
    setEndDateTmp(EndDate);
  };
  return (
    <ModalContainer>
      {/* <StyledDatePicker
        selected={startDateTmp}
        onChange={onChangeRange}
        startDate={startDateTmp}
        endDate={endDateTmp}
        selectsRange
        inline
      ></StyledDatePicker> */}
      <StyledDatePicker
        selected={startDateTmp}
        onChange={onChangeRange}
        startDate={startDateTmp}
        endDate={endDateTmp}
        selectsRange
        inline
        monthsShown={2}
        minDate={new Date()}
        showDisabledMonthNavigation
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div style={{ backgroundColor: "" }}>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
              style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
      ></StyledDatePicker>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  border: none;
`;

const StyledDatePicker = styled(DatePicker)``;
