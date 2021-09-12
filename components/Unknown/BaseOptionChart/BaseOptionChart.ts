import { createStyles, makeStyles } from "@material-ui/styles";

import { theme } from "../../../common/theme/overrides";
import shape from "../../../common/theme/shape";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      ".apexcharts-tooltip,.apexcharts-xaxistooltip": {
        border: "0 !important",
        boxShadow: `${theme.customShadows.z24} !important`,
        color: `${theme.palette.text.primary} !important`,
        borderRadius: `${shape.borderRadiusSm}px !important`,
        backgroundColor: `${theme.palette.background.default} !important`,
      },
      ".apexcharts-tooltip-title": {
        border: "0 !important",
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: `${theme.palette.grey[500_16]} !important`,
        color: theme.palette.text.secondary,
      },
      ".apexcharts-xaxistooltip-bottom": {
        "&:before": {
          borderBottomColor: "transparent !important",
        },
        "&:after": {
          borderBottomColor: `${theme.palette.background.paper} !important`,
        },
      },

      ".apexcharts-legend": {
        padding: "0 !important",
      },
      ".apexcharts-legend-series": {
        alignItems: "center",
        display: "flex !important",
      },
      ".apexcharts-legend-marker": {
        marginTop: "-2px !important",
        marginRight: "8px !important",
      },
      ".apexcharts-legend-text": {
        lineHeight: "18px",
        textTransform: "capitalize",
      },
    },
  })
);

export default function BaseOptionChart() {
  useStyles();

  return {
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main,
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.success.main,
    ],

    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: theme.palette.text.disabled,
      fontFamily: theme.typography.fontFamily,
    },

    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    dataLabels: { enabled: false },

    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },

    grid: {
      strokeDashArray: 3,
      borderColor: theme.palette.divider,
    },

    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    markers: {
      size: 0,
      strokeColors: theme.palette.background.paper,
    },

    legend: {
      show: true,
      fontSize: 13,
      position: "bottom",
      horizontalAlign: "center",
      markers: { radius: 12 },
      itemMargin: { horizontal: 12 },
      labels: {
        colors: theme.palette.text.primary,
      },
    },
  } as unknown as ApexCharts.ApexOptions;
}
