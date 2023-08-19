import { styled, Card, CardContent } from "@mui/material";

interface GenericCardProps {
  title: String;
  content: String;
}

const QualitiesCard = styled(Card)(({ theme }) => ({
  maxWidth: "350px",
  boxShadow: "0px 4px 60px 10px rgba(0, 0, 0, 0.05)",
  padding: "40px 30px",

  [theme.breakpoints.down("md")]: {
    padding: "20px 15px",
  },
}));

const QualitiesCardTitle = styled(CardContent)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "22px",
  color: "#4F84B7",
}));

const QualitiesCardContent = styled(CardContent)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "16px",
  textAlign: "justify",
}));

const GenericCard = ({ title, content }: GenericCardProps) => {
  return (
    <QualitiesCard>
      <QualitiesCardTitle>{title}</QualitiesCardTitle>
      <QualitiesCardContent>{content}</QualitiesCardContent>
    </QualitiesCard>
  );
};

export default GenericCard;
