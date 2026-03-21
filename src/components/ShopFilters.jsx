import { Range, getTrackBackground } from "react-range";
// import { useState } from "react";
import "./ShopFilter.css";

const STEP = 1;
const MIN = 0;
const MAX = 1600;

export default function ShopFilters({
  filtersHidden,
  setFiltersHidden,
  checkboxes,
  setCheckboxes,
  values,
  setValues,
  sort,
  setSort,
  ref,
}) {
  function updateCheckboxes(e) {
    const value = e.target.value;
    setCheckboxes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
    console.log(checkboxes);
  }

  return (
    <div
      ref={ref}
      className={filtersHidden ? "filter_panel_hidden" : "filter_panel_show"}
    >
      <div className="checkbox_container">
        <svg
          className="filter_close_icon"
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#1f1f1f"
          onClick={() => {
            setFiltersHidden(true);
          }}
        >
          <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
        </svg>
        <p className="bold">Categories:</p>
        <div>
          <input
            type="checkbox"
            id="sofas"
            name="sofas"
            value="sofas"
            onClick={updateCheckboxes}
            defaultChecked={true}
          />
          <label htmlFor="seating">Sofas</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="seating"
            name="seating"
            value="seating"
            onClick={updateCheckboxes}
            defaultChecked={true}
          />
          <label htmlFor="chairs">Seating</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="tables"
            name="tables"
            value="tables"
            onClick={updateCheckboxes}
            defaultChecked={true}
          />
          <label htmlFor="tables">Tables</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="lighting"
            name="lighting"
            value="lighting"
            onClick={updateCheckboxes}
            defaultChecked={true}
          />
          <label htmlFor="lighting">Lighting</label>
        </div>
      </div>

      <div>
        <p className="bold">Set price range:</p>

        <div>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            rtl={false}
            onChange={(values) => {
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "66px",
                  display: "flex",
                  width: "50%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#2a969c", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "24px",
                  width: "24px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#2a969c" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <output style={{ marginTop: "10px" }} id="output">
            {`£${values[0]} - £${values[1]}`}
          </output>
        </div>
      </div>

      <div>
        <p className="bold">Sort by price:</p>
        <select
          className="select"
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="popular">Most popular</option>
          <option value="lowest">Highest first</option>
          <option value="highest">Lowest first</option>
        </select>
      </div>
    </div>
  );
}
