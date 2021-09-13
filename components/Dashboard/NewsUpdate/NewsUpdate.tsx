import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

interface NewsUpdateProps {
  news: Array<{
    title: string;
    description: string;
    img: string;
    date: string;
  }>;
}

export default function NewsUpdate({ news }: NewsUpdateProps) {
  return (
    <Card>
      <CardHeader sx={{ mb: 3 }} title="News Update"></CardHeader>

      {news.map(({ title, description, date, img }, i) => (
        <Box mb={3} mx={3} display="flex" alignItems="center" key={i}>
          <Avatar
            sx={{ borderRadius: "12px", width: 48, height: 48, mr: 2 }}
            src={img}
          />
          <Stack direction="column" overflow="hidden">
            <Typography variant="subtitle2">{title}</Typography>

            <Typography
              variant="body2"
              color="grey.600"
              noWrap
              sx={{ maxWidth: { lg: 700, xl: 900 } }}
            >
              {description}
            </Typography>
          </Stack>
          <Typography
            variant="caption"
            color="grey.600"
            sx={{ flexShrink: 0, ml: 2.5 }}
          >{`about ${date} hours`}</Typography>
        </Box>
      ))}
    </Card>
  );
}
