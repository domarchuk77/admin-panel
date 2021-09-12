import Box from "@material-ui/core/Box";

interface EventCardProps {
  text: string;
}

export default function EventCard({ text }: EventCardProps) {
  const getStyles = () => {
    switch (text) {
      case "Active":
        return {
          color: "rgb(34, 154, 22)",
          bgcolor: "rgba(84, 214, 44, 0.16)",
        };
      case "Banned":
        return {
          color: "rgb(183, 33, 54)",
          bgcolor: "rgba(255, 72, 66, 0.16)",
        };
      case "SALE":
        return { bgcolor: "rgb(255, 72, 66)", color: "common.white" };
      case "NEW":
        return { bgcolor: "rgb(24, 144, 255)", color: "common.white" };
      default:
        return null;
    }
  };
  return (
    <Box
      px={1}
      py={0.25}
      borderRadius="8px"
      fontSize={12}
      fontWeight={700}
      display="inline-block"
      {...getStyles()}
    >
      {text}
    </Box>
  );
}
