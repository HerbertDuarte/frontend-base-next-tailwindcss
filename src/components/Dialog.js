import {} from "react";

export default function Dialog({ model, children }) {

  const [value, setValue] = model;
  if (value) {
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  } else {
    return null;
  }
}
