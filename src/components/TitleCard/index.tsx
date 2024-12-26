import React from "react";
import { Card, CardBody, Chip } from "@nextui-org/react";
import styles from "./index.module.css";
const TitleCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Chip
      color="success"
      // startContent={<div className={styles.icon} />}
			variant="dot"
			radius="md"
      className="my-2"
    >
      {children}
    </Chip>
  );
};

export default TitleCard;
