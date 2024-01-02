import React from "react";
import {Progress} from "@nextui-org/react";

export default function Progresses() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      aria-label="Downloading..."
      size="sm"
      value={value}
      color="secondary"
      showValueLabel={false}
      className="max-w-full"
    />
  );
}
