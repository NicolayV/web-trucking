import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";

const BasicCard = ({ header, content, sx }) => (
  <Card sx={sx}>
    {header}
    <CardContent>{content}</CardContent>
  </Card>
);

export default BasicCard;
