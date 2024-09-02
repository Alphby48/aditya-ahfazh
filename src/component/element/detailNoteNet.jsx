import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const DetailNoteNet = () => {
  return (
    <div className="w-full flex flex-col p-5 rounded-md bg-lime-100">
      <Fade bottom>
        <h1 className="text-2xl font-poppins mb-3 ml-2 font-semibold">
          Details
        </h1>
      </Fade>
      <Zoom top>
        <div className="w-full p-2 my-3">
          <h2 className="text-xl font-poppins mb-1 font-medium">
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>{" "}
            Basic IP Address Configuration
          </h2>
          <p className="text-base font-poppins ml-5 w-5/6">
            I am capable of understanding basic IP addressing, such as local and
            public IPs, as well as different IP classes like Class A, B, and C.
            I also understand concepts like Gateway, Subnetting, DNS, static IP,
            and dynamic IP.
          </p>
        </div>
        <div className="w-full p-2 my-3">
          <h2 className="text-xl font-poppins mb-1 font-medium">
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>{" "}
            Basic Mikrotik Configuration
          </h2>
          <p className="text-base font-poppins ml-5 w-5/6">
            I am capable of understanding basic Mikrotik configuration. This
            includes configuring WAN on eth1 through dynamic or static routes,
            configuring the firewall to hide local IP addresses from the
            internal network when accessing the internet or other external
            networks, configuring the firewall to block certain websites,
            configuring eth2, eth3, and others as local IPs through static or
            dynamic configurations. Additionally, I understand static and
            dynamic WLAN configuration, creating hotspots using both LAN and
            WLAN, configuring VLANs from one Mikrotik to another, basic PPPoE
            configuration for both WAN settings using PPPoE and LAN
            configuration using PPPoE. I also understand how to set limits on
            LAN and WLAN.
          </p>
        </div>
        <div className="w-full p-2 my-3">
          <h2 className="text-xl font-poppins mb-1 font-medium">
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>{" "}
            Consumer Router Configuration
          </h2>
          <p className="text-base font-poppins ml-5 w-5/6">
            I am capable of understanding consumer router configurations such as
            Totolink and Tenda. This includes configuring WAN with dynamic or
            static IP, as well as PPPoE, and configuring LAN and WLAN with
            static and dynamic IP.
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default DetailNoteNet;
