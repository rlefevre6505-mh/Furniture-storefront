import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import "./ShopFilter.css";

const STEP = 1;
const MIN = 0;
const MAX = 1000;

export default function ShopFilters() {
  const [values, setValues] = useState([1, 1000]);

  return (
    <div>
      <div>
        <input type="checkbox" id="sofas" name="sofas" value="sofas" />
        <label htmlFor="sofas">Sofas</label>

        <input type="checkbox" id="chairs" name="chairs" value="chairs" />
        <label htmlFor="chairs">Chairs</label>

        <input type="checkbox" id="tables" name="tables" value="tables" />
        <label htmlFor="tables">Tables</label>

        <input type="checkbox" id="lighting" name="lighting" value="lighting" />
        <label htmlFor="lighting">Lighting</label>
      </div>

      <div>
        <p>Set price range:</p>

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
        <p>Sort by price:</p>
        <select>
          <option value="highest">Highest first</option>
          <option value="lowest">Lowest first</option>
        </select>
      </div>
    </div>
  );
}
