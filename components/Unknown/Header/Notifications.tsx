import { useRef, useState } from "react";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemButton from "@material-ui/core/ListItemButton";
import Avatar from "@material-ui/core/Avatar";
import Stack from "@material-ui/core/Stack";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import ClockIcon from "./Clock.svg";
import Bell from "./Bell.svg";
import { notifications } from "../../../assets/mocks/data/notifications";
import { ITheme } from "../../../common/theme/overrides";
import { alpha, useTheme } from "@material-ui/system";

export default function Notifications() {
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const anchorRef = useRef(null);
  const theme = useTheme() as ITheme;

  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => setIsOpenPopover(!isOpenPopover)}
        ref={anchorRef}
      >
        Notifications
        <Badge
          badgeContent={notifications.length}
          sx={{ pl: 0.5 }}
          color="error"
        >
          <Bell />
        </Badge>
      </Button>
      <Popover
        anchorEl={anchorRef.current}
        open={isOpenPopover}
        onClose={() => setIsOpenPopover(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1,
            pb: 2,
            overflow: "inherit",
            boxShadow: theme.customShadows.z20,
            border: `solid 1px ${theme.palette.grey[500_8]}`,
            width: 360,
            borderRadius: "16px",
          },
        }}
      >
        <Box p={2}>
          <Typography variant="subtitle1">Notifications</Typography>
          <Typography variant="body2" sx={{ color: "grey.600", mb: 1 }}>
            You have {notifications.length} unread messages
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List sx={{ p: 0 }}>
          {notifications.map(({ title, description, hours, ...props }, i) => (
            <ListItemButton sx={{ py: 1.5, pl: 2.5 }} key={i}>
              <Avatar sx={{ bgcolor: "grey.200", mr: 2 }}>
                <props.icon />
              </Avatar>

              <Box>
                <Typography variant="subtitle2">
                  {title}&nbsp;
                  <Typography
                    variant="body2"
                    color="grey.600"
                    sx={{
                      display: "inline",
                    }}
                  >
                    {description}
                  </Typography>
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  color="grey.500"
                  mt={0.5}
                >
                  <ClockIcon />
                  <Typography sx={{ ml: 0.5 }} variant="caption">
                    about {hours} hours
                  </Typography>
                </Stack>
              </Box>
            </ListItemButton>
          ))}
        </List>
        <Box
          top={-7}
          zIndex={1}
          width={12}
          right={20}
          height={12}
          position="absolute"
          borderRadius="0 0 4px 0"
          bgcolor={theme.palette.background.paper}
          borderRight={`solid 1px ${alpha(theme.palette.grey[500], 0.12)}`}
          borderBottom={`solid 1px ${alpha(theme.palette.grey[500], 0.12)}`}
          sx={{ content: "''", transform: "rotate(-135deg)" }}
        />
      </Popover>
    </>
  );
}
