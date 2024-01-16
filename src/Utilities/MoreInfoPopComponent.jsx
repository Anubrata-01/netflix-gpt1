import { Button, Pane, Popover } from "evergreen-ui";
import { InfoIcon } from "lucide-react";
import React from "react";
const MoreInfoPopComponent = () => {
  return (
    <div className="">
      <Popover
        position="right"
        left={300}
        content={() => (
          <Pane
            width={650}
            height={500}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            zIndex={1000}
            className="bg-gradient-to-b from-black to-transparent"
          >
            <p className="text-gray-700">hello</p>
          </Pane>
        )}
      >
        <Button
          marginY={7}
          className=""
          marginRight={12}
          iconBefore={InfoIcon}
          intent="danger"
        >
          Info
        </Button>
      </Popover>
    </div>
  );
};

export default MoreInfoPopComponent;
