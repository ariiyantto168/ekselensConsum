import React from "react";

export default function Kuis(props) {
  const { data } = props;
  return (
    <form>
      <div className="form-group kuis">
        {data.map((item, i) => {
          return (
            <>
              <label className="pertanyaan">
                {`${item.id}. ${item.question}`}
              </label>
              <div className="form-answear-inline">
                {item.answears.map((answear, index) => {
                  return (
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        name={`kuis${item.id}`}
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        {answear}
                      </label>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </form>
  );
}
