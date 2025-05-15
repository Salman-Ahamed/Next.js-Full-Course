"use client";

import { Button } from "@/components/common";

const HomePage = () => {
  return (
    <main>
      <Button
        title="Click me"
        onClick={() => alert("Button clicked")}
        phone={1234567890}
      >
        Click me
      </Button>
    </main>
  );
};

export default HomePage;
