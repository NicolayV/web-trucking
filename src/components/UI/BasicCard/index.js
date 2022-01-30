import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";

const BasicCard = ({ header, content }) => (
  <Card>
    {header}
    <CardContent>{content}</CardContent>
  </Card>
);

export default BasicCard;
