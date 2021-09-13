import CircularProgress from "@material-ui/core/CircularProgress";
import Stack from "@material-ui/core/Stack";

export default function ProgressBar() {
  return (
    <Stack
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Stack>
  );
}
