import AndroidIcon from "../../../assets/icons/Android.svg";
import AppleIcon from "../../../assets/icons/Apple.svg";
import MicrosoftIcon from "../../../assets/icons/Microsoft.svg";
import BugIcon from "../../../assets/icons/Bug.svg";
import cover1 from "../icons/covers/cover_1.jpg";
import cover2 from "../icons/covers/cover_2.jpg";
import cover3 from "../icons/covers/cover_3.jpg";
import cover4 from "../icons/covers/cover_4.jpg";
import cover5 from "../icons/covers/cover_5.jpg";

export const dashboardData = {
  infoCards: [
    {
      icon: AndroidIcon,
      iconColor: "rgb(0, 123, 85)",
      bgColor: "rgb(200, 250, 205)",
      value: "714k",
      description: "Weekly Sales",
      textColor: "rgb(0, 82, 73)",
      name: "orders",
      iconBgColor:
        "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
    },
    {
      icon: AppleIcon,
      iconColor: "rgb(12, 83, 183)",
      bgColor: "rgb(208, 242, 255)",
      value: "1.35m",
      description: "New Users",
      textColor: "rgb(4, 41, 122)",
      name: "orders",
      iconBgColor:
        "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
    },
    {
      icon: MicrosoftIcon,
      iconColor: "rgb(183, 129, 3)",
      bgColor: "rgb(255, 247, 205)",
      value: "1.72m",
      description: "Item Orders",
      textColor: "rgb(122, 79, 1)",
      name: "orders",
      iconBgColor:
        "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)",
    },
    {
      icon: BugIcon,
      iconColor: "rgb(183, 33, 54)",
      bgColor: "rgb(255, 231, 217)",
      value: "234",
      description: "Bug Reports",
      textColor: "rgb(122, 12, 46)",
      name: "orders",
      iconBgColor:
        "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
    },
  ],
  websiteVisits: {
    comparison: "+15",
    dates: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    mobile: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    laptop: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    desktop: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
  currentSubject: {
    series1: [80, 50, 30, 40, 100, 20],
    series2: [20, 30, 40, 80, 20, 80],
    series3: [44, 76, 78, 13, 43, 10],
  },
  conversionRates: {
    comparison: "-12",
    facebook: [12, 17, 11, 9, 15, 11, 20],
    instagram: [53, 32, 33, 52, 13, 43, 32],
    twitter: [44, 55, 41, 37, 22, 43, 21],
    linkedin: [9, 7, 5, 8, 6, 9, 4],
  },
  currentVisits: {
    series: [14, 23, 21, 26],
  },
  newsUpdate: {
    news: [
      {
        img: cover1.src,
        title: "Customer Metrics Facilitator",
        description:
          "Consectetur porro omnis impedit voluptas repudiandae qui ipsum ut. Officiis qui reiciendis ducimus velit. Aspernatur ex beatae ducimus officiis nihil iure porro nemo.",
        date: "3",
      },
      {
        img: cover2.src,
        title: "Dynamic Applications Strategist",
        description:
          "Optio commodi omnis aspernatur. Natus molestias ut et porro laudantium voluptatem asperiores. Cupiditate aliquid rerum adipisci.",
        date: "7",
      },
      {
        img: cover3.src,
        title: "Dynamic Usability Representative",
        description:
          "Eos repudiandae modi nulla quibusdam natus occaecati eos. Quia ut minus aut tempora sint sint architecto. Qui distinctio sint at ut vero nisi ea. Vero culpa labore a sit aut sit voluptate corporis. Eos voluptatum reiciendis. Et tempore veritatis cupiditate est perspiciatis illum.",
        date: "13",
      },
      {
        img: cover4.src,
        title: "Legacy Paradigm Officer",
        description:
          "Est qui nobis debitis nesciunt quisquam quia omnis non. Provident sint ipsam et ea. Qui quia similique omnis et vitae quas ea accusantium. Dolore dolorem sed et minus libero suscipit. Recusandae ipsum quasi odio delectus. In velit in iste omnis autem debitis.",
        date: "20",
      },
      {
        img: cover5.src,
        title: "Legacy Program Agent",
        description:
          "In praesentium aut. Aut provident earum nesciunt dolores et neque. Non eum cum dolorum sint sit ratione illum. Autem quasi quaerat et explicabo quisquam nesciunt. Voluptatem enim eos vel dicta est ut ratione quibusdam.",
        date: "23",
      },
    ],
  },
  orderTime: {
    list: [
      {
        circleColor: "#00AB55",
        name: "Departed country of origin",
        date: "29 Apr 2021 22:58",
      },
      {
        circleColor: "rgb(84, 214, 44)",
        name: " Accepted for linehaul transportation",
        date: "22 Apr 2021 22:52",
      },
      {
        circleColor: "rgb(24, 144, 255)",
        name: "Dispatched from sorting center",
        date: "19 Apr 2021 12:32",
      },
      {
        circleColor: "rgb(255, 193, 7)",
        name: "Arrived at sorting center",
        date: "15 Apr 2021 15:52",
      },
      {
        circleColor: "rgb(255, 72, 66)",
        name: "Parcel dispatched",
        date: "10 Apr 2021 14:12",
      },
    ],
  },
};
