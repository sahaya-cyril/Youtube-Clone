import React from "react";
import SidebarRow from "./SidebarRow";
import {
  HomeOutlined,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  History,
  OndemandVideo,
  WatchLaterOutlined,
  ThumbUpOutlined,
  ExpandMoreOutlined,
  WhatshotOutlined,
  ShoppingBagOutlined,
  MusicNoteOutlined,
  MovieOutlined,
  SensorsOutlined,
  SportsEsportsOutlined,
  NewspaperOutlined,
  EmojiEventsOutlined,
  LightbulbOutlined,
  DryCleaningOutlined,
  PodcastsOutlined,
  YouTube,
  LiveTv,
  LibraryMusic,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  FeedbackOutlined,
} from "@mui/icons-material";
import SubscriptionRow from "./SubscriptionRow";

const Sidebar = () => {
  return (
    <div className="overflow-y-scroll scrollbar shadow-md w-[18%] my-1">
      <SidebarRow icon={HomeOutlined} title="Home" />
      <SidebarRow icon={ExploreOutlined} title="Explore" />
      <SidebarRow icon={SubscriptionsOutlined} title="Subscription" />
      <hr className="my-2"></hr>
      <SidebarRow icon={VideoLibraryOutlined} title="Library" />
      <SidebarRow icon={History} title="History" />
      <SidebarRow icon={OndemandVideo} title="Your videos" />
      <SidebarRow icon={WatchLaterOutlined} title="Watch later" />
      <SidebarRow icon={ThumbUpOutlined} title="Liked videos" />
      <SidebarRow icon={ExpandMoreOutlined} title="Show more" />
      <hr className="my-2"></hr>
      <div className="pl-6 mt-5 font-semibold">Subscriptions</div>
      <SubscriptionRow
        image="https://yt3.ggpht.com/ytc/AIdro_mHQCjoGcYG4-2xI-Q7_wI-wNtYVtHbinzm2BIGGg=s88-c-k-c0x00ffffff-no-rj"
        name="3Blue1Brown"
      />
      <SubscriptionRow
        image="https://yt3.ggpht.com/ytc/AIdro_njdvP4DyTgoHz9okZptzQRQ7VR7F0Slmxjr7Mp=s88-c-k-c0x00ffffff-no-rj"
        name="5 Minutes Engi..."
      />
      <SubscriptionRow
        image="https://yt3.ggpht.com/cRgz5gSd-Vky4SGrkVeNM9MRiNnuRav8vVrZ5McexXnAnLOwdQq6SBGWKpFJN_8P2luygDbUkSA=s88-c-k-c0x00ffffff-no-rj"
        name="100x Engineers"
      />
      <SubscriptionRow
        image="https://yt3.ggpht.com/bkZ0qJbmdjo_fY7yDp5ISHJ5Xd1LvVic3rwqns22M5-uFQflKZH8K4H3M0LG0p9E4N9fIb3OJB0=s88-c-k-c0x00ffffff-no-rj"
        name="AI Uncovered"
      />
      <SubscriptionRow
        image="https://yt3.ggpht.com/ZdHBp7KqHcbedATfUdjBSTCrUSs0fytbJc-ICG8VyPO3oYqQ2bV6P6Ty4xkOm5f4CzTArEAugQ=s88-c-k-c0x00ffffff-no-rj"
        name="Behindwoods TV"
      />
      <SidebarRow icon={ExpandMoreOutlined} title="Show more" />
      <hr className="my-2"></hr>
      <div className="pl-6 mt-5 font-semibold">Explore</div>
      <SidebarRow icon={WhatshotOutlined} title="Trending" />
      <SidebarRow icon={ShoppingBagOutlined} title="Shopping" />
      <SidebarRow icon={MusicNoteOutlined} title="Music" />
      <SidebarRow icon={MovieOutlined} title="Movies" />
      <SidebarRow icon={SensorsOutlined} title="Live" />
      <SidebarRow icon={SportsEsportsOutlined} title="Gaming" />
      <SidebarRow icon={NewspaperOutlined} title="News" />
      <SidebarRow icon={EmojiEventsOutlined} title="Sports" />
      <SidebarRow icon={LightbulbOutlined} title="Learning" />
      <SidebarRow icon={DryCleaningOutlined} title="Fashion & Beauty" />
      <SidebarRow icon={PodcastsOutlined} title="Podcasts" />
      <hr className="my-2"></hr>
      <div className="pl-6 mt-5 font-semibold">More from YouTube</div>
      <SidebarRow icon={YouTube} title="YouTube Premium" premium="true" />
      <SidebarRow icon={LiveTv} title="YouTube Studio" premium="true" />
      <SidebarRow icon={LibraryMusic} title="YouTube Music" premium="true" />
      <SidebarRow icon={YouTube} title="YouTube Kids" premium="true" />
      <hr className="my-2"></hr>
      <SidebarRow icon={SettingsOutlined} title="Settings" />
      <SidebarRow icon={FlagOutlined} title="Report history" />
      <SidebarRow icon={HelpOutlineOutlined} title="Help" />
      <SidebarRow icon={FeedbackOutlined} title="Send feedback" />
      <hr className="my-2"></hr>
      <div className="ml-7 my-5 font-semibold text-gray-600 text-xs">
        <p>About &nbsp; Press &nbsp; Copyright</p>
        <p>Contact Us &nbsp; Creators</p>
        <p>Advertise &nbsp;Developers</p>
        <br />
        <p>Terms &nbsp; Privacy &nbsp; Policy & Saftey</p>
        <p>How youtube works</p>
        <p>Test new features</p>
        <br />
        <p>&#169; 2024 Google LLC </p>
      </div>
    </div>
  );
};

export default Sidebar;