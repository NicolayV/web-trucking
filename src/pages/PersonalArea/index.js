import React from "react";
import GridWrapper from "../../components/UI/GridWrapper";
import NotificationItem from "../../components/UI/NotificationItem";
import BasicButton from "../../components/UI/BasicButton";

const PersonalArea = () => {
  return (
    <GridWrapper item xs={8}>
      Its auth sfasdasd.
      <BasicButton variant="default">go to docs</BasicButton>
      <NotificationItem iconColor="action" iconButtonColor="primary" />
    </GridWrapper>
  );
};

export default PersonalArea;
